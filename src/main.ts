import { handleApplicationError } from "@/plugins/application-error-handler";
import { createI18n } from "@/plugins/i18n";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import { initializeAxios } from "@/utils/api";
import { useAuthStore } from "@data/auth";
import { useEnvConfigStore } from "@data/env-config";
import { htmlConfig } from "@feature/render-html";
import axios from "axios";
import { createPinia } from "pinia";
import Cookies from "universal-cookie";
import { createApp } from "vue";
import VueDOMPurifyHTML from "vue-dompurify-html";
import App from "./App.vue";

import "@/styles/global.scss";

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

	const cookies = new Cookies();
	const jwt = cookies.get("jwt");

	if (jwt) {
		axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
		try {
			await useAuthStore().login(jwt);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error("### JWT invalid: ", e);
		}
	}

	app.use(router);
	app.use(vuetify);

	app.mount("#app");
})();
