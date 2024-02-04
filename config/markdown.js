const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItFootnotes = require("markdown-it-footnote")

const markdownItOptions = {
	html: true,
	breaks: true,
	linkify: true
}

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownItFootnotes)
eleventyConfig.setLibrary('md', markdownLib)
