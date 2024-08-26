import { meResponseFactory } from "@@/tests/test-utils/factory";
import {
	createTestingI18n,
	createTestingVuetify,
} from "@@/tests/test-utils/setup";
import { useAuthStore } from "@data/auth";
import { createMock, DeepMocked } from "@golevelup/ts-jest";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { setActivePinia } from "pinia";
import { Router, useRouter } from "vue-router";
import LogoutBtn from "./LogoutBtn.vue";

jest.mock("vue-router");

describe("LogoutBtn", () => {
	let routerMock: DeepMocked<Router>;

	const getWrapper = () => {
		const wrapper = mount(LogoutBtn, {
			global: {
				plugins: [createTestingVuetify(), createTestingI18n()],
			},
		});

		return {
			wrapper,
		};
	};

	beforeEach(() => {
		setActivePinia(createTestingPinia());

		routerMock = createMock<Router>();

		jest.mocked(useRouter).mockReturnValue(routerMock);
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe("Username", () => {
		const setup = () => {
			const firstName = "firstName";
			const lastName = "lastName";
			const me = meResponseFactory.build({
				user: {
					firstName,
					lastName,
				},
			});
			const authStore = useAuthStore();
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			authStore.isLoggedIn = true;
			authStore.me = me;

			const { wrapper } = getWrapper();

			return {
				wrapper,
				authStore,
				firstName,
				lastName,
			};
		};

		it("should display the users name", async () => {
			const { wrapper, firstName, lastName } = setup();

			const username = wrapper.find("[data-testid=username]");

			expect(username.text()).toEqual(`${firstName} ${lastName}`);
		});
	});

	describe("when clicking the logout button", () => {
		const setup = () => {
			const authStore = useAuthStore();
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			authStore.isLoggedIn = true;

			const { wrapper } = getWrapper();

			return {
				wrapper,
				authStore,
			};
		};

		it("should log the user out and redirect to login", async () => {
			const { wrapper, authStore } = setup();

			const logoutBtn = wrapper.find("[data-testid=logout-btn]");
			await logoutBtn.trigger("click");

			expect(authStore.logout).toHaveBeenCalled();
			expect(routerMock.push).toHaveBeenCalledWith("/login");
		});
	});
});
