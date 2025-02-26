$(window).scroll(function() {
  console.log($(this).scrollTop());
  $('#b').css({
      'width': 300+$(this).scrollTop(),
      'height': 300+$(this).scrollTop()
  });
});