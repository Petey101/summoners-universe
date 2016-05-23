'use strict';

myApp.controller('CountdownController', 
  ["$scope", "$http", "$routeParams", "$document", "startTimer",
  function($scope, $http, $routeParams, $document, startTimer){
  $http.get('/games/' + $routeParams.id).then(function(response){
    Hydration.onReady(function(data){
      $scope.time_limit = data.gameMeta.time_limit
      $scope.start_time = data.gameMeta.start_time
      $scope.countdown = startTimer.countdownTimer($scope.time_limit, $scope.start_time);
    })
  })
}]);