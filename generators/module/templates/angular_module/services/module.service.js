(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .factory('<%= moduleNameCap %>Service', <%= moduleNameCap %>Service);

  <%= moduleNameCap %>Service.$inject = ['$resource'];

  function <%= moduleNameCap %>Service($resource){
    var <%= moduleNameCap %> = $resource('/api/<%= moduleName %>/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    angular.extend(<%= moduleNameCap %>.prototype, {
      createOrUpdate: function () {
        var <%= moduleName %> = this;
        if(<%= moduleName %>.id){
          return <%= moduleName %>.$update(onSuccess, onError);
        }else{
          return <%= moduleName %>.$save(onSuccess, onError);
        }
      }
    });

    function onSuccess(){

    }

    function onError(){

    }

    return <%= moduleNameCap %>;
  }
})(angular);