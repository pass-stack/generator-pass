'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var Table = require('easy-table');
var questionsCollection = require('./questions');

module.exports = yeoman.Base.extend({
  constructor: function(){
    yeoman.Base.apply(this, arguments);
    this.props = {
      fields: []
    };
    this.argument('moduleName', { type: String, required: false, desc: 'Module Name', defaults: null});
    this.props.moduleName = this.moduleName;
  },
  prompting: function () {
    var done = this.async();
    var that = this;
    //shows module fields
    function listFields(){
      that.log(chalk.blue("Module " + chalk.bold(that.props.moduleName)));
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
            that.props.fields.push(answers);
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
  },

  install: function () {
  },

  end: function(){
  }
});