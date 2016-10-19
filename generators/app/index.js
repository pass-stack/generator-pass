'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var util = require('./util');
var _ = require('lodash');
var asciiArt = fs.readFileSync(path.join(__dirname, 'asciiArt.txt'),'utf8');

module.exports = yeoman.Base.extend({
	constructor: function(){
    yeoman.Base.apply(this, arguments);
    this.props = {};
    this.argument('appName', { type: String, required: false, desc: 'Project Name', defaults: null});
    this.props.appName = this.appName;
    this.log(chalk.blue(asciiArt));
  },
  prompting: function () {
    var done = this.async();
    var that = this;
    function askInitQuestions(){
      var questions = _.map(util.initQuestions, function(question){
        var defaultValue = question.default;
        if(_.isString(defaultValue) && defaultValue.indexOf('appName') != -1){
          defaultValue = question.default.replace('appName', that.props.appName);
        }
        return _.extend(question, { default:defaultValue });
      });
      that.prompt(questions).then(function(answers){
        that.props = _.extend(that.props, answers);
        done();
      });
    }
    if(this.props.appName){
      askInitQuestions();
    }else{
      this.prompt(util.appNameQuestion).then(function(answers){
        that.props.appName = answers.appName;
        askInitQuestions();
      });
    }
  },

  writing: function () {
  },

  install: function () {
  },

  end: function(){
  	this.log("it was good seeing you, have a nice day!");
  }
});
