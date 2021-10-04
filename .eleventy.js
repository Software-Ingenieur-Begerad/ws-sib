//eleventy config file
module.exports = function(eleventyConfig) {
    //the addPassthroughCopy function takes globs of any sort
    //and can be used multiple times
    eleventyConfig.addPassthroughCopy("style");
    //get eleventy to notice changes in the stylce dir
    eleventyConfig.addWatchTarget("style");
};
