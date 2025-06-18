var event = new Date();

let chicago = event.toLocaleTimeString('en-US', { timeZone: 'America/Chicago' });
  let taipei = event.toLocaleTimeString('en-US', { timeZone: 'Asia/Taipei' });
  let myanmar = event.toLocaleTimeString('en-US', { timeZone: 'Asia/Rangoon' });
  let singapore = event.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore' });

document.getElementById("chicago").textContent=chicago;
  document.getElementById("taipei").textContent=taipei;
  document.getElementById("myanmar").textContent=myanmar;
  document.getElementById("singapore").textContent=singapore;


setInterval(function() { 
var event = new Date();

let chicago = event.toLocaleTimeString('en-US', { timeZone: 'America/Chicago' });
  let taipei = event.toLocaleTimeString('en-US', { timeZone: 'Asia/Taipei' });
  let myanmar = event.toLocaleTimeString('en-US', { timeZone: 'Asia/Rangoon' });
  let singapore = event.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore' });

document.getElementById("chicago").textContent=chicago;
  document.getElementById("taipei").textContent=taipei;
  document.getElementById("myanmar").textContent=myanmar;
  document.getElementById("singapore").textContent=singapore;

}, 1000);
