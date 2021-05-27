$( document ).ready(function() {
  $('.mirror').on('keyup', function() {
    $('.'+$(this).attr('class')).val($(this).val());
});
  
 Array.from( document.querySelectorAll('[data-expand]'), (input)=>{
   let parent = input.parentNode;
   function updateSize(){
     parent.dataset.value = input.value
   }
   input.addEventListener('input', updateSize);
   updateSize();
 });  
});
