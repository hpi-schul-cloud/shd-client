import { ApplicationError, HttpStatusCode } from "@data/application-error";
import { Factory } from "fishery";

export const applicationErrorFactory = Factory.define<ApplicationError>(
	() =>
		new ApplicationError({
			statusCode: HttpStatusCode.IAmATeapot,
			translationKey: "test.translation.key",
			message: "testMessage",
		})
);
