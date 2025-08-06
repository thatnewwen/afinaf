$( document ).ready(function() {
  didScroll = false;
  $( "#content" ).on( "scroll", function() {
    didScroll = true;
} );

setInterval(function() { 
  if (didScroll) {
    didScroll = false;
    let x = Math.random() * 500; 
  let y = Math.random() * 500; 
  $("#yellow").width( x );
  $("#yellow").height( y );
  }
}, 2000);

});