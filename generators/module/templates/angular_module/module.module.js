(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>', [])
  .config(function($stateProvider) {
    $stateProvider
    .state({
      name: 'app.<%= moduleName %>',
      url: '/<%= moduleName %>',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.list.html',
      controller: '<%= moduleNameCap %>ListController',
      controllerAs: 'vm'
    })
    .state({
      name: 'app.<%= moduleName %>.view',
      url: '/view/{id}',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.view.html',
      controller: '<%= moduleNameCap %>ViewController',
      controllerAs: 'vm'
    })
    .state({
      name: 'app.<%= moduleName %>.create',
      url: '/create',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.update.html',
      controller: '<%= moduleNameCap %>UpdateController',
      resolve: {
        <%= moduleName %>Resolve: new<%= moduleName %>
      },
      controllerAs: 'vm'
    })
    .state({
      name: 'app.<%= moduleName %>.update',
      url: '/update/{id}',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.update.html',
      controller: '<%= moduleNameCap %>UpdateController',
      resolve: {
        <%= moduleName %>Resolve: get<%= moduleName %>
      },
      controllerAs: 'vm'
    });
  });

  new<%= moduleNameCap %>.$inject = ['<%= moduleNameCap %>sService'];

  function new<%= moduleNameCap %>(<%= moduleNameCap %>sService) {
    return new <%= moduleNameCap %>sService();
  }

  get<%= moduleNameCap %>.$inject = ['$stateParams', '<%= moduleNameCap %>sService'];

  function get<%= moduleNameCap %>($stateParams, <%= moduleNameCap %>sService) {
    return <%= moduleNameCap %>sService.get({
      id: $stateParams.id
    }).$promise;
  }
})(angular);