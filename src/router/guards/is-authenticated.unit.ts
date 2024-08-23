import { routeLocationNormalizedFactory } from "@@/tests/test-utils/factory";
import { useAuthStore } from "@data/auth";
import { createTestingPinia } from "@pinia/testing";
import { setActivePinia } from "pinia";
import { RouteLocationNormalized } from "vue-router";
import { postLoginRoute } from "../postLoginRoute";
import { isAuthenticatedGuard } from "./is-authenticated.guard";

describe("Authentication Guard", () => {
	const from: RouteLocationNormalized = {} as RouteLocationNormalized;
	const next = jest.fn();

	beforeEach(() => {
		setActivePinia(createTestingPinia());
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("isAuthenticatedGuard", () => {
		describe("when authenticated", () => {
			const setup = () => {
				const to = routeLocationNormalizedFactory("/test");

				const authStore = useAuthStore();
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				authStore.isLoggedIn = true;

				return {
					to,
				};
			};

			it("should pass", async () => {
				const { to } = setup();

				const result = await isAuthenticatedGuard(to, from, next);

				expect(result).toEqual(true);
			});
		});

		describe("when accessing the login page while authenticated", () => {
			const setup = () => {
				const to = routeLocationNormalizedFactory("/login");

				const authStore = useAuthStore();
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				authStore.isLoggedIn = true;

				return {
					to,
				};
			};

			it("should redirect to the main page", async () => {
				const { to } = setup();

				const result = await isAuthenticatedGuard(to, from, next);

				expect(result).toEqual(postLoginRoute);
			});
		});

		describe("when not authenticated and the url is public", () => {
			const setup = () => {
				const to = routeLocationNormalizedFactory("/test", {
					meta: { isPublic: true },
				});
				const authStore = useAuthStore();

				authStore.me = null;

				return {
					to,
					from,
					next,
				};
			};

			it("should pass", async () => {
				const { to } = setup();

				const result = await isAuthenticatedGuard(to, from, next);

				expect(result).toEqual(true);
			});
		});

		describe("when not authenticated and the url is not public", () => {
			const setup = () => {
				const to = routeLocationNormalizedFactory("/test?param1=value1#hash1");
				const authStore = useAuthStore();

				authStore.me = null;

				return {
					to,
					from,
					next,
				};
			};

			it("should redirect to login with post login redirect query", async () => {
				const { to } = setup();

				const result = await isAuthenticatedGuard(to, from, next);

				expect(result).toEqual(
					"/login?redirect=%2Ftest%3Fparam1%3Dvalue1%23hash1"
				);
			});
		});
	});
});
