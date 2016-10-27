var fs = require('fs')
  , path = require('path')
  , _ = require('lodash');

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
    },
    includeSource: {
      options: {
        basePath: 'public/app',
        baseUrl: '/app/'
      },
      myTarget: {
        files: {
          'app/views/index.scala.html': 'app/views/index.scala.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-include-source');

  grunt.registerTask('wire-play-modules', function(){
    grunt.log.writeln('Wiring play subProjects');
    try{
      var modules = getDirectories(__dirname + '/modules');
      var playModules = _.map(modules, function(module){
        return 'lazy val ' + module + ' = (project in file("modules/' + module + '")).enablePlugins(PlayScala)';
      }).join('\n');
      var projectDependencies = _.map(modules, function(module){
        return '.enablePlugins(PlayScala).dependsOn(' + module + ').aggregate(' + module + ')';
      }).join('\n');
      var data = fs.readFileSync(path.join(__dirname, 'build.sbt'), 'utf-8')
        .replace(/\/\/PASS#Modules#Start[\s\S]*\/\/PASS#Modules#End/, '//PASS#Modules#Start\n' + playModules + '\n//PASS#Modules#End\n')
        .replace(/\/\/PASS#ModuleDependecies#Start[\s\S]*\/\/PASS#ModuleDependecies#End/, '//PASS#ModuleDependecies#Start\n' + projectDependencies + '\n//PASS#ModuleDependecies#End\n');
      fs.writeFileSync(path.join(__dirname, 'build.sbt'), data, 'utf-8');
    }catch(e){
      grunt.log.writeln(e);
    }
  });

  grunt.registerTask('wire-ng-modules', function(){
    grunt.log.writeln('Wiring Angular subModules');
    try{
      var modules = getDirectories(__dirname + '/public/app/modules');
      var ngModules = _.map(modules, function(module){
        return "    , 'app." + module + "'";
      }).join('\n');
      var data = fs.readFileSync(path.join(__dirname, 'public/app/app.js'), 'utf-8')
        .replace(/\/\/PASS#Modules#Start[\s\S]*\/\/PASS#Modules#End/, '//PASS#Modules#Start\n' + ngModules + '\n    //PASS#Modules#End');
      fs.writeFileSync(path.join(__dirname, 'public/app/app.js'), data, 'utf-8');
    }catch(e){
      grunt.log.writeln(e);
    }
  });

  grunt.registerTask('default', ['wire-play-modules', 'wire-ng-modules', 'wiredep', 'includeSource']);

  function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  }
};