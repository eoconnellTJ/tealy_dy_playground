module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      css: {
        files: ["sass/**/*.scss"],
        tasks: ["sass", "postcss", "cssmin"], //runs the sass task
        options: {
          livereload: true // needed to run LiveReload
        }
      },
      js: {
        files: "**/*.js",
        tasks: ["uglify"]
      }
    },
    sass: {
      options: {
        sourceMap: true,
        style: "expanded",
        require: "susy"
      },
      dist: {
        files: {
          "public/stylesheets/style.css": "sass/style.scss"
        }
      }
    },
    postcss: {
      // Begin Post CSS Plugin
      options: {
        map: false,
        processors: [
          require("pixrem")(), // add fallbacks for rem units
          require("autoprefixer")({ browsers: "last 2 versions" }), // add vendor prefixes
          require("cssnano")() // minify the result
        ]
      },
      dist: {
        src: "public/stylesheets/style.css"
      }
    },
    cssmin: {
      // Begin CSS Minify Plugin
      target: {
        files: {
          "public/stylesheets/style.min.css": "public/stylesheets/style.css"
        }
      }
    },
    uglify: {
      // Begin JS Uglify Plugin
      my_target: {
        files: {
          "public/scripts/script.min.js": ["public/scripts/*.js"]
        }
      }
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["watch"]);
};
