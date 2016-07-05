'use strict';

myApp.controller('CountdownController', 
  ["$scope", "$http", "$location", "$window", "$routeParams", "$document", "$timeout", "startTimer", "$interval",
  function($scope, $http, $location, $window, $routeParams, $document, $timeout,startTimer, $interval){
  $http.get('/games/' + $routeParams.id).then(function(response){
    Hydration.onReady(function(data){
      $scope.time_limit = data.gameMeta.time_limit;
      $scope.start_time = data.gameMeta.start_time;
  })
    $scope.countdown = startTimer.getTimer($scope.time_limit, $scope.start_time);
    
    $scope.timeRemaining = function(){
      $scope.countdown = $scope.countdown - 1000;

      if($scope.countdown >= 0){
        startTimer.countdownTimer($scope, $scope.countdown);
        mytimeout = $timeout($scope.timeRemaining, 1000);
      }else{
        startTimer.timeUp($window, $routeParams);
      }
    };
    var mytimeout = $timeout($scope.timeRemaining,1000);
    $interval(function(){
    $scope.health = startTimer.calculateHealthBar($scope.countdown);
    }, 1000);
    });

}]);