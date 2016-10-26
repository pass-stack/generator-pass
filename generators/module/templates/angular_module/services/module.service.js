(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>')
  .factory('<%= moduleName | capitalize %>sService', <%= moduleName | capitalize %>sService);

  <%= moduleName | capitalize %>sService.$inject = ['$resource'];

  function <%= moduleName | capitalize %>sService($resource){
    var <%= moduleName %> = $resource('/api/<%= moduleName %>s/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    angular.extend(<%= moduleName %>.prototype, {
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

    return <%= moduleName %>;
  }
})(angular);