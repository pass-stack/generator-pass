(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>s')
  .controller('<%= moduleNameCap %>UpdateController', <%= moduleNameCap %>UpdateController);

  <%= moduleNameCap %>UpdateController.$inject = ['$scope','<%= moduleName %>Resolve'];

  function <%= moduleNameCap %>UpdateController($scope, <%= moduleName %>Resolve){
    var vm = this;

  }
})(angular);