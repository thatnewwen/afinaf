$( document ).ready(function() {
    $('#left').on('click mouseover', function () {
    $( '#left' ).addClass( "hover" );
    $( '#right' ).removeClass( "hover" );
  })
  $('#right').on('click mouseover', function () {
    $( '#left' ).removeClass( "hover" );
    $( '#right' ).addClass( "hover" );
  })
});