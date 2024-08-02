import { LanguageType } from "@/serverApi/v3";
import { envsFactory } from "@@/tests/test-utils/factory";
import { useEnvConfigStore } from "@data/env-config";
import { createPinia, setActivePinia } from "pinia";
import { unref } from "vue";
import { createI18n, LocaleNumberFormat } from "./i18n";

describe("i18n plugin", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("when creating the i18n plugin", () => {
		const setup = () => {
			const envs = envsFactory.build({
				I18N__DEFAULT_LANGUAGE: LanguageType.De,
				I18N__FALLBACK_LANGUAGE: LanguageType.En,
			});

			useEnvConfigStore().setEnvs(envs);
		};

		it("should set the locales from the config", () => {
			setup();

			const i18n = createI18n();

			expect(unref(i18n.global.locale)).toEqual(LanguageType.De);
			expect(unref(i18n.global.fallbackLocale)).toEqual(LanguageType.En);
		});

		it("sets the number formats for all supported languages correctly", () => {
			setup();

			const i18n = createI18n();

			const numberFormats = unref(
				i18n.global.numberFormats
			) as LocaleNumberFormat;

			expect(unref(numberFormats).de.fileSize.maximumFractionDigits).toEqual(2);
			expect(unref(numberFormats).en.fileSize.maximumFractionDigits).toEqual(2);
			expect(unref(numberFormats).es.fileSize.maximumFractionDigits).toEqual(2);
			expect(unref(numberFormats).uk.fileSize.maximumFractionDigits).toEqual(2);
		});
	});

	describe("when the envs are undefined", () => {
		const setup = () => {
			const envs = envsFactory.build({
				I18N__DEFAULT_LANGUAGE: undefined,
				I18N__FALLBACK_LANGUAGE: undefined,
			});

			useEnvConfigStore().setEnvs(envs);
		};

		it("should set the locale to 'de'", () => {
			setup();

			const i18n = createI18n();

			expect(unref(i18n.global.locale)).toEqual("de");
			expect(unref(i18n.global.fallbackLocale)).toEqual("de");
		});
	});
});
