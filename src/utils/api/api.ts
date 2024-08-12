import { isObject } from "@vueuse/core";
import { AxiosInstance, isAxiosError } from "axios";
import { getCurrentInstance } from "vue";
import { ApiResponseError, ApiValidationError } from "./types";

let $axios: AxiosInstance;

export const initializeAxios = (axios: AxiosInstance) => {
	$axios = axios;
	const app = getCurrentInstance()?.appContext.app;
	if (app) {
		app.config.globalProperties.$axios = axios;
	}
};

export const defaultApiError: ApiResponseError | ApiValidationError = {
	message: "UNKNOWN_ERROR",
	code: 1,
	title: "",
	type: "Unknown error",
};

export const mapAxiosErrorToResponseError = (
	error: unknown
): ApiResponseError | ApiValidationError => {
	let apiError: ApiResponseError | ApiValidationError = defaultApiError;

	if (
		isAxiosError<
			ApiValidationError | ApiResponseError | string,
			Record<string, unknown>
		>(error)
	) {
		const errorPayload:
			| ApiValidationError
			| ApiResponseError
			| string
			| undefined = error.response?.data;

		if (errorPayload && isObject(errorPayload)) {
			apiError = errorPayload;
		} else if (typeof errorPayload === "string") {
			apiError.message = errorPayload;
			apiError.code = error.response?.status ?? apiError.code;
			apiError.type = error.code ?? apiError.type;
			apiError.title = error.response?.statusText ?? apiError.title;
		}
	}
	return apiError;
};

export { $axios };
