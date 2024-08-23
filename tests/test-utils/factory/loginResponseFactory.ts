import { LoginResponse } from "@/serverApi/v3";
import { Factory } from "fishery";

export const loginResponseFactory = Factory.define<LoginResponse>(
	({ sequence }) => ({
		accessToken: `accessToken-${sequence}`,
	})
);
