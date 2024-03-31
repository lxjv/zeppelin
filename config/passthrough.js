module.exports = eleventyConfig => {
	eleventyConfig.addPassthroughCopy("./src/cdn/**");
	eleventyConfig.addPassthroughCopy({ "./src/cdn/image/icons": "/" });
	eleventyConfig.addPassthroughCopy({ "./src/meta/.well-known/": "/.well-known" });
	eleventyConfig.addPassthroughCopy({ "./src/meta/.well-known/robots.txt": "/robots.txt" });
	eleventyConfig.addPassthroughCopy({ "./src/meta/manifest.webmanifest": "/manifest.webmanifest" });
}
