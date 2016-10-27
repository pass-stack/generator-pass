(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>UpdateController', <%= moduleNameCap %>UpdateController);

  <%= moduleNameCap %>UpdateController.$inject = ['$scope','<%= moduleName %>Resolve', '$mdDialog', '$timeout', '$state'];

  function <%= moduleNameCap %>UpdateController($scope, <%= moduleName %>Resolve, $mdDialog, $timeout, $state){
    var vm = this;
    $scope.<%= moduleName %> = <%= moduleName %>Resolve;
    vm.action = ($scope.<%= moduleName %>.id)? 'Update' : 'Create';

    vm.update = function(event, <%= moduleName %>){
      if(vm.action == 'Create'){
        <%= moduleName %>.$save();
      }else{
        <%= moduleName %>.$update();
      }
    };

    vm.delete = function(event, <%= moduleName %>){
      var confirmDialog = $mdDialog.confirm()
      .title('Delete <%= moduleName %>')
      .textContent('this <%= moduleName %> will be deleted and you no longer can find it')
      .ok('Delete')
      .cancel('Cancel')
      .targetEvent(event);
      $mdDialog.show(confirmDialog).then(function(doDelete){
        if(doDelete){
          $scope.<%= moduleName %>.$delete();
          $timeout(function(){
            $state.go('app.<%= moduleName %>.list');
          }, 500);
        }
      });
    };
  }
})(angular);