import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { VBtn } from "vuetify/lib/components/index.mjs";
import vuetify from "./vuetify";

jest.mock("vuetify/styles", () => ({}), { virtual: true });
jest.mock(
	"vuetify/iconsets/mdi-svg",
	() => ({
		aliases: [],
		mdi: [],
	}),
	{ virtual: true }
);

describe("vuetify plugin", () => {
	describe("when creating the vuetify plugin", () => {
		const setup = () => {
			const TestComponent = defineComponent({
				template: "<VBtn></VBtn>",
				components: { VBtn },
			});

			const wrapper = mount(TestComponent, {
				global: { plugins: [vuetify] },
			});

			return {
				wrapper,
			};
		};

		it("should make vuetify components available", () => {
			const { wrapper } = setup();

			const button = wrapper.findComponent(VBtn);

			expect(button.exists()).toEqual(true);
		});
	});
});
