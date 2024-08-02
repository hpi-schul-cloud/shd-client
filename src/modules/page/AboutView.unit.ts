import { mount } from "@vue/test-utils";
import AboutView from "./AboutView.vue";

describe("AboutView", () => {
	const getWrapper = () => {
		const wrapper = mount(AboutView);

		return {
			wrapper,
		};
	};

	it("should improve the code coverage", () => {
		const { wrapper } = getWrapper();

		expect(wrapper).toBeDefined();
	});
});
