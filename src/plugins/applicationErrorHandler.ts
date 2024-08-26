import {
	ApplicationError,
	HttpStatusCode,
	useApplicationErrorStore,
} from "@data/application-error";

export const handleApplicationError = (err: unknown) => {
	/**
	 * Note: The Global-ErrorHandler wraps the error
	 * so we can't use instanceof ApplicationError here.
	 */
	// eslint-disable-next-line no-console
	console.error(err);

	const applicationErrorStore = useApplicationErrorStore();

	const applicationError = err as ApplicationError;
	if (applicationError.name === ApplicationError.name) {
		applicationErrorStore.setError(applicationError);
	} else {
		applicationErrorStore.setError(
			new ApplicationError({
				statusCode: HttpStatusCode.InternalServerError,
				translationKey: "error.generic",
			})
		);
	}
};
