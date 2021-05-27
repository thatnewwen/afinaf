$( document ).ready(function() {
  $('.mirror').on('keyup', function() {
    $('.'+$(this).attr('class')).val($(this).val());
});
});
