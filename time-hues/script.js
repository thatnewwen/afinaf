$( document ).ready(function() {
  var time = new Date();
  var percent = (Date.now() - (new Date()).setHours(0,0,0,0)) / 864000
  var color = "hsl(" + Math.round((percent/100)*360) + ", 66%, 34%)"
  $('#percent').text(Math.round(percent * 100) / 100 + "%")  
  $("#time").text(  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
  document.getElementById("day").style.background = color;

setInterval(function() { 
  var time = new Date();
  var percent = (Date.now() - (new Date()).setHours(0,0,0,0)) / 864000
  var color = "hsl(" + Math.round((percent/100)*360) + ", 66%, 34%)"
  $('#percent').text(Math.round(percent * 100) / 100 + "%")  
  $("#time").text(  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
  document.getElementById("day").style.background = color;
}, 1000);

});