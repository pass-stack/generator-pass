(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleName | capitalize %>UpdateController', <%= moduleName | capitalize %>UpdateController);

  <%= moduleName | capitalize %>UpdateController.$inject = ['$scope','<%= moduleName %>Resolve'];

  function <%= moduleName | capitalize %>UpdateController($scope, <%= moduleName %>Resolve){
    var vm = this;

  }
})(angular);