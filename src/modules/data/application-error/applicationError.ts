import {
	ApiResponseError,
	ApiValidationError,
	mapAxiosErrorToResponseError,
} from "@/utils/api";
import { HttpStatusCode } from "./httpStatusCode.enum";

export interface ApplicationErrorProps {
	statusCode: HttpStatusCode;
	translationKey: string;
	message?: string;
}

export class ApplicationError extends Error {
	public readonly name = ApplicationError.name;

	public statusCode: HttpStatusCode;

	public translationKey: string;

	constructor(props: ApplicationErrorProps) {
		super(props.message);
		this.statusCode = props.statusCode;
		this.translationKey = props.translationKey;
	}

	static fromUnknown(
		error: unknown,
		translationKey?: string
	): ApplicationError {
		if (error instanceof ApplicationError) {
			return error;
		}

		const apiError: ApiResponseError | ApiValidationError =
			mapAxiosErrorToResponseError(error);

		return ApplicationError.fromApiError(apiError, translationKey);
	}

	static fromApiError(
		apiError: ApiResponseError | ApiValidationError,
		translationKey = "error.generic"
	): ApplicationError {
		return new ApplicationError({
			statusCode: apiError.code,
			message: `${apiError.title}: ${apiError.message}`,
			translationKey,
		});
	}
}
