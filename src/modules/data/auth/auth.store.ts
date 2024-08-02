import { MeApiFactory, MeApiInterface, MeResponse } from "@/serverApi/v3";
import { $axios } from "@/utils/api";
import { defineStore } from "pinia";
import { computed, ComputedRef, Ref, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
	const me: Ref<MeResponse | null> = ref(null);

	const meApi = (): MeApiInterface => {
		return MeApiFactory(undefined, "v3", $axios);
	};

	const login = async (): Promise<void> => {
		const { data } = await meApi().meControllerMe();

		me.value = data;
	};

	const isLoggedIn: ComputedRef<boolean> = computed(() => {
		return me.value !== null;
	});

	return {
		me,
		login,
		isLoggedIn,
	};
});
