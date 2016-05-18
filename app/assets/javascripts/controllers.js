'use strict';

myApp.controller('CountdownController', 
  ["$scope", "$http", "$routeParams", 
  function($scope, $http, $routeParams){
  console.log($routeParams);
}]);