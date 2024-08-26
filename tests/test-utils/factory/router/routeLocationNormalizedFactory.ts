import { RouteLocationNormalized } from "vue-router";

export const routeLocationNormalizedFactory = (
	path: string,
	overwrite: Partial<RouteLocationNormalized> = {}
): RouteLocationNormalized => {
	const url = new URL(path, "https://dummy.com");
	return {
		fullPath: url.pathname + url.search + url.hash,
		path: url.pathname,
		meta: {},
		params: {},
		query: Object.fromEntries(url.searchParams.entries()),
		name: undefined,
		hash: url.hash,
		matched: [],
		redirectedFrom: undefined,
		...overwrite,
	};
};
