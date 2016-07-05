'use strict';

myApp.controller('CountdownController', 
  ["$scope", "$http", "$location", "$window", "$routeParams", "$document", "$timeout", "gameTimer", "$interval",
  function($scope, $http, $location, $window, $routeParams, $document, $timeout,gameTimer, $interval){
  $http.get('/games/' + $routeParams.id).then(function(response){
    Hydration.onReady(function(data){
      $scope.time_limit = data.gameMeta.time_limit;
      $scope.start_time = data.gameMeta.start_time;
      $scope.remaining_questions = data.gameMeta.remaining_questions;
      $scope.total_questions = data.gameMeta.total_questions;
  })

    $scope.countdown = gameTimer.getTimer($scope.time_limit, $scope.start_time);
    
    $scope.timeRemaining = function(){
      $scope.countdown = $scope.countdown - 1000;

      if($scope.countdown >= 0){
        gameTimer.countdownTimer($scope, $scope.countdown);
        mytimeout = $timeout($scope.timeRemaining, 1000);
      }else{
        gameTimer.timeUp($window, $routeParams);
      }
    };
    var mytimeout = $timeout($scope.timeRemaining,1000);

    $interval(function(){
    $scope.health = gameTimer.calculateHealthBar($scope.countdown);
    }, 1000);

    $scope.enemyHealth = gameTimer.calculateEnemyHealth($scope.total_questions, $scope.remaining_questions);

    });


}]);