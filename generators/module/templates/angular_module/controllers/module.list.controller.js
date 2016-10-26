(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleName | capitalize %>ListController', <%= moduleName | capitalize %>ListController);

  <%= moduleName | capitalize %>ListController.$inject = ['$scope','<%= moduleName %>Resolve'];

  function <%= moduleName | capitalize %>ListController($scope, <%= moduleName %>Resolve){
    var vm = this;

  }
})(angular);