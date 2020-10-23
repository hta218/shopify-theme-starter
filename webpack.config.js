const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
					{
						// First we transform SASS to standard CSS
						loader: "sass-loader",
						options: {
							implementation: require("sass")
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "app.css"
		})
	],
	mode: 'development'
}
