import { handleApplicationError } from "@/plugins/applicationErrorHandler";
import { createI18n } from "@/plugins/i18n";
// Vuetify must be imported before any Component for the @layer styles to work
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import { initializeAxios } from "@/utils/api";
import { useAuthStore, useJwtCookie } from "@data/auth";
import { useEnvConfigStore } from "@data/env-config";
import { htmlConfig } from "@feature/render-html";
import axios from "axios";
import { createPinia } from "pinia";
import { createApp } from "vue";
import VueDOMPurifyHTML from "vue-dompurify-html";
import App from "./App.vue";

const app = createApp(App);

app.config.errorHandler = handleApplicationError;

const pinia = createPinia();
app.use(pinia);

const i18n = createI18n();
app.use(i18n);

app.use(VueDOMPurifyHTML, {
	namedConfigurations: htmlConfig,
});

(async () => {
	const runtimeConfigJson = await axios.get(
		`${window.location.origin}/runtime.config.json`
	);
	axios.defaults.baseURL = runtimeConfigJson.data.apiURL;

	initializeAxios(axios);

	await useEnvConfigStore().loadConfig();

	const authStore = useAuthStore();
	const { getJwt } = useJwtCookie();

	const jwt = getJwt();
	if (jwt) {
		axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;

		try {
			await authStore.fetchMe();
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error("### JWT invalid: ", e);
		}
	}

	app.use(router);
	app.use(vuetify);

	app.mount("#app");
})();
