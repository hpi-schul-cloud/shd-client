import { applicationErrorFactory } from "@@/tests/test-utils/factory";
import {
	ApplicationError,
	HttpStatusCode,
	useApplicationErrorStore,
} from "@data/application-error";
import { createTestingPinia } from "@pinia/testing";
import { setActivePinia } from "pinia";
import { handleApplicationError } from "./applicationErrorHandler";

describe("applicationErrorHandler", () => {
	let consoleErrorSpy: jest.SpyInstance;

	beforeEach(() => {
		setActivePinia(createTestingPinia());

		consoleErrorSpy = jest.spyOn(console, "error");
		consoleErrorSpy.mockImplementation();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("handleApplicationError", () => {
		describe("when handling application errors", () => {
			const setup = () => {
				const applicationErrorStore = useApplicationErrorStore();

				const applicationError = applicationErrorFactory.build();

				return {
					applicationErrorStore,
					applicationError,
				};
			};

			it("should log the error to the console", async () => {
				const { applicationError } = setup();

				handleApplicationError(applicationError);

				expect(consoleErrorSpy).toHaveBeenCalledWith(applicationError);
			});

			it("should set the error in the store", async () => {
				const { applicationErrorStore, applicationError } = setup();

				handleApplicationError(applicationError);

				expect(applicationErrorStore.setError).toHaveBeenCalledWith(
					applicationError
				);
			});
		});

		describe("when handling other errors", () => {
			const setup = () => {
				const applicationErrorStore = useApplicationErrorStore();

				const error = new Error();

				return {
					applicationErrorStore,
					error,
				};
			};

			it("should log the error to the console", async () => {
				const { error } = setup();

				handleApplicationError(error);

				expect(consoleErrorSpy).toHaveBeenCalledWith(error);
			});

			it("should set the error in the store", async () => {
				const { applicationErrorStore, error } = setup();

				handleApplicationError(error);

				expect(applicationErrorStore.setError).toHaveBeenCalledWith(
					new ApplicationError({
						statusCode: HttpStatusCode.InternalServerError,
						translationKey: "error.generic",
					})
				);
			});
		});
	});
});
