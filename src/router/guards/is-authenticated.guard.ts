import { useAuthStore } from "@data/auth";
import {
	NavigationGuard,
	NavigationGuardReturn,
	RouteLocationNormalized,
} from "vue-router";
import { postLoginRoute } from "../postLoginRoute";

export const isAuthenticatedGuard: NavigationGuard = (
	to: RouteLocationNormalized
): NavigationGuardReturn => {
	const userIsLoggedIn = useAuthStore().isLoggedIn;

	if (userIsLoggedIn && to.path.startsWith("/login")) {
		return postLoginRoute;
	} else if (userIsLoggedIn || isRoutePublic(to)) {
		return true;
	} else {
		const loginUrl = new URL("/login", window.location.origin);
		loginUrl.searchParams.set("redirect", to.fullPath);

		const relativePath = toPathString(loginUrl);

		return relativePath;
	}
};

export const toPathString = (url: URL): string => {
	return url.pathname + url.search + url.hash;
};

const isRoutePublic = (route: RouteLocationNormalized): boolean => {
	if (typeof route.meta?.isPublic === "boolean") {
		return route.meta.isPublic;
	} else {
		return false;
	}
};
