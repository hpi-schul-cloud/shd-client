const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { VuetifyPlugin } = require("webpack-plugin-vuetify");
const NoncePlaceholderPlugin = require("./nonce-placeholder-plugin");
const { DefinePlugin, ProgressPlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

const __base = path.resolve(__dirname, "../..");
const __src = path.resolve(__base, "src");

const getDir = (subPath) => path.resolve(__base, subPath);

module.exports = {
	devtool: false, // "source-map", see https://webpack.js.org/configuration/devtool/

	// Entry: main file
	entry: {
		app: [path.resolve(__src, "main.ts")],
	},

	// Output
	output: {
		filename: "_vue/js/[name].js",
		path: path.resolve(__base, "dist"),
		publicPath: "/",
		chunkFilename: "_vue/js/[name].js",
		clean: true,
	},

	// Optimizations
	optimization: {
		realContentHash: false,
		splitChunks: {
			cacheGroups: {
				defaultVendors: {
					name: "chunk-vendors",
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					chunks: "initial",
				},
				common: {
					name: "chunk-common",
					minChunks: 2,
					priority: -20,
					chunks: "initial",
					reuseExistingChunk: true,
				},
			},
		},
	},

	// Plugins
	plugins: [
		new DefinePlugin({
			__VUE_OPTIONS_API__: "false",
			__VUE_PROD_DEVTOOLS__: "false",
			__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
		}),

		new ProgressPlugin(),

		new VueLoaderPlugin(),
		new VuetifyPlugin({ styles: { configFile: "src/styles/settings.scss" } }),

		new NoncePlaceholderPlugin(),

		new HtmlWebpackPlugin({
			title: "Superhero-Dashboard",
			scriptLoading: "defer",
			favicon: path.resolve(__base, "public", "favicon.png"),
			template: path.resolve(__base, "index.html"),
		}),

		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__base, "public"),
					to: path.resolve(__base, "dist"),
					toType: "dir",
					noErrorOnMissing: true,
					globOptions: {
						ignore: ["**/.DS_Store"],
					},
					info: {
						minimized: true,
					},
				},
			],
		}),

		new ESLintWebpackPlugin({
			extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"],
			failOnWarning: false,
			failOnError: true,
		}),
	],

	resolve: {
		alias: {
			"@": path.resolve(__src),
			"@data": getDir("src/modules/data"),
			"@feature": getDir("src/modules/feature"),
			"@ui": getDir("src/modules/ui"),
			"@util": getDir("src/modules/util"),
			"@page": getDir("src/modules/page"),
		},
		extensions: [".tsx", ".ts", ".mjs", ".js", ".jsx", ".vue", ".json"],
	},

	//Webpack dosent know how to handler all type of files and what to do with them, so this section
	//we can capture and configure a specific type of file and determine a loader plugin to process it
	module: {
		rules: [
			// Javascript
			{
				test: /\.m?jsx?$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			// Typescript
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "babel-loader",
					},
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
							appendTsSuffixTo: [/\.vue$/],
							happyPackMode: false,
							configFile: path.resolve(__base, "tsconfig.build.json"),
						},
					},
				],
			},
			// I18n - TS
			{
				test: /\.ts$/,
				type: "javascript/auto",
				loader: path.resolve(__dirname, "vue-i18n-loader.js"),
				include: [path.resolve(__src, "locales")],
			},
			// Vue
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			// SVG
			{
				test: /\.(svg)(\?.*)?$/,
				type: "asset/resource",
				generator: {
					filename: "_vue/img/[name].[hash:8][ext]",
				},
			},
			// Images
			{
				test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
				type: "asset",
				generator: {
					filename: "_vue/img/[name].[hash:8][ext]",
				},
			},
			// Media
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				type: "asset",
				generator: {
					filename: "_vue/media/[name].[hash:8][ext]",
				},
			},
			// Fonts
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
				type: "asset",
				generator: {
					filename: "_vue/fonts/[name].[hash:8][ext]",
				},
			},
			// CSS, SCSS
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"],
			},
			{
				test: /\.(s([ac])ss)$/,
				use: ["vue-style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
