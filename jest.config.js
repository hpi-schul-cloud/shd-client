const deepmerge = require("deepmerge");
const defaultPreset = require("@vue/cli-plugin-unit-jest/presets/typescript-and-babel/jest-preset.js");

const config = deepmerge(defaultPreset, {
	testMatch: ["**/*.unit.{j,t}s?(x)"],

	moduleFileExtensions: ["mjs"],
	transform: {
		"^.+\\.mjs$": "babel-jest",
	},

	moduleNameMapper: {
		"^axios$": require.resolve("axios"),
		"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/tests/test-utils/mediaFileMock.js",
		"^@data/(.*)$": "<rootDir>/src/modules/data/$1",
		"^@feature/(.*)$": "<rootDir>/src/modules/feature/$1",
		"^@page/(.*)$": "<rootDir>/src/modules/page/$1",
		"^@ui/(.*)$": "<rootDir>/src/modules/ui/$1",
		"^@util/(.*)$": "<rootDir>/src/modules/util/$1",
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@@/(.*)$": "<rootDir>/$1",
	},

	setupFiles: ["./tests/setup.js"],

	collectCoverageFrom: [
		// Include
		"<rootDir>/src/layouts/**/*.{js,ts}", // add vue files
		"<rootDir>/src/modules/**/*.{js,ts}", // add vue files
		"<rootDir>/src/plugins/**/*.(js|ts)",
		"<rootDir>/src/router/guards/**/*.(js|ts)",
		"<rootDir>/src/utils/**/*.(js|ts)",

		// Exclude
		"!<rootDir>/src/**/index.(js|ts)",
		"!<rootDir>/src/plugins/vuetify.ts",
	],
});

// we have to overwrite(!) config.transformIgnorePatterns here
// otherwise the rule would be added and have no effect
config.transformIgnorePatterns = ["/node_modules/(?!vuetify)/"];

module.exports = config;
