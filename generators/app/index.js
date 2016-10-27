'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var questionsCollection = require('./questions');
var util = require('./util');
var _ = require('lodash');
var asciiArt = fs.readFileSync(path.join(__dirname, 'passLogo.txt'),'utf8');

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
      var questions = _.map(questionsCollection.initQuestions, function(question){
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
      this.prompt(questionsCollection.appNameQuestion).then(function(answers){
        that.props.appName = answers.appName;
        askInitQuestions();
      });
    }
  },

  writing: function () {
    var db = this.props.DatabaseType;
    var dbName = this.props.DatabaseName;
    //save configuration
    this.config.set("databaseType", db);
    //copy non-template files
    this.fs.copy(this.sourceRoot(), this.destinationRoot());
    this.fs.copy(this.templatePath('.*'), this.destinationRoot());
    //copy build.sbt
    var appName = this.props.appName;
    this.fs.copyTpl(this.templatePath('build.sbt'), this.destinationPath('build.sbt'), { appName: appName });
    //copy package.json and bower.json
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), { appName: appName });
    this.fs.copyTpl(this.templatePath('bower.json'), this.destinationPath('bower.json'), { appName: appName });
    //copy public/app/modules/core/templates/template.html
    this.fs.copyTpl(this.templatePath('public/app/modules/core/templates/template.html'), this.destinationPath('public/app/modules/core/templates/template.html'), { appName: appName });
    //copy index.html
    this.fs.copyTpl(this.templatePath('app/views/index.scala.html'), this.destinationPath('app/views/index.scala.html'), { appName: appName });
    //copy Config.scala
    var organization = this.props.OrganizationName;
    var SBTDBDriverDependency = util.getSBTDBDriverDependency(db);
    this.fs.copyTpl(this.templatePath('project/Config.scala'), this.destinationPath('project/Config.scala'), { organization: organization, SBTDBDriverDependency: SBTDBDriverDependency });
    //copy app.conf
    var slickDBDriver = util.getSlickDBDriver(db);
    var DBDriver = util.getDBDriver(db);
    var DBConnectionUrl = util.generateDBConnectionString(db, dbName);
    this.fs.copyTpl(this.templatePath('conf/application.conf'), this.destinationPath('conf/application.conf'), { slickDBDriver: slickDBDriver, DBDriver: DBDriver, DBConnectionUrl: DBConnectionUrl });
  },

  install: function () {
    this.installDependencies();
  },

  end: function(){
    this.log(chalk.yellow("it was good seeing you, have a nice day!"));
  }
});
