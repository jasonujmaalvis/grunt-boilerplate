module.exports = function(grunt) {
    // load grunt config
    require('load-grunt-config')(grunt);

    // register task: default
    grunt.registerTask('default', [
        'compass',
        'imagemin',
        'jshint',
        'concat',
        'uglify',
        'watch'
    ]);
};