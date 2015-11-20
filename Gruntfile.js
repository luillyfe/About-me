module.exports = function(grunt) {
	
  grunt.initConfig({
    serve: {
      'path': '/Users/luillyfe/Documents/NanoDegrees/Front-End-Web-Developer/Project-0'
    }
  });


  grunt.loadNpmTasks('grunt-serve');
  grunt.registerTask('default', ['serve']);
};