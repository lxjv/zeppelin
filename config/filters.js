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