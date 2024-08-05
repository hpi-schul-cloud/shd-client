import { useEnvConfigStore } from "@data/env-config";

export const getLoginUrlWithRedirect = (targetPath: string): string => {
	const currentOrigin = window.location.origin;

	const currentUrl = new URL(targetPath, currentOrigin);
	const loginUrl = new URL(
		useEnvConfigStore().getEnvs.NOT_AUTHENTICATED_REDIRECT_URL,
		currentOrigin // fallback to current origin, if a relative url is configured
	);

	const isInternalUrl = currentUrl.origin === loginUrl.origin;

	if (isInternalUrl) {
		return addRedirectAsParam(loginUrl, currentUrl);
	}

	return addRedirectAsParamToUrlParams(loginUrl, currentUrl);
};

const addRedirectAsParam = (loginUrl: URL, currentUrl: URL) => {
	loginUrl.searchParams.set("redirect", currentUrl.toString());
	return loginUrl.toString();
};

const addRedirectAsParamToUrlParams = (loginUrl: URL, currentUrl: URL) => {
	for (const [name, value] of loginUrl.searchParams.entries()) {
		const isSchulcloudUrl = value.indexOf(currentUrl.origin) === 0;
		if (isSchulcloudUrl) {
			const urlInParameters = new URL(value);
			urlInParameters.searchParams.set("redirect", currentUrl.toString());
			loginUrl.searchParams.set(name, urlInParameters.toString());
		}
	}

	return loginUrl.toString();
};
