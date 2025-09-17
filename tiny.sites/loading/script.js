$( document ).ready(function() {
  const birds = ["assets/bird2.png", "assets/bird3.png", "assets/bird4.png", "assets/bird5.png", "assets/bird6.png", "assets/bird7.png", "assets/bird8.png", "assets/bird9.png", "assets/bird10.png", "assets/bird11.png"]
  let counter = 0;

  
  var interval = setInterval(function() { 
    if (counter <= birds.length) { 

      $('#bird').attr('src',birds[counter]);
      counter++;
   }
   else { 
      clearInterval(interval);
   }
}, 1000);

});