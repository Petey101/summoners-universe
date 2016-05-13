'use strict';

var myApp = angular.module("summoners-universe", ['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when("games/:id", {
    templateURL: "app/views/games/show.html",
    controller: 'CountdownController'
  })
}])