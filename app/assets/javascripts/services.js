'use strict';

myApp.service("startTimer", function(){
  this.countdownTimer = function(endTime, startTime){
  if(endTime >= startTime){
  var end = moment.duration(endTime, "m")._milliseconds
  var start = moment.duration(startTime, "m")._milliseconds
  var remainingTime = moment.duration(end - start)
  var timer = moment.duration(remainingTime._milliseconds)
  return timer.minutes()
  }else{
    return "Time's up!"
  }
}
});