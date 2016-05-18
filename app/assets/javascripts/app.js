//= depend_on_asset "timer.html"

'use strict';

var myApp = angular.module('summoners-universe', ['ngRoute', 'templates'])
  
myApp.config(['$routeProvider', "$locationProvider", function($routeProvider, $locationProvider){
  $routeProvider.when("/games/:id", {
    controller: 'CountdownController',
    templateUrl: "timer.html"
  }).otherwise({
    redirectTo: "/"
  })
  $locationProvider.html5Mode({ enabled: true, requireBase: false }); 
}])