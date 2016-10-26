(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleName | capitalize %>ViewController', <%= moduleName | capitalize %>ViewController);

  <%= moduleName | capitalize %>ViewController.$inject = ['$scope','<%= moduleName %>Resolve'];

  function <%= moduleName | capitalize %>ViewController($scope, <%= moduleName %>Resolve){
    var vm = this;

  }
})(angular);