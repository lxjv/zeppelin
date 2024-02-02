const pluginRSS = require("@11ty/eleventy-plugin-rss");
const addRemoteData = require("@aaashur/eleventy-plugin-add-remote-data");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = eleventyConfig => {
	eleventyConfig.addPlugin(pluginRSS);
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addPlugin(addRemoteData, {
		data: {
			status: "https://api.omg.lol/address/laker/statuses/latest"
		},
		options: {
			directory: "/tmp/11tycache",
			duration: "1h",
		},
	});
}
