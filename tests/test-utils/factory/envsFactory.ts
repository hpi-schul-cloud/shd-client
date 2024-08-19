import { ConfigResponse } from "@/serverApi/v3";
import { defaultConfigEnvs } from "@data/env-config";
import { Factory } from "fishery";

export const envsFactory = Factory.define<ConfigResponse>(
	() => defaultConfigEnvs
);
