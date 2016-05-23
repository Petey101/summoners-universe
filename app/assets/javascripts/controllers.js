'use strict';

myApp.controller('CountdownController', 
  ["$scope", "$http", "$routeParams", "$document", 
  function($scope, $http, $routeParams, $document){
  $http.get('/games/' + $routeParams.id).then(function(response){
    Hydration.onReady(function(data){
      $scope.time_limit = data.gameMeta.time_limit
      $scope.start_time = data.gameMeta.start_time
      var end = moment.duration($scope.time_limit, "m")._milliseconds
      var start = moment.duration($scope.start_time, "m")._milliseconds
      var remainingTime = moment.duration(end - start)
      var countdown = remainingTime.minutes() + " minutes " + "and " + remainingTime.seconds() + " seconds";
      $scope.countdown = countdown
    })
  })
}]);