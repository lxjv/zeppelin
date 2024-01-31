
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