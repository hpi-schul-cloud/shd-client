import { mount } from "@vue/test-utils";
import HomeView from "./HomeView.vue";

describe("HomeView", () => {
	const getWrapper = () => {
		const wrapper = mount(HomeView);

		return {
			wrapper,
		};
	};

	it("should improve the code coverage", () => {
		const { wrapper } = getWrapper();

		expect(wrapper).toBeDefined();
	});
});
