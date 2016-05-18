//= depend_on_asset "timer.html"
'use strict';

myApp.directive("timerInfo", function(){
  return {
    restrict: "E",
    templateUrl: "timer.html"
  };

});