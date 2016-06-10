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

  // this.timeOut = function(countdown, timer, url, params){
  //       countdown = countdown - 1000
  //       if(countdown >= 0){
  //         var seconds = Math.floor((countdown % 60000)/1000).toString()
  //         timer = (Math.floor(countdown/60000) + ":" + (seconds.length < 2 ? '0' + seconds : seconds))
  //         mytimeout = $timeout(this.timeOut, 1000);
  //       }else{
  //         $(".countdown-timer").html("Time's Up!")
  //         url = '/games/failed_game?id=' + params
  //       }
  //     }
  //       var mytimeout = $timeout(this.timeOut,1000);
}]);