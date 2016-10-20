'use strict';

var util = require('./util');

module.exports = {
  appNameQuestion: {
    name: 'appName',
    type: 'input',
    message: 'Project name',
    default: 'pass',
    store: true
  },
  initQuestions : [{
    name: 'OrganizationName',
    type: 'input',
    message: 'Organization name',
    default: 'com.appName',
    store: true
  },{
    name: 'DatabaseName',
    type: 'input',
    message: 'Database Name',
    default: 'appNameDB',
    store: true
  },{
    name: 'DatabaseType',
    type: 'list',
    message: 'Choose a Database type',
    choices: util.dbChoices,
    default: 1,
    store: true
  }]
};