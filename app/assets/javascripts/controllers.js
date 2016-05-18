'use strict';

myApp.controller('CountdownController', 
  ["$scope", "$http", "$routeParams", "$document", 
  function($scope, $http, $routeParams, $document){
  $http.get('/games/' + $routeParams.id).then(function(response){
    Hydration.onReady(function(data){
      $scope.time_limit = data.gameMeta.time_limit
    })
  })
}]);