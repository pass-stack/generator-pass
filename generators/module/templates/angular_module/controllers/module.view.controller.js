(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>ViewController', <%= moduleNameCap %>ViewController);

  <%= moduleNameCap %>ViewController.$inject = ['$scope', '<%= moduleName %>Resolve', '$mdDialog', '$timeout', '$state', '$mdToast'];

  function <%= moduleNameCap %>ViewController($scope, <%= moduleName %>Resolve, $mdDialog, $timeout, $state, $mdToast){
    var vm = this;
    $scope.<%= moduleName %> = <%= moduleName %>Resolve;

    vm.toast = $mdToast.simple()
    .position({ top: true, bottom: false, right: true, left: true })
    .hideDelay(3000)
    .action('Close');

    vm.delete = function(event, <%= moduleName %>){
      var confirmDialog = $mdDialog.confirm()
      .title('Delete <%= moduleName %>')
      .textContent('this <%= moduleName %> will be deleted and you no longer can find it')
      .ok('Delete')
      .cancel('Cancel')
      .targetEvent(event);
      $mdDialog.show(confirmDialog).then(function(doDelete){
        if(doDelete){
          $scope.<%= moduleName %>.$delete().then(function(){
            $mdToast.show(vm.toast.textContent('<%= moduleName %> deleted'));
            $state.go('app.<%= moduleName %>.list');
          },function(){
            $mdToast.show(vm.toast.textContent('<%= moduleName %> was not deleted').highlightClass('md-warn'));
            $state.go('app.<%= moduleName %>.list');
          });
        }
      });
    };
  }
})(angular);