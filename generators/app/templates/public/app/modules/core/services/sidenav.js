(function(angular) {
'use strict';

  angular.module('app.core')
  .factory('Sidenav', Sidenav);

  function Sidenav($rootScope){
    var items = [];
    this.items = items;
    return {
      addItem: function(item){
        items.add(item);
        $rootScope.$broadcast('Sidenav:addItem', items);
      },
      getItems: function(){
        return items;
      }
    };
  }
})(angular);