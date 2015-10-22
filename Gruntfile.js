module.exports = function(grunt) {
  // Load grunt config
  require('load-grunt-config')(grunt);

  // Register task: default
  grunt.registerTask('default', [
    'sass',
    'jshint',
    'concat',
    'uglify',
    'watch'
  ]);
};