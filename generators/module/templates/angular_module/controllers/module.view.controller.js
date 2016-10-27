(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>ViewController', <%= moduleNameCap %>ViewController);

  <%= moduleNameCap %>ViewController.$inject = ['$scope','<%= moduleName %>Resolve'];

  function <%= moduleNameCap %>ViewController($scope, <%= moduleName %>Resolve){
    var vm = this;

  }
})(angular);