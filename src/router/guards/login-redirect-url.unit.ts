import { envsFactory } from "@@/tests/test-utils/factory";
import { useEnvConfigStore } from "@data/env-config";
import { createPinia, setActivePinia } from "pinia";
import { getLoginUrlWithRedirect } from "./login-redirect-url";

describe("Login Redirect Util", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("getLoginUrlWithRedirect", () => {
		describe("when redirecting to internal login before redirecting to the target url", () => {
			const setup = () => {
				const loginUrl = "https://test.com/login";
				const targetPath = "/dashboard";
				const origin = "https://test.com";
				const envConfigStore = useEnvConfigStore();

				envConfigStore.setEnvs(
					envsFactory.build({
						NOT_AUTHENTICATED_REDIRECT_URL: loginUrl,
					})
				);

				jest.spyOn(window, "location", "get").mockReturnValue({
					origin: origin,
				} as Location);

				return {
					loginUrl,
					targetPath,
					origin,
				};
			};

			it("should redirect to internal login with post-login-redirect to internal target url", () => {
				const { loginUrl, targetPath, origin } = setup();

				const result = getLoginUrlWithRedirect(targetPath);

				expect(result).toEqual(
					`${loginUrl}?redirect=${encodeURIComponent(`${origin}${targetPath}`)}`
				);
			});
		});

		describe("when redirecting to an external login before redirecting to the target url", () => {
			const setup = () => {
				const origin = "https://test.com";
				const loginUrl = `https://external-login.thr/login?service=${encodeURIComponent(origin)}`;
				const targetPath = "/dashboard";
				const envConfigStore = useEnvConfigStore();

				envConfigStore.setEnvs(
					envsFactory.build({
						NOT_AUTHENTICATED_REDIRECT_URL: loginUrl,
					})
				);

				jest.spyOn(window, "location", "get").mockReturnValue({
					origin: origin,
				} as Location);

				return {
					loginUrl,
					targetPath,
					origin,
				};
			};

			it("should redirect to external login with post-login-redirect to internal target url", () => {
				const { loginUrl, targetPath, origin } = setup();

				const result = getLoginUrlWithRedirect(targetPath);

				const redirectUri = encodeURIComponent(`${origin}${targetPath}`);
				expect(result).toEqual(
					`${loginUrl}${encodeURIComponent(`/?redirect=${redirectUri}`)}`
				);
			});
		});
	});
});
