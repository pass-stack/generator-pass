(function(angular) {
'use strict';

  angular.module('app',
    [ 'ui.router'
    , 'ngAnimate'
    , 'ngMaterial'
    , 'ngResource'
    , 'md.data.table'
    //PASS#Modules#Start
    //PASS#Modules#End
    ])
  .config(function($locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  });
})(angular);