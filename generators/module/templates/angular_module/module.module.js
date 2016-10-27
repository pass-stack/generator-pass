(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>', [])
  .config(function($stateProvider) {
    $stateProvider
    .state({
      name: 'app.<%= moduleName %>',
      url: '/<%= moduleName %>',
      template: '<ui-view/>',
      abstract: true
    })
    .state({
      name: 'app.<%= moduleName %>.list',
      url: '',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.list.html',
      controller: '<%= moduleNameCap %>ListController',
      controllerAs: 'vm'
    })
    .state({
      name: 'app.<%= moduleName %>.create',
      url: '/create',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.update.html',
      controller: '<%= moduleNameCap %>UpdateController',
      resolve: {
        <%= moduleName %>Resolve: new<%= moduleNameCap %>
      },
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
      name: 'app.<%= moduleName %>.update',
      url: '/update/{id}',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.update.html',
      controller: '<%= moduleNameCap %>UpdateController',
      resolve: {
        <%= moduleName %>Resolve: get<%= moduleNameCap %>
      },
      controllerAs: 'vm'
    });
  })
  .run(function(Sidenav){
    Sidenav.addItem({
      name:'<%= moduleNameCap %>',
      state:'app.<%= moduleName %>.list'
    });
  });

  new<%= moduleNameCap %>.$inject = ['<%= moduleNameCap %>Service'];

  function new<%= moduleNameCap %>(<%= moduleNameCap %>Service) {
    return new <%= moduleNameCap %>Service();
  }

  get<%= moduleNameCap %>.$inject = ['$stateParams', '<%= moduleNameCap %>Service'];

  function get<%= moduleNameCap %>($stateParams, <%= moduleNameCap %>Service) {
    return <%= moduleNameCap %>Service.get({
      id: $stateParams.id
    }).$promise;
  }
})(angular);