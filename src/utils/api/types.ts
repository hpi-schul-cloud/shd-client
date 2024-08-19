export type ApiResponseError = {
	code: number;
	type: string;
	title: string;
	message: string;
};

export type ApiValidationError = {
	code: number;
	type: string;
	title: string;
	message: string;
	validationErrors: Array<ErrorDetails>;
};

export type ErrorDetails = {
	field: Array<string>;
	errors: Array<string>;
};
