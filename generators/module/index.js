'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var Table = require('easy-table');
var questionsCollection = require('./questions');
var util = require('./util');

module.exports = yeoman.Base.extend({
  constructor: function(){
    yeoman.Base.apply(this, arguments);
    this.props = {
      fields: [{ name:'id', type:'Long' }]
    };
    this.argument('moduleName', { type: String, required: false, desc: 'Module Name', defaults: null});
    this.props.moduleName = this.moduleName;
  },
  prompting: function () {
    var done = this.async();
    var that = this;
    //shows module fields
    function listFields(){
      that.log("\n" + chalk.blue("Module " + chalk.bold(that.props.moduleName)));
      var table = new Table();
      _.forEach(that.props.fields, function(field){
        table.cell('Field name', field.name);
        table.cell('Field type', field.type);
        table.newRow();
      });
      that.log(chalk.yellow(table.toString()));
      addField();
    }
    //adds new field
    function addField(){
      that.prompt(questionsCollection.confirmAddField).then(function(answers){
        if(answers.addField){//add new field
          that.prompt(questionsCollection.getField).then(function(answers){
            if(!_.some(that.props.fields, { name: answers.name })){
              that.props.fields.push(answers);
            }
            listFields();
          });
        }else{//don't add field go to next phase
          done();
        }
      });
    }
    if(this.props.moduleName){
      listFields();
    }else{
      this.prompt(questionsCollection.moduleNameQuestion).then(function(answers){
        that.props.moduleName = answers.moduleName;
        listFields();
      });
    }
  },

  writing: function () {
    var that = this;
    var moduleName = _.toLower(this.props.moduleName);
    var moduleNameCap = _.capitalize(moduleName);
    var databaseType = this.config.get("databaseType");
    var slickDBDriver = util.getSlickDBDriver(databaseType);
    var fields = _.map(this.props.fields, function(field){
      field.scalaType = util.getScalaType(field);
      field.scalaFormType = util.getScalaFormType(field);
      return field;
    });
    var templates_ng = [
      'module.module.js',
      'services/module.service.js',
      'controllers/module.list.controller.js',
      'controllers/module.update.controller.js',
      'controllers/module.view.controller.js',
      'templates/module.list.html',
      'templates/module.update.html',
      'templates/module.view.html',
    ];
    var templates_play = [
      'build.sbt',
      'conf/module.routes',
      'app/controllers/ModuleController.scala',
      'app/models/Module.scala',
      'app/services/ModuleService.scala'
    ];

    //copying templated angular files
    _.forEach(templates_ng, function(template){
      that.fs.copyTpl(
        that.templatePath('angular_module/' + template),
        that.destinationPath('public/app/modules/' + moduleName + '/' + template.replace('module', moduleName)),
        { moduleName: moduleName, moduleNameCap: moduleNameCap }
      );
    });

    //copying templated play files
    _.forEach(templates_play, function(template){
      that.fs.copyTpl(
        that.templatePath('play_module/' + template),
        that.destinationPath('modules/' + moduleName + '/' + template.replace('module', moduleName).replace('Module', moduleNameCap)),
        { moduleName: moduleName, moduleNameCap: moduleNameCap, fields: fields, slickDBDriver: slickDBDriver }
      );
    });

  },

  install: function () {
  },

  end: function(){
  }
});