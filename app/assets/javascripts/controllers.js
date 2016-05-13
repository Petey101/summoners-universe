'use strict';
var myApp = angular.module("summoners-universe")

myApp.controller('CountdownController', ["$scope", "$http", "$routeParams", "$timeout", function($scope, $http, $routeParams, $timeout){
    console.log($routeParams)
    $scope.endTime = $http.get("/games/" + $routeParams.id).success(function(data){
        $scope.data = data;
    })
  }])