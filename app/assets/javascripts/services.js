'use strict';

myApp.service("startTimer", [function(){

  this.updateHealthBar = function(percentage){
    $(".health-header").show();
    $(".progress-bar").show();
    $(".progress-bar").css("width", percentage + "%");
    $(".health-header").html("Your Health: " + percentage + "%")
  }

  this.calculateHealthBar = function(timer){
    var maxTime = 600000;
    var perc = Math.round((timer / maxTime) * 100);
    if(perc <= 100){
      this.updateHealthBar(perc);
    }else{
      this.updateHealthBar(100);
    }
  }

  this.getTimer = function(endTime, startTime){
    var end = moment.duration(endTime, "m")._milliseconds;
    var start = moment.duration(startTime, "m")._milliseconds;
    var remainingTime = moment.duration(end - start);
    var timer = moment.duration(remainingTime);
    this.calculateHealthBar(timer._milliseconds);
    return timer;
};

  this.countdownTimer = function(scope, countdown){
    var seconds = Math.floor((countdown % 60000)/1000).toString();
    scope.timer = (Math.floor(countdown/60000) + ":" + (seconds.length < 2 ? '0' + seconds : seconds));
  };

  this.timeUp = function(doc, routeParams){
    $(".countdown-timer").html("Time's Up!");
    doc.location.href = '/games/failed_game?id=' + routeParams.id;
  };
}]);