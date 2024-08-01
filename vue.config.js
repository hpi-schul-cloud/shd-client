const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const NoncePlaceholderPlugin = require("./webpack-config/nonce-placeholder-plugin");
const { VuetifyPlugin } = require("webpack-plugin-vuetify");

const TSCONFIG_PATH = path.resolve(__dirname, "./tsconfig.build.json");

const getDir = (subPath) => path.resolve(__dirname, subPath);

module.exports = defineConfig({
	runtimeCompiler: true,

	transpileDependencies: ["vuetify"],

	configureWebpack: {
		plugins: [
			new VuetifyPlugin({
				styles: { configFile: "src/styles/settings.scss" },
			}),
			new NoncePlaceholderPlugin(),
		],
		resolve: {
			alias: {
				"@data": getDir("src/modules/data"),
				"@feature": getDir("src/modules/feature"),
				"@ui": getDir("src/modules/ui"),
				"@util": getDir("src/modules/util"),
				"@page": getDir("src/modules/page"),
			},
			extensions: [".js", ".ts", ".vue", ".json"],
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					type: "javascript/auto",
					loader: path.resolve(__dirname, "webpack-config/vue-i18n-loader.js"),
					include: [path.resolve(__dirname, "src/locales")],
				},
			],
		},
	},

	// use custom tsconfig for webpack builds
	// to e.g. exclude test files
	// https://github.com/vuejs/vue-cli/issues/2421
	chainWebpack: (config) => {
		config.module
			.rule("ts")
			.use("ts-loader")
			.merge({
				options: {
					configFile: TSCONFIG_PATH,
				},
			});
		// avoid auto format on vue-loader to fix prettier errors
		config.module
			.rule("vue")
			.use("vue-loader")
			.tap((options) => {
				options.prettify = false;
				return options;
			});
		config.plugin("fork-ts-checker").tap((args) => {
			args[0].typescript.configFile = TSCONFIG_PATH;
			return args;
		});
		config.plugin("html").tap((args) => {
			args[0].template = "./index.html";
			args[0].title = "Superhero-Dashboard";
			args[0].favicon = `./public/favicon.png`;
			return args;
		});
		config.plugin("copy").tap((args) => {
			args[0].patterns[0].globOptions.ignore.push(
				path.resolve(__dirname, "./public/themes/**/*")
			);
			return args;
		});
	},

	pluginOptions: {
		i18n: {
			locale: "de",
			fallbackLocale: "de",
			localeDir: "locales",
			enableInSFC: true,
			enableBridge: false,
		},
	},

	devServer:
		process.env.NODE_ENV === "development"
			? {
					port: 4100,
					allowedHosts: "all",
					client: {
						overlay: false,
					},
				}
			: {},
});
