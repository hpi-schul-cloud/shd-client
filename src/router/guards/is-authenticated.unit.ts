import { meResponseFactory } from "@@/tests/test-utils/factory";
import { useAuthStore } from "@data/auth";
import { createTestingPinia } from "@pinia/testing";
import { setActivePinia } from "pinia";
import { RouteLocationNormalized } from "vue-router";
import { isAuthenticatedGuard } from "./is-authenticated.guard";

jest.mock("./login-redirect-url", () => ({
	getLoginUrlWithRedirect: () => "login-url",
}));

describe("Authentication Guard", () => {
	beforeEach(() => {
		setActivePinia(createTestingPinia());
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("isAuthenticatedGuard", () => {
		describe("when authenticated", () => {
			const setup = () => {
				const to: RouteLocationNormalized = {
					fullPath: "/test",
				} as RouteLocationNormalized;
				const from: RouteLocationNormalized = {} as RouteLocationNormalized;
				const next = jest.fn();
				const authStore = useAuthStore();

				authStore.me = meResponseFactory.build();

				return {
					to,
					from,
					next,
				};
			};

			it("should pass", () => {
				const { to, from, next } = setup();

				isAuthenticatedGuard(to, from, next);

				expect(next).toHaveBeenCalled();
			});
		});

		describe("when the url is public", () => {
			const setup = () => {
				const to: RouteLocationNormalized = {
					fullPath: "/test",
					meta: {
						isPublic: true,
					},
				} as unknown as RouteLocationNormalized;
				const from: RouteLocationNormalized = {} as RouteLocationNormalized;
				const next = jest.fn();
				const authStore = useAuthStore();

				authStore.me = null;

				return {
					to,
					from,
					next,
				};
			};

			it("should pass", () => {
				const { to, from, next } = setup();

				isAuthenticatedGuard(to, from, next);

				expect(next).toHaveBeenCalled();
			});
		});

		describe("when not authenticated and the url is not public", () => {
			const setup = () => {
				const to: RouteLocationNormalized = {
					fullPath: "/test",
				} as RouteLocationNormalized;
				const from: RouteLocationNormalized = {} as RouteLocationNormalized;
				const next = jest.fn();
				const authStore = useAuthStore();

				authStore.me = null;

				const assign = jest.fn();
				Object.defineProperty(window, "location", {
					configurable: true,
					value: { assign },
				});

				return {
					to,
					from,
					next,
					assign,
				};
			};

			it("should redirect to login", () => {
				const { to, from, next, assign } = setup();

				isAuthenticatedGuard(to, from, next);

				expect(assign).toHaveBeenCalledWith("login-url");
			});

			it("should not pass", () => {
				const { to, from, next } = setup();

				isAuthenticatedGuard(to, from, next);

				expect(next).not.toHaveBeenCalled();
			});
		});
	});
});
