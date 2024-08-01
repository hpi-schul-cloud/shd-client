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
}
