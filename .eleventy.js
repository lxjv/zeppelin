const pluginRSS = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const addRemoteData = require("@aaashur/eleventy-plugin-add-remote-data");

module.exports = function (eleventyConfig) {
	// plugins
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

	// passthrough
	eleventyConfig.addPassthroughCopy("./src/cdn/style");
	eleventyConfig.addWatchTarget("./src/cdn/style");
	eleventyConfig.addPassthroughCopy("./src/cdn/image");
	eleventyConfig.addPassthroughCopy({ "./src/cdn/icons": "/" });
	eleventyConfig.addPassthroughCopy({"./src/meta/.well-known/": "/.well-known"});
	eleventyConfig.addPassthroughCopy({ "./src/meta/.well-known/robots.txt": "/robots.txt" });	
	
	// random filter
	eleventyConfig.addFilter("randomItem", (arr) => {
		arr.sort(() => {
			return 0.5 - Math.random();
		});
		return arr.slice(0, 1);
	});

	// pretty dates!
	eleventyConfig.addFilter("datePretty", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	// ISO dates!
	eleventyConfig.addFilter("dateISO", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toISO(dateObj);
	});

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};