(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>ViewController', <%= moduleNameCap %>ViewController);

  <%= moduleNameCap %>ViewController.$inject = ['$scope', '<%= moduleName %>Resolve', '$mdDialog', '$timeout', '$state'];

  function <%= moduleNameCap %>ViewController($scope, <%= moduleName %>Resolve, $mdDialog, $timeout, $state){
    var vm = this;
    $scope.<%= moduleName %> = <%= moduleName %>Resolve;

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