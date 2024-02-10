module.exports = function (eleventyConfig) {

	eleventyConfig.addPlugin(require('./config/plugins.js'));

	eleventyConfig.addPlugin(require('./config/passthrough.js'));

	eleventyConfig.addPlugin(require('./config/filters.js'));

	eleventyConfig.addPlugin(require('./config/sass.js'));

	eleventyConfig.addPlugin(require('./config/dev.js'));

	return {
		dir: { // directories for stuff woo
			input: 'src',
			output: 'public',

			includes: '_includes',
			layouts: '_layouts'
		}
	};
};
