const { DateTime } = require("luxon");
const sanitizeHTML = require('sanitize-html')

module.exports = eleventyConfig => {

	// /dev/urandom
	eleventyConfig.addFilter("randomItem", (arr) => {
		arr.sort(() => {
			return 0.5 - Math.random();
		});

		return arr.slice(0, 1);
	});

	// STOP! you've violated the law
	eleventyConfig.addFilter("limit", function (arr, limit) {
		return arr.slice(0, limit);
	});

	// Oct 16, 2005
	eleventyConfig.addFilter("datePretty", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	// 2005-01-16T18:32:54.234+00:00
	eleventyConfig.addFilter("dateISO", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toISO(dateObj);
	});

	eleventyConfig.addFilter("removeCollection", function (collections, collectionName) {
		// Filter out the collection with the given name
		return collections.filter(collection => collection._collectionPath !== collectionName);
	});

}
