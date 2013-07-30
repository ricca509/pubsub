module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', '*.js', 'tests/*.js']
        },
        qunit: {
            all: ['tests/tests.html']
        },
        jasmine: {
            pivotal: {
                src: 'pubsub.js',
                options: {
                    specs: 'tests/jasmine/spec/*Spec.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jshint']);

};