import * as serverMeApi from "@/serverApi/v3/api/me-api";
import { meResponseFactory } from "@@/tests/test-utils/factory";
import { mockApiResponse } from "@@/tests/test-utils/mockApiResponse";
import { createMock, DeepMocked } from "@golevelup/ts-jest";
import { createPinia, setActivePinia } from "pinia";
import { useAuthStore } from "./auth.store";

describe("AuthStore", () => {
	let meApi: DeepMocked<serverMeApi.MeApiInterface>;

	beforeEach(() => {
		setActivePinia(createPinia());

		meApi = createMock<serverMeApi.MeApiInterface>();

		jest.spyOn(serverMeApi, "MeApiFactory").mockReturnValue(meApi);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("login", () => {
		describe("when logging in", () => {
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

				await store.login();

				expect(store.me).toEqual(meResponse);
			});
		});
	});

	describe("isLoggedIn", () => {
		describe("when logged in", () => {
			const setup = () => {
				const store = useAuthStore();

				const meResponse = meResponseFactory.build();

				meApi.meControllerMe.mockResolvedValueOnce(
					mockApiResponse({ data: meResponse })
				);

				return {
					store,
				};
			};

			it("should return true", async () => {
				const { store } = setup();

				await store.login();

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
