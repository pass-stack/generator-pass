'use strict';
var _ = require('lodash');

module.exports = function(){
  var dbChoices = ['Mysql', 'PostgresSQL', 'Derby', 'H2', 'SQLite', 'HyperSQL'];
  var getSBTDBDriverDependency = function(db){
    var dependencies = [
      { groupId: 'mysql', artifactId: 'mysql-connector-java',version: '5.1.34' },
      { groupId: 'postgresql', artifactId: 'postgresql',version: '9.1-901-1.jdbc4' },
      { groupId: 'org.apache.derby', artifactId: 'derby',version: '10.11.1.1' },
      { groupId: 'com.h2database', artifactId: 'h2',version: '1.3.148' },
      { groupId: 'org.xerial', artifactId: 'sqlite-jdbc',version: '3.7.2' },
      { groupId: 'org.hsqldb', artifactId: 'hsqldb',version: '2.3.1' }];
    return dependencies[dbChoices.indexOf(db)];
  };

  var getSlickDBDriver = function(db){
    var slickDbDrivers = [
      "slick.driver.MySQLDriver$",
      "slick.driver.PostgresDriver$",
      "slick.driver.DerbyDriver$",
      "slick.driver.H2Driver$",
      "slick.driver.SQLiteDriver$",
      "slick.driver.HsqldbDriver$"];
    return slickDbDrivers[dbChoices.indexOf(db)];
  };

  var getDBDriver = function(db){
    var dbDrivers = [
      "com.mysql.jdbc.Driver",
      "org.postgresql.Driver",
      "org.apache.derby.jdbc.EmbeddedDriver",
      "org.h2.Driver",
      "org.sqlite.JDBC",
      "org.hsqldb.jdbcDriver"];
    return dbDrivers[dbChoices.indexOf(db)];
  };

  var generateDBConnectionString = function(db, dbName){
    var connectionStrings = [
      "jdbc:mysql://localhost:3306/",
      "jdbc:postgresql://localhost:5432/",
      "jdbc:derby://localhost:1527/",
      "jdbc:h2:mem:",
      "jdbc:sqlite:",
      "dbc:hsqldb:hsql://localhost/"];
    return connectionStrings[dbChoices.indexOf(db)] + dbName;
  };

  var makeSecretKey = function(){
    var length = 64;
    return _.map(new Array(length),function(c){
      return String.fromCharCode(_.random(48, 122));
    }).join('');
  };

  return {
    dbChoices: dbChoices,
    generateDBConnectionString: generateDBConnectionString,
    getSBTDBDriverDependency: getSBTDBDriverDependency,
    getSlickDBDriver: getSlickDBDriver,
    getDBDriver: getDBDriver,
    makeSecretKey: makeSecretKey
  };
}();