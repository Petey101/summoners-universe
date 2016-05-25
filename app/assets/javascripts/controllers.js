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
        $scope.countdown--;
        console.log($scope.countdown)
        if($scope.countdown >= 0){
          mytimeout = $timeout($scope.onTimeout, 1000);
        }else{
          return;
        }
      }
        var mytimeout = $timeout($scope.onTimeout,1000);  
      })
  })
}]);