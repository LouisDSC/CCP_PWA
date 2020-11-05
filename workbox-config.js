module.exports = {
    "globDirectory": "public/",
    "globPatterns": [
        "**/*.{html,css,svg,ico,js,scss,json}"
    ],
    "swDest": "public/sw.js",
    "swSrc": "src/sw.js",
    "globIgnores": [
        "**/node_modules/**/*"
    ]
};