import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticatedGuard } from "./guards";
import { routes } from "./routes";

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

router.beforeEach(isAuthenticatedGuard);

export default router;
