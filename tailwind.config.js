// tailwind.config.js
module.exports = {
	corePlugins: {
		fontFamily: false
	},
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: [
		'./**/*.html',
		'./**/*.liquid'
	],
	theme: {
		extend: {},
		variants: {},
		plugins: []
	}
}
