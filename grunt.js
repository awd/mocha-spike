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
    mocha: {
        // runs all html files (except test2.html) in the test dir
        // In this example, there's only one, but you can add as many as
        // you want. You can split them up into different groups here
        // ex: admin: [ 'test/admin.html' ]
        all: {
          src: [ 'test/**/!(test2).html' ],
          mocha: {
              ignoreLeaks: false,
              grep: 'food'
          },
          run: true
        },

        // Runs 'test/test2.html' with specified mocha options.
        // This variant auto-includes 'mocha-helper.js' so you do not have
        // to include it in your HTML spec file. Instead, you must add an
        // environment check before you run `mocha.run` in your HTML.
        // test2: {

        //     // Test files
        //     src: [ 'test/test2.html' ],

        //     // mocha options
        //     mocha: {
        //         ignoreLeaks: false,
        //         grep: 'food'
        //     },

        //     // Indicates whether 'mocha.run()' should be executed in
        //     // 'mocha-helper.js'
        //     run: true
        // }
    }
  });

  // Alias 'test' to 'mocha' so you can run `grunt test`
  grunt.registerTask('test', 'mocha');

  // Default task.
  grunt.registerTask('default', 'mocha');

  grunt.loadNpmTasks('grunt-mocha');
};
