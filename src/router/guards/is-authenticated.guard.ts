import { useAuthStore } from "@data/auth";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const isAuthenticatedGuard = (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) => {
	const userIsLoggedIn = useAuthStore().isLoggedIn;

	if (userIsLoggedIn && to.path.startsWith("/login")) {
		window.location.assign("/");
	} else if (userIsLoggedIn || isRoutePublic(to)) {
		next();
	} else {
		const loginUrl = new URL("/login", window.location.origin);
		loginUrl.searchParams.set("redirect", to.fullPath);

		const relativePath = toPathString(loginUrl);

		window.location.assign(relativePath);
	}
};

export const toPathString = (url: URL): string => {
	return url.pathname + url.search + url.hash;
};

const isRoutePublic = (route: RouteLocationNormalized) => {
	if (typeof route.meta?.isPublic === "boolean") {
		return route.meta.isPublic;
	} else {
		return false;
	}
};
