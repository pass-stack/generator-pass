(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .controller('<%= moduleNameCap %>UpdateController', <%= moduleNameCap %>UpdateController);

  <%= moduleNameCap %>UpdateController.$inject = ['$scope','<%= moduleName %>Resolve', '$mdDialog', '$timeout', '$state', '$mdToast'];

  function <%= moduleNameCap %>UpdateController($scope, <%= moduleName %>Resolve, $mdDialog, $timeout, $state, $mdToast){
    var vm = this;
    $scope.<%= moduleName %> = <%= moduleName %>Resolve;
    vm.action = ($scope.<%= moduleName %>.id)? 'Update' : 'Create';

    function makeToast(content, mdClass, action){
      if(!action){
        action = 'Close';
      }
      return $mdToast.simple()
      .textContent(content)
      .toastClass(mdClass)
      .position('bottom right')
      .hideDelay(3000)
      .action(action);
    }

    vm.update = function(event, <%= moduleName %>){
      if(vm.action == 'Create'){
        delete <%= moduleName %>.id;
        <%= moduleName %>.$save(function(){
          $mdToast.show(makeToast('<%= moduleName %> was created', 'md-toast-blue', 'See'))
          .then(function(answer){
            if(answer == 'ok'){
              $state.go('^.list');
            }
          });
        },function(){
          $mdToast.show(makeToast('<%= moduleName %> was not created', 'md-toast-red'));
        });
      }else{
        <%= moduleName %>.$update(function(){
          $mdToast.show(makeToast('<%= moduleName %> was updated', 'md-toast-blue', 'See'))
          .then(function(answer){
            if(answer == 'ok'){
              $state.go('^.view', { id: <%= moduleName %>.id });
            }
          });
        },function(){
          $mdToast.show(makeToast('<%= moduleName %> was not updated', 'md-toast-red'));
        });
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
          $scope.<%= moduleName %>.$delete(function(){
            $mdToast.show(makeToast('<%= moduleName %> deleted', 'md-toast-blue'));
            $state.go('app.<%= moduleName %>.list');
          },function(){
            $mdToast.show(makeToast('<%= moduleName %> was not deleted', 'md-toast-red'));
          });
        }
      });
    };
  }
})(angular);