$(document).ready(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('open');
    $('.mobile-nav').slideToggle();
  });

  $('body').delay(9000).queue(function(){
    $(this).css("overflow", "visible");
    $('.loading-overlay').remove();
  });
});
