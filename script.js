$( document ).ready(function() {

  $(".row").on('click',function() {
    $(this).find(".info").toggle();
  });
});
