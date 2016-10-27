'use strict';
var _ = require('lodash');

module.exports = function(){

  function getScalaType(field){
    var fieldType = field.type;
    if(fieldType == 'Integer'){
      fieldType = 'Int';
    }
    return fieldType;
  }

  function getScalaFormType(field){
    var fieldType = field.type;
    if(fieldType == 'Integer'){
      fieldType = 'number';
    }else if(fieldType == 'Double'){
      fieldType = 'bigDecimal';
    }else if(fieldType == 'Boolean'){
      fieldType = 'boolean';
    }else if(fieldType == 'String'){
      fieldType = 'text';
    }
    return fieldType;
  }

  return {
    getScalaType: getScalaType,
    getScalaFormType: getScalaFormType
  };
}();