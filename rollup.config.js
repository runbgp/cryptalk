import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'client/source/cryptalk.js',
	output: {
		file: 'client/public/js/cryptalk.js',
		format: 'iife'
	},
	plugins: [
		nodeResolve(),
		commonjs()
	]
};