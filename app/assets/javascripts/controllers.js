'use strict';

myApp.controller('CountdownController', 
  ["$scope", "$http", "$location", "$window", "$routeParams", "$document", "$timeout", "startTimer",
  function($scope, $http, $location, $window, $routeParams, $document, $timeout,startTimer){
  $http.get('/games/' + $routeParams.id).then(function(response){
    Hydration.onReady(function(data){
      $scope.time_limit = data.gameMeta.time_limit;
      $scope.start_time = data.gameMeta.start_time;
  })
    $scope.countdown = startTimer.getTimer($scope.time_limit, $scope.start_time);
    
    $scope.onTimeout = function(){
      $scope.countdown = $scope.countdown - 1000;

      if($scope.countdown >= 0){
        startTimer.countdownTimer($scope, $scope.countdown);
        mytimeout = $timeout($scope.onTimeout, 1000);
      }else{
        startTimer.timeUp($window, $routeParams);
      }
    };

      var mytimeout = $timeout($scope.onTimeout,1000);
    })

}]);