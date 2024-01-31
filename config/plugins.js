const pluginRSS = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const addRemoteData = require("@aaashur/eleventy-plugin-add-remote-data");

module.exports = eleventyConfig => {
	eleventyConfig.addPlugin(pluginRSS);
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