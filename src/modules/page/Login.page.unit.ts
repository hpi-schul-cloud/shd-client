import {
	createTestingI18n,
	createTestingVuetify,
} from "@@/tests/test-utils/setup";
import { useAuthStore } from "@data/auth";
import { createMock, DeepMocked } from "@golevelup/ts-jest";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { setActivePinia } from "pinia";
import { Router, useRouter } from "vue-router";
import { postLoginRoute } from "../../router/postLoginRoute";
import LoginPage from "./Login.page.vue";

jest.mock("vue-router");

describe("LoginPage", () => {
	let routerMock: DeepMocked<Router>;

	const getWrapper = () => {
		const wrapper = mount(LoginPage, {
			global: {
				plugins: [createTestingVuetify(), createTestingI18n()],
			},
		});

		return {
			wrapper,
		};
	};

	beforeEach(() => {
		setActivePinia(createTestingPinia());

		routerMock = createMock<Router>();

		jest.mocked(useRouter).mockReturnValue(routerMock);
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe("Login", () => {
		describe("when logging in as a superhero", () => {
			const setup = () => {
				const username = "username@test.com";
				const password = "password1";
				const authStore = useAuthStore();

				const { wrapper } = getWrapper();

				return {
					wrapper,
					authStore,
					username,
					password,
				};
			};

			it("should login the user and redirect to the home page", async () => {
				const { wrapper, username, password, authStore } = setup();

				const usernameInput = wrapper.find(
					"[data-testid=login-input-username] input"
				);
				const passwordInput = wrapper.find(
					"[data-testid=login-input-password] input"
				);
				const loginBtn = wrapper.find("[data-testid=login-btn]");

				await usernameInput.setValue(username);
				await passwordInput.setValue(password);
				await loginBtn.trigger("click");

				expect(authStore.login).toHaveBeenCalledWith(username, password);
				expect(routerMock.push).toHaveBeenCalledWith(postLoginRoute);
			});
		});

		describe("when a redirect query is defined", () => {
			const setup = () => {
				const username = "username@test.com";
				const password = "password1";
				const redirect = "/test";
				const authStore = useAuthStore();

				routerMock.currentRoute.value.query.redirect = redirect;

				const { wrapper } = getWrapper();

				return {
					wrapper,
					authStore,
					username,
					password,
					redirect,
				};
			};

			it("should redirect to the specified page", async () => {
				const { wrapper, username, password, redirect } = setup();

				const usernameInput = wrapper.find(
					"[data-testid=login-input-username] input"
				);
				const passwordInput = wrapper.find(
					"[data-testid=login-input-password] input"
				);
				const loginBtn = wrapper.find("[data-testid=login-btn]");

				await usernameInput.setValue(username);
				await passwordInput.setValue(password);
				await loginBtn.trigger("click");

				expect(routerMock.push).toHaveBeenCalledWith(redirect);
			});
		});

		describe("when the login fails", () => {
			const setup = () => {
				const username = "username@test.com";
				const password = "password1";
				const authStore = useAuthStore();

				authStore.login = jest.fn().mockRejectedValueOnce(new Error());

				const { wrapper } = getWrapper();

				return {
					wrapper,
					authStore,
					username,
					password,
				};
			};

			it("should display an error", async () => {
				const { wrapper, username, password } = setup();

				const usernameInput = wrapper.find(
					"[data-testid=login-input-username] input"
				);
				const passwordInput = wrapper.find(
					"[data-testid=login-input-password] input"
				);
				const loginBtn = wrapper.find("[data-testid=login-btn]");

				await usernameInput.setValue(username);
				await passwordInput.setValue(password);
				await loginBtn.trigger("click");

				const errorAlert = wrapper.find("[data-testid=login-error]");

				expect(errorAlert.isVisible()).toEqual(true);
				expect(errorAlert.text()).toBeTruthy();
				expect(routerMock.push).not.toHaveBeenCalled();
			});
		});

		describe("when no username or password is defined", () => {
			const setup = () => {
				const authStore = useAuthStore();

				const { wrapper } = getWrapper();

				return {
					wrapper,
					authStore,
				};
			};

			it("should do nothing", async () => {
				const { wrapper, authStore } = setup();

				const loginBtn = wrapper.find("[data-testid=login-btn]");
				await loginBtn.trigger("click");

				expect(authStore.login).not.toHaveBeenCalled();
			});
		});
	});
});
