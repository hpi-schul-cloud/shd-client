import {
	apiResponseErrorFactory,
	axiosErrorFactory,
} from "@@/tests/test-utils/factory";
import { mount } from "@vue/test-utils";
import axios, { isAxiosError } from "axios";
import {
	$axios,
	defaultApiError,
	initializeAxios,
	mapAxiosErrorToResponseError,
} from "./api";

jest.mock("axios");
const mockedIsAxiosError = jest.mocked(isAxiosError);

describe("AxiosInstance", () => {
	describe("initializeAxios", () => {
		it("should set $axios", () => {
			initializeAxios(axios);

			expect($axios).toBe(axios);
		});

		it("should set Vue.prototype.$axios", () => {
			const wrapper = mount({
				setup() {
					initializeAxios(axios);
				},
				template: `<div></div>`,
			});

			expect(wrapper.vm.$axios).toBe(axios);
		});
	});

	describe("mapAxiosErrorToResponseError", () => {
		describe("when response payload is an object", () => {
			const setup = () => {
				const expectedPayload = apiResponseErrorFactory.build({
					message: "NOT_FOUND",
					code: 404,
				});
				const responseError = axiosErrorFactory.build({
					response: { data: expectedPayload },
				});

				return {
					responseError,
					expectedPayload,
				};
			};

			it("should return correctly payload", () => {
				mockedIsAxiosError.mockReturnValueOnce(true);
				const { responseError, expectedPayload } = setup();

				const result = mapAxiosErrorToResponseError(responseError);

				expect(result).toStrictEqual(expectedPayload);
			});
		});

		describe("when response payload is a string", () => {
			const setup = () => {
				const status = 555;
				const statusText = "Test status text";
				const data = "NOT_FOUND";
				const code = "BAD_REQUEST";
				const responseError = axiosErrorFactory.build({
					code,
					response: { data, status, statusText },
				});

				return {
					responseError,
					status,
					statusText,
					data,
					code,
				};
			};

			it("should return correctly payload", () => {
				mockedIsAxiosError.mockReturnValueOnce(true);
				const { responseError, data, status, statusText, code } = setup();

				const result = mapAxiosErrorToResponseError(responseError);

				expect(result).toStrictEqual({
					message: data,
					code: status,
					title: statusText,
					type: code,
				});
			});
		});

		describe("when response payload is a string and status is missing", () => {
			const setup = () => {
				const data = "NOT_FOUND";
				const responseError = axiosErrorFactory.build({
					response: { data, status: undefined, statusText: undefined },
				});

				mockedIsAxiosError.mockReturnValueOnce(true);

				return {
					responseError,
					data,
				};
			};

			it("should return correctly payload", () => {
				const { responseError, data } = setup();

				const result = mapAxiosErrorToResponseError(responseError);

				expect(result).toStrictEqual({
					message: data,
					code: defaultApiError.code,
					title: defaultApiError.title,
					type: defaultApiError.type,
				});
			});
		});

		describe("when response payload is undefined", () => {
			const setup = () => {
				const responseError = axiosErrorFactory.build({
					response: {
						data: undefined,
						status: undefined,
						statusText: undefined,
					},
				});

				mockedIsAxiosError.mockReturnValueOnce(true);

				return {
					responseError,
				};
			};

			it("should return correctly payload", () => {
				const { responseError } = setup();

				const result = mapAxiosErrorToResponseError(responseError);

				expect(result).toStrictEqual(defaultApiError);
			});
		});

		describe("when response is undefined", () => {
			const setup = () => {
				const responseError = axiosErrorFactory.build({
					response: undefined,
				});

				mockedIsAxiosError.mockReturnValueOnce(true);

				return {
					responseError,
				};
			};

			it("should return correctly payload", () => {
				const { responseError } = setup();

				const result = mapAxiosErrorToResponseError(responseError);

				expect(result).toStrictEqual(defaultApiError);
			});
		});
	});
});
