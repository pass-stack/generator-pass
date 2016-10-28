(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>ListController', <%= moduleNameCap %>ListController);

  <%= moduleNameCap %>ListController.$inject = ['$scope', '<%= moduleNameCap %>Service', '$mdToast'];

  function <%= moduleNameCap %>ListController($scope, <%= moduleNameCap %>Service, $mdToast){
    var vm = this;
    $scope.selected = [];

    function makeToast(content, mdClass){
      return $mdToast.simple()
      .textContent(content)
      .toastClass(mdClass)
      .position('bottom right')
      .hideDelay(3000)
      .action('Close');
    }

    $scope.$watch('selected', function(newVal){
      if(newVal.length > 0){
        $scope.areSelected = true;
      }else{
        $scope.areSelected = false;
      }
    });

    vm.deleteSelected = function(){
      var promises = _.map($scope.<%= moduleName %>s, function(<%= moduleName %>){
        return <%= moduleName %>.$delete.$promise;
      });
      Promise.all(promises).then(function(){
        $mdToast.show(makeToast('<%= moduleName %>s were deleted', 'md-toast-blue'));
      },function(){
        $mdToast.show(makeToast('<%= moduleName %>s were not deleted', 'md-toast-red'));
      });
    };

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