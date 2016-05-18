'use strict';

var myApp = angular.module("summoners-universe", ['ngRoute'])
  
myApp.config(['$routeProvider', "$locationProvider", function($routeProvider, $locationProvider){
  $routeProvider.when("/games/:gameId", {
    controller: 'CountdownController',
    templateUrl: "/timer.html"
  }).otherwise({
    redirectTo: "/"
  })
  $locationProvider.html5Mode({ enabled: true, requireBase: false }); 
}])