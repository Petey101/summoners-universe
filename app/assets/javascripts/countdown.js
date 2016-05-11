if(document.getElementById("countdown-holder")){
  var end_time = document.getElementById("countdown-holder");
  var end_time_string = moment.utc(end_time.innerHTML.trim()).format();
  var start_time = new Date(Date.now())
  var start_time_plus_four_hours = moment.utc(start_time.setHours(start_time.getHours() + 4)).format()
  var start = moment.utc(start_time_plus_four_hours,"HH:mm:ss");
  var end = moment.utc(end_time_string,"HH:mm:ss");
  var duration = moment.duration(end.diff(start, true));
  var result = moment.utc(+duration).format("mm:ss");
  
  end_time.innerHTML = "Remaining Time: " + result;
}