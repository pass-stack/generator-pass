(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>UpdateController', <%= moduleNameCap %>UpdateController);

  <%= moduleNameCap %>UpdateController.$inject = ['$scope','<%= moduleName %>Resolve', '$mdDialog', '$timout', '$state'];

  function <%= moduleNameCap %>UpdateController($scope, <%= moduleName %>Resolve, $mdDialog, $timout, $state){
    var vm = this;
    $scope.<%= moduleName %> = <%= moduleName %>Resolve;
    vm.action = ($scope.<%= moduleName %>.id)? 'Create' : 'Update';

    vm.update = function(event, <%= moduleName %>){
      <%= moduleName %>.$save();
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
          $timout(function(){
            $state.go('app.<%= moduleName %>.list');
          }, 500);
        }
      });
    };
  }
})(angular);