import {
	ConfigResponse,
	DefaultApiFactory,
	DefaultApiInterface,
} from "@/serverApi/v3";
import { $axios } from "@/utils/api";
import { defineStore } from "pinia";
import { readonly, Ref, ref } from "vue";
import { defaultConfigEnvs } from "./envConfigDefaults";

export const useEnvConfigStore = defineStore("envConfig", () => {
	const envs: Ref<ConfigResponse> = ref(defaultConfigEnvs);

	const serverApi = (): DefaultApiInterface => {
		return DefaultApiFactory(undefined, "v3", $axios);
	};

	const loadConfig = async (): Promise<void> => {
		const { data } = await serverApi().serverConfigControllerPublicConfig();

		envs.value = data;
	};

	const setEnvs = (value: ConfigResponse): ConfigResponse => {
		envs.value = value;

		return envs.value;
	};

	return {
		getEnvs: readonly(envs),
		setEnvs,
		loadConfig,
	};
});
