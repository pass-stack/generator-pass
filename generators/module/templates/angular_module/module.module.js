(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>', [])
  .config(function($stateProvider) {
    $stateProvider
    .state({
      name: 'app.<%= moduleName %>',
      url: '/<%= moduleName %>',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.list.html',
      controller: '<%= moduleName | capitalize %>ListController',
      controllerAs: 'vm'
    })
    .state({
      name: 'app.<%= moduleName %>.view',
      url: '/view/{id}',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.view.html',
      controller: '<%= moduleName | capitalize %>ViewController',
      controllerAs: 'vm'
    })
    .state({
      name: 'app.<%= moduleName %>.create',
      url: '/create',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.edit.html',
      controller: '<%= moduleName | capitalize %>UpdateController',
      resolve: {
        <%= moduleName %>Resolve: new<%= moduleName %>
      },
      controllerAs: 'vm'
    })
    .state({
      name: 'app.<%= moduleName %>.edit',
      url: '/edit/{id}',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.edit.html',
      controller: '<%= moduleName | capitalize %>UpdateController',
      resolve: {
        <%= moduleName %>Resolve: get<%= moduleName %>
      },
      controllerAs: 'vm'
    });
  });

  new<%= moduleName | capitalize %>.$inject = ['<%= moduleName | capitalize %>sService'];

  function new<%= moduleName | capitalize %>(<%= moduleName | capitalize %>sService) {
    return new <%= moduleName | capitalize %>sService();
  }

  get<%= moduleName | capitalize %>.$inject = ['$stateParams', '<%= moduleName | capitalize %>sService'];

  function get<%= moduleName | capitalize %>($stateParams, <%= moduleName | capitalize %>sService) {
    return <%= moduleName | capitalize %>sService.get({
      id: $stateParams.id
    }).$promise;
  }
})(angular);