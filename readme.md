# Simple grid plugin for Stylus
- - -

Simple fixed customizable grid inspired bootstrap


# Syntax

    make-grid-columns(columns, column-width, [column-name_suffix])


# Example

    @import 'simple-grid'

    // Make grid: 720px, 36cols, 20px
    make-grid-columns(36,20px)


# Installation

    npm i --save simple-grid-stulus


# Usage

You can include simple-grid-stylus via Stylus’s use method:

    var stylus = require('stylus');
    var grid = require('simple-grid-stylus');

    stylus(css)
      .use(grid())
      .render(function(err, output){
        console.log(output);
      });


# Usage with Grunt

You can use simple-grid-stylus with grunt-contrib-stylus:

    grunt.initConfig({
      stylus: {
        options: {
          use: [
            require('simple-grid-stylus')
          ]
        }
        compile: {
          files: {
            'build/styles.css': 'styles/index.styl'
          }
        }
      }
    });


# TODO

*   Add gutter support
*   Add flexible grid support
