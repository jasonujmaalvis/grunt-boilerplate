module.exports = function(grunt) {
    /*
        Grunt Requirements.
        =========================================

        1. Ruby (windows only as Mac OS X already has this installed) - http://rubyinstaller.org/
        2. Node.js and Node's package manager system (NPM) - http://nodejs.org/download/
        3. Grunt CLI (command line interface) - http://gruntjs.com/getting-started

        Grunt installation
        =========================================

        1. npm install -g grunt-cli

        Grunt (within the same directory as the package.json file)

        1. npm install
        2. grunt

        Grunt run dev task

        1. grunt dev

        Useful links
        =========================================

        http://seesparkbox.com/foundry/love_your_frontend_tools_windows#node
    */


    /*
     * Utility to load the different option files
     * based on their names
     */
    function loadConfig(path) {
        var glob = require('glob'),
            object = {},
            key;

        glob.sync('*', {cwd: path}).forEach(function(option) {
            key = option.replace(/\.js$/,'');
            object[key] = require(path + option);
        });

        return object;
    }

    /*
     * Initial config
     */
    var config = {
        pkg: grunt.file.readJSON('package.json')
    }

    /*
     * Load tasks from the tasks folder
     */
    grunt.loadTasks('tasks');

    /*
     * Load all the tasks options in tasks/options base on the name:
     * watch.js => watch{}
     */
    grunt.util._.extend(config, loadConfig('./tasks/options/'));

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);

    /*
     * Register Tasks
     * Default Task is basically a rebuild
     */
    grunt.registerTask('default', [
        'concat',
        'uglify',
        'compass',
        'imagemin'
    ]);

    grunt.registerTask('dev', [
        'watch'
    ]);
};
