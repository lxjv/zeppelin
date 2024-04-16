module.exports = eleventyConfig => {
    // /cdn
    eleventyConfig.addPassthroughCopy({ "./assets/text/*": "/cdn/text" });
    eleventyConfig.addPassthroughCopy({ "./assets/text/pgp/verified": "/pgp/verified/" });
    eleventyConfig.addPassthroughCopy({ "./assets/image/*": "/cdn/image" });
    eleventyConfig.addPassthroughCopy({ "./assets/script/*": "/cdn/script" });
    eleventyConfig.addPassthroughCopy({ "./src/_data": "/cdn/data/" });
    eleventyConfig.addPassthroughCopy({ "./assets/image/icons": "/" });

    // well known and other tat
    eleventyConfig.addPassthroughCopy({ "./src/meta/.well-known/": "/.well-known" });
    eleventyConfig.addPassthroughCopy({ "./src/meta/.well-known/robots.txt": "/robots.txt" });
    eleventyConfig.addPassthroughCopy({ "./src/meta/manifest.webmanifest": "/manifest.webmanifest" });
}
