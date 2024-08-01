import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { ApplicationError } from "./applicationError";

export const useApplicationErrorStore = defineStore("applicationError", () => {
	const error: Ref<ApplicationError | undefined> = ref();

	const setError = (err: ApplicationError) => {
		error.value = err;
	};

	return {
		setError,
	};
});
