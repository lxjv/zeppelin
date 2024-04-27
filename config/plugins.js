const pluginRSS = require("@11ty/eleventy-plugin-rss");
//const addRemoteData = require("@aaashur/eleventy-plugin-add-remote-data");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = eleventyConfig => {
	eleventyConfig.addPlugin(pluginRSS);
	eleventyConfig.addPlugin(syntaxHighlight);


}
