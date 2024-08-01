import * as materialAliases from "@/icons/material";
import { createVuetify } from "vuetify";
import * as components from "vuetify/lib/components/index.mjs";
import * as directives from "vuetify/lib/directives/index.mjs";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi-svg.mjs";

export const createTestingVuetify = (options = {}) => {
	const vuetify = createVuetify({
		components: {
			...components,
		},
		directives,
		icons: {
			defaultSet: "mdi",
			aliases: {
				...aliases,
				...materialAliases,
			},
			sets: {
				mdi,
			},
		},
		...options,
	});
	return vuetify;
};
