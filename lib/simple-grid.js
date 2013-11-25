
/*!
 * nib
 * Copyright (c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var stylus = require('stylus');

exports = module.exports = plugin;

/**
 * Stylus path.
 */
exports.path = __dirname;

/**
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */
function plugin() {
  return function(style){
    style.include(__dirname);
  }
}
