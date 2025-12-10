$(document).ready(function () {
  function foo() {
    let first = $(".first").css("padding-left");
    let firstInt = parseInt(first, 10);
    $(".first").css("padding-left", firstInt + 5 + "px");
    setTimeout(foo, 5000);
  }
  
  function doo() {
    let second = $(".second").css("padding-left");
    let secondInt = parseInt(second, 10);
    $(".second").css("padding-left", secondInt + 5 + "px");
    setTimeout(doo, 5000);
  }
  foo();
  setTimeout(doo, 2500);
});
