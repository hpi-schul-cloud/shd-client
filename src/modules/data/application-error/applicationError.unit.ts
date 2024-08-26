import { defaultApiError, mapAxiosErrorToResponseError } from "@/utils/api";
import {
	apiResponseErrorFactory,
	applicationErrorFactory,
	axiosErrorFactory,
} from "@@/tests/test-utils/factory";
import { ApplicationError } from "./applicationError";

describe(ApplicationError.name, () => {
	describe("fromUnknown", () => {
		describe("when the error is already an application error", () => {
			const setup = () => {
				const error = applicationErrorFactory.build();

				return {
					error,
				};
			};

			it("should return the application error", () => {
				const { error } = setup();

				const result = ApplicationError.fromUnknown(error);

				expect(result).toEqual<ApplicationError>(error);
			});
		});

		describe("when the error is an axios error", () => {
			const setup = () => {
				const error = axiosErrorFactory.build();

				return {
					error,
				};
			};

			it("should return an application error from the api error", () => {
				const { error } = setup();

				const result = ApplicationError.fromUnknown(error);

				expect(result).toEqual<ApplicationError>(
					ApplicationError.fromApiError(mapAxiosErrorToResponseError(error))
				);
			});
		});

		describe("when the error is not a known type", () => {
			const setup = () => {
				const error = new Error("test");

				return {
					error,
				};
			};

			it("should return a generic application error from the default api error", () => {
				const { error } = setup();

				const result = ApplicationError.fromUnknown(error);

				expect(result).toEqual<ApplicationError>(
					new ApplicationError({
						statusCode: defaultApiError.code,
						message: `${defaultApiError.title}: ${defaultApiError.message}`,
						translationKey: "error.generic",
					})
				);
			});
		});
	});

	describe("fromApiError", () => {
		describe("when using the default translation key", () => {
			const setup = () => {
				const apiError = apiResponseErrorFactory.build();

				return {
					apiError,
				};
			};

			it("should return an application error with a generic message", () => {
				const { apiError } = setup();

				const result = ApplicationError.fromApiError(apiError);

				expect(result).toEqual<ApplicationError>(
					new ApplicationError({
						statusCode: apiError.code,
						message: `${apiError.title}: ${apiError.message}`,
						translationKey: "error.generic",
					})
				);
			});
		});

		describe("when specifying a translation key", () => {
			const setup = () => {
				const apiError = apiResponseErrorFactory.build();

				return {
					apiError,
				};
			};

			it("should return an application error with the translation key", () => {
				const { apiError } = setup();

				const result = ApplicationError.fromApiError(
					apiError,
					"error.not.generic"
				);

				expect(result).toEqual<ApplicationError>(
					new ApplicationError({
						statusCode: apiError.code,
						message: `${apiError.title}: ${apiError.message}`,
						translationKey: "error.not.generic",
					})
				);
			});
		});
	});
});
