import HomeView from "@page/HomeView.vue";
import { RouteRecordRaw } from "vue-router";

// routes configuration sorted in alphabetical order
export const routes: Readonly<RouteRecordRaw[]> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		component: () => import("@page/AboutView.vue"),
	},
];
