(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>UpdateController', <%= moduleNameCap %>UpdateController);

  <%= moduleNameCap %>UpdateController.$inject = ['$scope','<%= moduleName %>Resolve'];

  function <%= moduleNameCap %>UpdateController($scope, <%= moduleName %>Resolve){
    var vm = this;
    $scope.<%= moduleName %> = <%= moduleName %>Resolve;
  }
})(angular);