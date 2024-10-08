import { ApiValidationError } from "@/utils/api";
import { Factory } from "fishery";

export const apiValidationResponseErrorFactory =
	Factory.define<ApiValidationError>(({ sequence }) => ({
		type: "API_VALIDATION_ERROR",
		title: "API Validation Error",
		message: `ApiValidationError # ${sequence}`,
		code: 400,
		validationErrors: [],
	}));
