import { applicationErrorFactory } from "@@/tests/test-utils/factory";
import { createPinia, setActivePinia } from "pinia";
import { useApplicationErrorStore } from "./applicationError.store";

describe("EnvConfigStore", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("setError", () => {
		describe("when loading envs", () => {
			const setup = () => {
				const store = useApplicationErrorStore();

				const error = applicationErrorFactory.build();

				return {
					store,
					error,
				};
			};

			it("should set the error", async () => {
				const { store, error } = setup();

				store.setError(error);

				expect(store.getError).toEqual(error);
			});
		});
	});
});
