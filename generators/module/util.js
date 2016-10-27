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
    }else if(fieldType == 'Long'){
      fieldType = 'longNumber';
    }else if(fieldType == 'Double'){
      fieldType = 'bigDecimal';
    }else if(fieldType == 'Boolean'){
      fieldType = 'boolean';
    }else if(fieldType == 'String'){
      fieldType = 'text';
    }
    return fieldType;
  }

  function getSlickDBDriver(databaseType){
    switch(databaseType){
      case 'Mysql': return 'MySQLDriver'; break;
      case 'PostgresSQL': return 'PostgresDriver'; break;
      case 'Derby': return 'DerbyDriver'; break;
      case 'H2': return 'H2Driver'; break;
      case 'SQLite': return 'SQLiteDriver'; break;
      case 'HyperSQL': return 'HsqldbDriver'; break;
      default: return '';
    }
  }

  return {
    getSlickDBDriver:getSlickDBDriver,
    getScalaType: getScalaType,
    getScalaFormType: getScalaFormType
  };
}();