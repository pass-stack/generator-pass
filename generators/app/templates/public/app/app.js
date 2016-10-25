(function(angular) {
'use strict';

  angular.module('app', [
    'ui.router',
    'ngAnimate',
    'ngMaterial',
    'app.core',
    'app.home'])
  .config(function($locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  });
})(angular);