const pluginWebmentions = require("@chrisburnell/eleventy-cache-webmentions")
const configWebmentions = require("../src/_data/webmentions.js")

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebmentions, configWebmentions)
}
