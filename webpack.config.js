const path = require('path')

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
			}
		]
	},
	mode: 'development'
}
