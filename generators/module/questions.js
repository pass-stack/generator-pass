'use strict';

module.exports = {
  moduleNameQuestion: {
    name: 'moduleName',
    type: 'input',
    message: 'Module name',
    default: 'module'
  },
  confirmAddField: {
    name: 'addField',
    type: 'confirm',
    message: 'add new Field',
    default: true
  },
  getField: [
    {
      name: 'name',
      type: 'input',
      message: 'Field name'
    },
    {
      name: 'type',
      type: 'list',
      message: 'Field type',
      choices: ['Integer', 'Double', 'Boolean', 'String']
    }
  ]
};