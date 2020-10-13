const path = require('path');
const webpack = require('webpack');

module.exports = {
	target: 'node',
	mode: 'production',
	entry: './src/b64.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [new webpack.DefinePlugin({ 'global.GENTLY': false })],
};
