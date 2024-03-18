const sass = require('node-sass')

module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
              options: {
                port: 8000,
                open: true,
                keepalive: true,
                base: 'dist'
              }
            }
          },
        concat: {
            js: {
                src: ['src/js/script.js'],
                dest: 'dist/js/script.js'
            },
            html: {
                src: ['src/index.html'],
                dest: 'dist/index.html'
            }
        },
        sass: {
            options: {
                implementation: sass,
                SourceMap: true
            },
            build: {
                files: [{
                    src: 'src/scss/styles.scss',
                    dest: 'dist/css/styles.css'
                }]
            }
         }
    })
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
};

