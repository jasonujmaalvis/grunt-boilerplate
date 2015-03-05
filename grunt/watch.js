module.exports = {
    grunt: {
        files: ['Gruntfile.js'],
        options: {
            reload: true
        }
    },
    scripts: {
        files: ['js/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
            spawn: false,
            livereload: true
        }
    },
    css: {
        files: ['scss/**/*.scss'],
        tasks: ['compass'],
        options: {
            spawn: false,
        }
    },
    images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
            spawn: false,
        }
    }
};