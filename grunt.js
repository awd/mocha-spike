/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    mocha: {
      index: [ 'tests.html' ]
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'mocha');
  grunt.loadNpmTasks('grunt-mocha');
};
