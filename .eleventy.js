/*
 * SPDX-FileCopyrightText: 2021 Software Ingenieur Begerad <swingbe.de>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

//define filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

//11ty config file
module.exports = config => {

    //the addPassthroughCopy function takes globs of any sort
    //and can be used multiple times
    //copy `style` folger to the output
    config.addPassthroughCopy("./src/style");

    //copy img` folger to the output
    config.addPassthroughCopy("img");

    //get eleventy to notice changes in the stylce dir
    config.addWatchTarget("./src/style");

    //add filters to config
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);

    //create named colledction called blog
    config.addCollection('blog', collection => {

	//tell 11ty to find all *.md files and return as array
	//displayOrder hangs out in Front Matter
	//Front Matter is accessed with the data prefix
	//as it is data of a priece of content
	//using spread syntax to create a copy of the original array itself instead of mutating the original
	//the reverse method can now safely apply the mutation on the copy
	return [...collection.getFilteredByGlob('./src/blog-posts/*.md')].reverse();
    });

    //return some settings
    return {

	//tell 11ty that markdown, data and HTML files are processed by Nunjucks.js
	markdownTemplateEngine: 'njk',
	dataTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',

	//tell 11ty to look in the src folder for content, templates and other source code and
	//use dist as output folder
	dir: {
	    input: 'src',
	    output: 'dist'
	}
    };
};
