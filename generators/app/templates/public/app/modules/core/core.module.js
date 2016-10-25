(function(angular) {
'use strict';

  angular.module('app.core', [])
  .config(function($stateProvider) {
    $stateProvider
    .state({
      name: 'app',
      abstract: true,
      templateUrl: '/app/modules/core/templates/template.html',
      controller: 'TemplateController',
      controllerAs: 'vm'
    });
  });
})(angular);