(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>ListController', <%= moduleNameCap %>ListController);

  <%= moduleNameCap %>ListController.$inject = ['$scope'];

  function <%= moduleNameCap %>ListController($scope){
    var vm = this;

  }
})(angular);