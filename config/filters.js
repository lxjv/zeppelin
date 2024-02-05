const { DateTime } = require("luxon");
const sanitizeHTML = require('sanitize-html')

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

	// no content? no problem!

	

	function getWebmentionsForUrl(webmentions, url) {
		const allowedTypes = ['mention-of', 'in-reply-to']

		const hasRequiredFields = entry => {
			const { author, published, content } = entry
			return author.name && published && content
		}
		const sanitize = entry => {
			const { content } = entry
			if (content['content-type'] === 'text/html') {
				content.value = sanitizeHTML(content.value)
			}
			return entry
		}

		return webmentions
			.filter(entry => entry['wm-target'] === url)
			.filter(entry => allowedTypes.includes(entry['wm-property']))
			.filter(hasRequiredFields)
			.map(sanitize)
	}

}
