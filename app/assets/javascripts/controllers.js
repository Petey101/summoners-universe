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
          // $scope.countdown = $scope.countdown / 60
          console.log(Math.floor($scope.countdown/60000) + ":" + Math.floor($scope.countdown % 60000))

          mytimeout = $timeout($scope.onTimeout, 1000);
        }else{
          return;
        }
      }
        var mytimeout = $timeout($scope.onTimeout,1000);  
      })
  })
}]);