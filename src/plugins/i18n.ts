import deDE from "@/locales/de";
import enGB from "@/locales/en";
import esES from "@/locales/es";
import { MessageSchema } from "@/locales/schema";
import ukUA from "@/locales/uk";
import { useEnvConfigStore } from "@data/env-config";
import { NumberFormatOptions } from "@intlify/core-base";
import { createI18n } from "vue-i18n";

export type SupportedLanguages = "en" | "de" | "es" | "uk";

export type LocaleMessages = Record<SupportedLanguages, MessageSchema>;

export type LocaleNumberFormat = Record<
	SupportedLanguages,
	Record<string, NumberFormatOptions>
>;

const messages: LocaleMessages = {
	en: enGB,
	de: deDE,
	es: esES,
	uk: ukUA,
};

const fileSizeFormat = {
	maximumFractionDigits: 2,
};

const numberFormats: LocaleNumberFormat = {
	de: {
		fileSize: fileSizeFormat,
	},
	en: {
		fileSize: fileSizeFormat,
	},
	es: {
		fileSize: fileSizeFormat,
	},
	uk: {
		fileSize: fileSizeFormat,
	},
};

const localCreateI18n = () => {
	const envConfigStore = useEnvConfigStore();

	// If false, the type is a Composer instance for the Composition API, if true, the type is a VueI18n instance for the legacy API
	// https://vue-i18n.intlify.dev/guide/advanced/typescript#global-resource-schema-type-definition
	const i18n = createI18n<false>({
		legacy: false,
		locale: envConfigStore.getEnvs.I18N__DEFAULT_LANGUAGE || "de",
		fallbackLocale: envConfigStore.getEnvs.I18N__FALLBACK_LANGUAGE || "de",
		messages: messages,
		numberFormats,
	});

	return i18n;
};

export { localCreateI18n as createI18n };
