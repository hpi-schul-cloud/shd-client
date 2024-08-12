import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

// TODO N21-2133: Add authentication
// router.beforeEach(isAuthenticatedGuard);

export default router;
