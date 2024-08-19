import { createTestingVuetify } from "@@/tests/test-utils/setup";
import { mount } from "@vue/test-utils";
import { VBtn } from "vuetify/lib/components/index.mjs";
import AboutView from "./AboutView.vue";

describe("AboutView", () => {
	const getWrapper = () => {
		const wrapper = mount(AboutView, {
			global: { plugins: [createTestingVuetify()] },
		});

		return {
			wrapper,
		};
	};

	it("should increase the counter button on click", async () => {
		const { wrapper } = getWrapper();

		const counter = wrapper.getComponent(VBtn);
		await counter.trigger("click");

		expect(counter.text()).toEqual("1");
	});
});
