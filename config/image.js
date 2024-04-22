const { eleventyImagePlugin } = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImagePlugin, {
        // The image formats to generate, in order of preference
        formats: ["avif", "webp", "auto"],

        // The images sizes to generate
        widths: [368, 736, 900],

        defaultAttributes: {
            sizes: "auto",
            loading: "lazy",
            decoding: "async",
        },

        filenameFormat: function(id, src, width, format) {
            let filename = path.basename(src, path.extname(src));
            return `${filename}-${width}.${format}`;
        },
    });
};
