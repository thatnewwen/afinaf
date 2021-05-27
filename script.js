$( document ).ready(function() {
  $('.mirror').on('keyup', function() {
    $('.'+$(this).attr('class')).text($(this).text());
    $(this).focus()
});
  
 // Dealing with Input width
let el = document.querySelector(".input-wrap .input");
let widthMachine = document.querySelector(".input-wrap .width-machine");
el.addEventListener("keyup", () => {
  widthMachine.innerHTML = el.value;
});
});
