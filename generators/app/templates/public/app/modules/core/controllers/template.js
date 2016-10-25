(function(angular) {
'use strict';

  angular.module('app.core')
  .controller('TemplateController', TemplateController);

  function TemplateController($mdSidenav, $scope, $state, Sidenav){
    var vm = this;
    $scope.sidenav = {
    	items: Sidenav.getItems(),
      toggle: function(){
        $mdSidenav('sidenav').toggle();
      },
      goTo: function(state){
      	$mdSidenav('sidenav').close();
      	$state.go(state);
      }
    };
    $scope.$on('Sidenav:addItem', function(items){
    	$scope.sidenav.items = items;
    });
  }
})(angular);