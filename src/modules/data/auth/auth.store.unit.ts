import { RoleName } from "@/serverApi/v3";
import * as serverAuthenticationApi from "@/serverApi/v3/api/authentication-api";
import * as serverMeApi from "@/serverApi/v3/api/me-api";
import { initializeAxios } from "@/utils/api";
import {
	loginResponseFactory,
	meResponseFactory,
} from "@@/tests/test-utils/factory";
import { mockApiResponse } from "@@/tests/test-utils/mockApiResponse";
import { createMock, DeepMocked } from "@golevelup/ts-jest";
import { AxiosInstance } from "axios";
import { createPinia, setActivePinia } from "pinia";
import { useAuthStore } from "./auth.store";
import { useJwtCookie } from "./jwtCookie.composable";

jest.mock("./jwtCookie.composable");

describe("AuthStore", () => {
	let meApi: DeepMocked<serverMeApi.MeApiInterface>;
	let authenticationApi: DeepMocked<serverAuthenticationApi.AuthenticationApiInterface>;
	let useJwtCookieMock: DeepMocked<ReturnType<typeof useJwtCookie>>;
	let axiosMock: DeepMocked<AxiosInstance>;

	beforeEach(() => {
		setActivePinia(createPinia());

		meApi = createMock<serverMeApi.MeApiInterface>();
		authenticationApi =
			createMock<serverAuthenticationApi.AuthenticationApiInterface>();
		useJwtCookieMock = createMock<ReturnType<typeof useJwtCookie>>();
		axiosMock = createMock<AxiosInstance>();

		jest.spyOn(serverMeApi, "MeApiFactory").mockReturnValue(meApi);
		jest
			.spyOn(serverAuthenticationApi, "AuthenticationApiFactory")
			.mockReturnValue(authenticationApi);
		jest.mocked(useJwtCookie).mockReturnValue(useJwtCookieMock);
		initializeAxios(axiosMock);
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe("login", () => {
		describe("when the user is a superhero", () => {
			const setup = () => {
				const store = useAuthStore();

				const username = "username1";
				const password = "password1";
				const loginResponse = loginResponseFactory.build();
				const meResponse = meResponseFactory.build({
					roles: [{ id: "superheroRole", name: RoleName.SUPERHERO }],
				});

				authenticationApi.loginControllerLoginLocal.mockResolvedValueOnce(
					mockApiResponse({ data: loginResponse })
				);
				meApi.meControllerMe.mockResolvedValueOnce(
					mockApiResponse({ data: meResponse })
				);

				return {
					store,
					username,
					password,
					meResponse,
					loginResponse,
				};
			};

			it("should set the jwt", async () => {
				const { store, username, password, loginResponse } = setup();

				await store.login(username, password);

				expect(useJwtCookieMock.setJwt).toHaveBeenCalledWith(
					loginResponse.accessToken
				);
			});

			it("should set me", async () => {
				const { store, username, password, meResponse } = setup();

				await store.login(username, password);

				expect(store.me).toEqual(meResponse);
			});
		});

		describe("when the user is not a superhero", () => {
			const setup = () => {
				const store = useAuthStore();

				const username = "username1";
				const password = "password1";
				const loginResponse = loginResponseFactory.build();
				const meResponse = meResponseFactory.build({
					roles: [{ id: "adminRole", name: RoleName.ADMINISTRATOR }],
				});

				authenticationApi.loginControllerLoginLocal.mockResolvedValueOnce(
					mockApiResponse({ data: loginResponse })
				);
				meApi.meControllerMe.mockResolvedValueOnce(
					mockApiResponse({ data: meResponse })
				);

				let hasJwtCookie = false;
				useJwtCookieMock.setJwt.mockImplementation(() => (hasJwtCookie = true));
				useJwtCookieMock.removeJwt.mockImplementation(
					() => (hasJwtCookie = false)
				);

				return {
					store,
					username,
					password,
					meResponse,
					loginResponse,
					hasJwtCookie,
				};
			};

			it("should log the user out", async () => {
				const { store, username, password, hasJwtCookie } = setup();

				await expect(store.login(username, password)).rejects.toThrow();

				expect(axiosMock.delete).toHaveBeenCalledWith("/v1/authentication");
				expect(store.me).toEqual(null);
				expect(hasJwtCookie).toEqual(false);
			});
		});
	});

	describe("logout", () => {
		describe("when the logout api call succeeds", () => {
			const setup = () => {
				const store = useAuthStore();
				store.me = meResponseFactory.build();

				return {
					store,
				};
			};

			it("should log the user out", async () => {
				const { store } = setup();

				await store.logout();

				expect(axiosMock.delete).toHaveBeenCalledWith("/v1/authentication");
			});

			it("should reset me", async () => {
				const { store } = setup();

				await store.logout();

				expect(store.me).toEqual(null);
			});

			it("should remove the jwt", async () => {
				const { store } = setup();

				await store.logout();

				expect(useJwtCookieMock.removeJwt).toHaveBeenCalled();
			});
		});

		describe("when the logout api call fails", () => {
			const setup = () => {
				const store = useAuthStore();
				store.me = meResponseFactory.build();

				axiosMock.delete.mockRejectedValueOnce(new Error());

				return {
					store,
				};
			};

			it("should log the user out", async () => {
				const { store } = setup();

				await store.logout();

				expect(axiosMock.delete).toHaveBeenCalledWith("/v1/authentication");
			});

			it("should reset me", async () => {
				const { store } = setup();

				await store.logout();

				expect(store.me).toEqual(null);
			});

			it("should remove the jwt", async () => {
				const { store } = setup();

				await store.logout();

				expect(useJwtCookieMock.removeJwt).toHaveBeenCalled();
			});
		});
	});

	describe("fetchMe", () => {
		describe("when loading the users data", () => {
			const setup = () => {
				const store = useAuthStore();

				const meResponse = meResponseFactory.build();

				meApi.meControllerMe.mockResolvedValueOnce(
					mockApiResponse({ data: meResponse })
				);

				return {
					store,
					meResponse,
				};
			};

			it("should set me", async () => {
				const { store, meResponse } = setup();

				await store.fetchMe();

				expect(store.me).toEqual(meResponse);
			});
		});
	});

	describe("isLoggedIn", () => {
		describe("when logged in", () => {
			const setup = () => {
				const store = useAuthStore();

				store.me = meResponseFactory.build();

				useJwtCookieMock.hasJwt.mockReturnValue(true);

				return {
					store,
				};
			};

			it("should return true", async () => {
				const { store } = setup();

				expect(store.isLoggedIn).toEqual(true);
			});
		});

		describe("when not logged in", () => {
			const setup = () => {
				const store = useAuthStore();

				return {
					store,
				};
			};

			it("should return false", () => {
				const { store } = setup();

				expect(store.isLoggedIn).toEqual(false);
			});
		});
	});
});
