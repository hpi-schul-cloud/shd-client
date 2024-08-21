import { Layouts } from "@/layouts";
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
		path: "/login",
		name: "login",
		component: () => import("@page/Login.page.vue"),
		meta: {
			isPublic: true,
			layout: Layouts.LOGGED_OUT,
		},
	},
];
