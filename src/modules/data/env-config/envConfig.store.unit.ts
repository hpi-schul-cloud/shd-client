import * as serverDefaultApi from "@/serverApi/v3/api/default-api";
import { envsFactory } from "@@/tests/test-utils/factory";
import { mockApiResponse } from "@@/tests/test-utils/mockApiResponse";
import { createMock, DeepMocked } from "@golevelup/ts-jest";
import { createPinia, setActivePinia } from "pinia";
import { useEnvConfigStore } from "./envConfig.store";

describe("EnvConfigStore", () => {
	let defaultApi: DeepMocked<serverDefaultApi.DefaultApiInterface>;

	beforeEach(() => {
		setActivePinia(createPinia());

		defaultApi = createMock<serverDefaultApi.DefaultApiInterface>();

		jest
			.spyOn(serverDefaultApi, "DefaultApiFactory")
			.mockReturnValue(defaultApi);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("loadConfig", () => {
		describe("when loading envs", () => {
			const setup = () => {
				const store = useEnvConfigStore();

				const envs = envsFactory.build();

				defaultApi.serverConfigControllerPublicConfig.mockResolvedValueOnce(
					mockApiResponse({ data: envs })
				);

				return {
					store,
					envs,
				};
			};

			it("should set envs", async () => {
				const { store, envs } = setup();

				await store.loadConfig();

				expect(store.getEnvs).toEqual(envs);
			});
		});
	});

	describe("setEnvs", () => {
		describe("when setting envs", () => {
			const setup = () => {
				const store = useEnvConfigStore();

				const envs = envsFactory.build();

				return {
					store,
					envs,
				};
			};

			it("should set envs", () => {
				const { store, envs } = setup();

				store.setEnvs(envs);

				expect(store.getEnvs).toEqual(envs);
			});
		});
	});
});
