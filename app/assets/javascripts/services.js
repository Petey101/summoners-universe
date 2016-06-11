'use strict';

myApp.service("startTimer", ["$timeout", function($timeout){
  this.countdownTimer = function(endTime, startTime){
    var end = moment.duration(endTime, "m")._milliseconds;
    var start = moment.duration(startTime, "m")._milliseconds;
    if(start > end){
    }
    var remainingTime = moment.duration(end - start);
    var timer = moment.duration(remainingTime);
    return timer
}
}]);