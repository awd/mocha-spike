/*global module:false*/
module.exports = function(grunt) {
  // Grunt utilities.
  var task = grunt.task;
  // var file = grunt.file;
  // var utils = grunt.utils;
  // var log = grunt.log;
  // var verbose = grunt.verbose;
  // var fail = grunt.fail;
  // var option = grunt.option;
  // var config = grunt.config;
  // var template = grunt.template;


  // Project configuration.
  grunt.initConfig({
    coffee: {
      app: {
        src: ['source/coffee/*.coffee'],
        dest: 'source/js'
      },
      test: {
        src: ['test/coffee/*.coffee'],
        dest: 'test/js'
      }
    },
    mocha: {
      all: {
        src: [ 'test/**/**.html' ],
        mocha: {
          ignoreLeaks: false
        },
        run: true
      }
    }
  });

  // Alias 'test' to 'mocha' so you can run `grunt test`
  grunt.registerTask('test', 'coffee mocha');

  // Default task.
  grunt.registerTask('default', 'mocha');

  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-coffee');
};
