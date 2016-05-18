'use strict';

myApp.controller('CountdownController', 
  ["$scope", "$http", "$routeParams", "$document", 
  function($scope, $http, $routeParams, $document){
  $http.get('/games/' + $routeParams.id).then(function(response){
    Hydration.onReady(function(data){
      console.log(data.gameMeta.time_limit)
    })
  })
}]);