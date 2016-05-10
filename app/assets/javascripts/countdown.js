if(document.getElementById("countdown-holder")){
  var end_time = document.getElementById("countdown-holder");
  var start_time = new Date(Date.now())
  var start_time_plus_four_hours = start_time.setHours(start_time.getHours() + 4)
  var start = moment.utc(start_time,"HH:mm:ss");
  var end = moment.utc(end_time.innerHTML,"HH:mm:ss");
  var duration = moment.duration(end.diff(start));
  var result = moment.utc(+duration).format("mm:ss");
  
  end_time.innerHTML = "Remaining Time: " + result;
  
}