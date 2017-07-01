$(document).ready(function(){
  //mobile nav hamburger controls
  $('.hamburger').click(function(){
    $(this).toggleClass('open');
    $('.mobile-nav').slideToggle();
  });

  $('.iconRed').click(function(){
    if($('.bikingGear').css('display') === 'block'){
      $('.bikingGear').slideToggle();
    }
    if($('.readingList').css('display') === 'block'){
      $('.readingList').slideToggle();
    }
    if($('.coffeeFreak').css('display') === 'block'){
      $('.coffeeFreak').slideToggle();
    }
    if($('.hiking').css('display') === 'block'){
      $('.hiking').slideToggle();
    }
    $('.setup').slideToggle();
  });

  $('.iconOrange').click(function(){
    if($('.setup').css('display') === 'block'){
      $('.setup').slideToggle();
    }
    if($('.readingList').css('display') === 'block'){
      $('.readingList').slideToggle();
    }
    if($('.coffeeFreak').css('display') === 'block'){
      $('.coffeeFreak').slideToggle();
    }
    if($('.hiking').css('display') === 'block'){
      $('.hiking').slideToggle();
    }
    $('.bikingGear').slideToggle();
  });

  $('.iconPurple').click(function(){
    if($('.bikingGear').css('display') === 'block'){
      $('.bikingGear').slideToggle();
    }
    if($('.setup').css('display') === 'block'){
      $('.setup').slideToggle();
    }
    if($('.coffeeFreak').css('display') === 'block'){
      $('.coffeeFreak').slideToggle();
    }
    if($('.hiking').css('display') === 'block'){
      $('.hiking').slideToggle();
    }
    $('.readingList').slideToggle();
  });

  $('.iconBlue').click(function(){
    if($('.bikingGear').css('display') === 'block'){
      $('.bikingGear').slideToggle();
    }
    if($('.readingList').css('display') === 'block'){
      $('.readingList').slideToggle();
    }
    if($('.setup').css('display') === 'block'){
      $('.setup').slideToggle();
    }
    if($('.hiking').css('display') === 'block'){
      $('.hiking').slideToggle();
    }
    $('.coffeeFreak').slideToggle();
  });

  $('.iconGreen').click(function(){
    if($('.bikingGear').css('display') === 'block'){
      $('.bikingGear').slideToggle();
    }
    if($('.readingList').css('display') === 'block'){
      $('.readingList').slideToggle();
    }
    if($('.coffeeFreak').css('display') === 'block'){
      $('.coffeeFreak').slideToggle();
    }
    if($('.setup').css('display') === 'block'){
      $('.setup').slideToggle();
    }
    $('.hiking').slideToggle();
  });

  // $('body').delay(9000).queue(function(){
  //   $(this).css("overflow", "visible");
  //   $('.loading-overlay').remove();
  // });

  //Header appearance when scrolling
  $(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    var headerHeight = $("header").outerHeight();
    if($(window).scrollTop() > headerHeight){
    if (currentTop <= this.previousTop) {
        $("header").css("opacity", "1");
        $("header").css("pointer-events", "auto");
        $(".mobile-nav").css("opacity", "1");
        $(".mobile-nav").css("pointer-events", "auto");

    } else {
       $("header").css("opacity", "0");
       $("header").css("pointer-events", "none");
       $(".mobile-nav").css("opacity", "0");
       $(".mobile-nav").css("pointer-events", "none");

    }
  }
    this.previousTop = currentTop;
  });
});
