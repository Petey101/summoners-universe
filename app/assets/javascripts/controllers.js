'use strict';
var myApp = angular.module("summoners-universe")

myApp.controller('CountdownController', ["$scope", "$http", "$routeParams", "$timeout", function($scope, $http, $routeParams, $timeout){
    $scope.$on("$routeChangeSuccess", function(){
      $scope.endTime = $http.get("/games" + $routeParams.id).success(function(data){
          console.log(data)
          $scope.data = data;
    })
    })
  }])