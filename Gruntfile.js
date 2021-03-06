'use strict';

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // load npm modules for grunt
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor_webdriver');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var config = {
    // Project settings
    yeoman: {
      setup: 'src/main/build',
      app: 'src/main/webapp',
      test: 'src/test/webapp',
      dist: 'target/webapp',
      unpacked: 'target/a4c-unpacked',
      serveOverride: 'src/test/webapp/serve-override'
    },
  };
  grunt.config.merge(config);

  // Load configuration from multiple files
  require('load-grunt-config')(grunt, {
    configPath: __dirname + '/src/main/build/config',
    init: true,
    config: config
  });

  console.log('Grunt configuration ', grunt.config('clean'));

  // register tasks from definition files.
  grunt.task.loadTasks('src/main/build/tasks');

  // default task
  grunt.registerTask('default', ['newer:jshint', 'test', 'build']);
};
