module.exports = eleventyConfig => {

	// /dev/random
	eleventyConfig.addFilter("randomItem", (arr) => {
		arr.sort(() => {
			return 0.5 - Math.random();
		});
	
		return arr.slice(0, 1);
	});

	// Oct 16, 2005
	eleventyConfig.addFilter("datePretty", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	// 2005-01-16T18:32:54.234+00:00
	eleventyConfig.addFilter("dateISO", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toISO(dateObj);
	});

}