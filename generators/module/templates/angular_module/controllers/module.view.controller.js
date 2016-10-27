(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>ViewController', <%= moduleNameCap %>ViewController);

  <%= moduleNameCap %>ViewController.$inject = ['$scope'];

  function <%= moduleNameCap %>ViewController($scope){
    var vm = this;

  }
})(angular);