const config = {
	verbose: true,
	coverageProvider: "v8",

	testEnvironment: "jsdom",
	testEnvironmentOptions: {
		customExportConditions: ["node", "node-addons"],
	},

	injectGlobals: true,
	moduleDirectories: ["node_modules"],
	moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx", "mjs"],

	moduleNameMapper: {
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

	testPathIgnorePatterns: ["/node_modules/"],
	testMatch: ["**/*.unit.{j,t}s?(x)"],
	preset: "ts-jest",
	setupFiles: ["./tests/setup.js"],

	transform: {
		"^.+\\.vue$": "@vue/vue3-jest",

		".+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avif)$":
			"jest-transform-stub",

		"^.+\\.mjs$": "babel-jest",
		"^.+\\.jsx?$": "babel-jest",
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				babelConfig: true,
			},
		],
	},
	transformIgnorePatterns: ["/node_modules/(?!vuetify)/"],
	collectCoverageFrom: [
		// Include
		"<rootDir>/src/layouts/**/*.{js,ts,vue}",
		"<rootDir>/src/modules/**/*.{js,ts,vue}",
		"<rootDir>/src/plugins/**/*.(js|ts)",
		"<rootDir>/src/router/guards/**/*.(js|ts)",
		"<rootDir>/src/utils/**/*.(js|ts)",

		// Exclude
		"!<rootDir>/src/**/index.(js|ts)",
		"!<rootDir>/src/**/*.d.(js|ts)",
	],
};

module.exports = config;
