module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy({ "./assets/**": "/cdn" });
    eleventyConfig.addPassthroughCopy({ "./assets/image/icons": "/" });
    eleventyConfig.addPassthroughCopy({ "./src/meta/.well-known/": "/.well-known" });
    eleventyConfig.addPassthroughCopy({ "./src/meta/.well-known/robots.txt": "/robots.txt" });
    eleventyConfig.addPassthroughCopy({ "./src/meta/manifest.webmanifest": "/manifest.webmanifest" });
    eleventyConfig.addPassthroughCopy({ "./src/_data": "/cdn/data/" });
}
