module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    'http-server':
      dev:
        root: '.'
        port: 8080
        runInBackground: true
        autoIndex: true
    coffeeify:
      options:
        debug: true
      build:
        cwd: 'coffee'
        src: 'main.coffee'
        dest: 'js'
    watch:
      files: ['coffee/**/*.coffee', 'node_modules']
      tasks: ['coffeeify']

  grunt.loadNpmTasks('grunt-contrib-coffeeify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default', ['coffeeify','http-server','watch'])
