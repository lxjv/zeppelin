module.exports = {
	posts: function (collectionApi) {
		return collectionApi.getFilteredByGlob('src/content/posts/**/*.md');
	},
	projects: function (collectionApi) {
		return collectionApi.getFilteredByGlob('src/content/projects/**/*.md');
	}
};