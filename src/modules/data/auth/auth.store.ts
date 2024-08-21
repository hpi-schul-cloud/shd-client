import {
	AuthenticationApiFactory,
	AuthenticationApiInterface,
	MeApiFactory,
	MeApiInterface,
	MeResponse,
} from "@/serverApi/v3";
import { $axios } from "@/utils/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ComputedRef, Ref, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
	const me: Ref<MeResponse | null> = ref(null);

	const meApi = (): MeApiInterface => {
		return MeApiFactory(undefined, "v3", $axios);
	};

	const authenticationApi = (): AuthenticationApiInterface => {
		return AuthenticationApiFactory(undefined, "v3", $axios);
	};

	const login = async (
		username: string,
		password: string,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		totp: string
	): Promise<void> => {
		const { data } = await authenticationApi().loginControllerLoginLocal({
			username,
			password,
		});

		const jwt = data.accessToken;

		/* TODO const cookies = new Cookies();
		cookies.set("jwt", jwt, {
			expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
			httpOnly: true,
			secure: true,
			sameSite: true,
		});*/
		document.cookie = `jwt=${jwt}`;

		axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;

		await fetchMe();
	};

	const fetchMe = async (): Promise<void> => {
		const { data } = await meApi().meControllerMe();

		me.value = data;
	};

	const isLoggedIn: ComputedRef<boolean> = computed(() => {
		return me.value !== null;
	});

	return {
		me,
		login,
		fetchMe,
		isLoggedIn,
	};
});
