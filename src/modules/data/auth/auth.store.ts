import { MeApiFactory, MeApiInterface, MeResponse } from "@/serverApi/v3";
import { $axios } from "@/utils/api/api";
import { defineStore } from "pinia";
import { computed, ComputedRef, Ref, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
	const me: Ref<MeResponse | null> = ref(null);
	const accessToken: Ref<string | null> = ref(null);

	const meApi = (): MeApiInterface => {
		return MeApiFactory(undefined, "v3", $axios);
	};

	const login = async (jwt: string): Promise<void> => {
		const { data } = await meApi().meControllerMe();

		me.value = data;
		accessToken.value = jwt;
	};

	const isLoggedIn: ComputedRef<boolean> = computed(() => {
		return true;
	});

	return {
		login,
		isLoggedIn,
	};
});
