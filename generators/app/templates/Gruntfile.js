module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      task: {
        src: [
          'app/views/index.scala.html'
        ],
        options: {
          ignorePath: '../../public',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['wiredep']);
};