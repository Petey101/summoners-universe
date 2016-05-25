'use strict';

myApp.controller('CountdownController', 
  ["$scope", "$http", "$routeParams", "$document", "$timeout", "startTimer",
  function($scope, $http, $routeParams, $document, $timeout,startTimer){
  $http.get('/games/' + $routeParams.id).then(function(response){
    Hydration.onReady(function(data){
      $scope.time_limit = data.gameMeta.time_limit
      $scope.start_time = data.gameMeta.start_time
      $scope.countdown = startTimer.countdownTimer($scope.time_limit, $scope.start_time);
      $scope.onTimeout = function(){
        $scope.countdown = $scope.countdown - 1000
        if($scope.countdown >= 0){
          var seconds = Math.floor(($scope.countdown % 60000)/1000).toString()
          $scope.timer = (Math.floor($scope.countdown/60000) + ":" + (seconds.length < 2 ? '0' + seconds : seconds))
          mytimeout = $timeout($scope.onTimeout, 1000);
        }else{
          return "Time's Up!";
        }
      }
        var mytimeout = $timeout($scope.onTimeout,1000);
      })
  })
}]);