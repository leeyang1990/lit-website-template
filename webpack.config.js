const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
module.exports = env => {
	return {
		entry: "./src/index.ts",
		devtool: false,
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: "ts-loader",
					options: {
						transpileOnly: true
					}
				},
				{ test: /\.css?$/, loader: "style-loader!css-loader" },
				{
					test: /\.(eot|woff|ttf|png|gif|svg|otf)([\?]?.*)$/,
					loader: "file-loader?name=[path][name].[ext]"
				}
			]
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".json"],
			alias: {}
		},
		externals: {},
		plugins: [
            new HtmlWebpackPlugin({ filename: "index.html", template: "index.html", title: "lit-website" }), 
            new ForkTsCheckerWebpackPlugin()
		]
	};
};
