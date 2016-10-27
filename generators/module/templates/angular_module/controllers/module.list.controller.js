(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>ListController', <%= moduleNameCap %>ListController);

  <%= moduleNameCap %>ListController.$inject = ['$scope', '<%= moduleNameCap %>Service'];

  function <%= moduleNameCap %>ListController($scope, <%= moduleNameCap %>Service){
    var vm = this;
    $scope.selected = [];

    $scope.query = {
      limit: 5,
      page: 1
    };

    $scope.get<%= moduleNameCap %>s = function () {
      $scope.promise = <%= moduleNameCap %>Service.query().$promise;
      $scope.promise.then(function(<%= moduleName %>s){
        $scope.<%= moduleName %>s = <%= moduleName %>s;
      });
    };
    $scope.get<%= moduleNameCap %>s();
  }
})(angular);