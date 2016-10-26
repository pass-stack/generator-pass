(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>ListController', <%= moduleNameCap %>ListController);

  <%= moduleNameCap %>ListController.$inject = ['$scope','<%= moduleName %>Resolve'];

  function <%= moduleNameCap %>ListController($scope, <%= moduleName %>Resolve){
    var vm = this;

  }
})(angular);