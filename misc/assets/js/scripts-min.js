$(document).ready(function(){$(".hamburger").click(function(){$(this).toggleClass("open"),$(".mobile-nav").slideToggle()}),$(".iconRed").click(function(){"block"===$(".bikingGear").css("display")&&$(".bikingGear").slideToggle(),"block"===$(".readingList").css("display")&&$(".readingList").slideToggle(),"block"===$(".coffeeFreak").css("display")&&$(".coffeeFreak").slideToggle(),"block"===$(".hiking").css("display")&&$(".hiking").slideToggle(),$(".setup").slideToggle()}),$(".iconOrange").click(function(){"block"===$(".setup").css("display")&&$(".setup").slideToggle(),"block"===$(".readingList").css("display")&&$(".readingList").slideToggle(),"block"===$(".coffeeFreak").css("display")&&$(".coffeeFreak").slideToggle(),"block"===$(".hiking").css("display")&&$(".hiking").slideToggle(),$(".bikingGear").slideToggle()}),$(".iconPurple").click(function(){"block"===$(".bikingGear").css("display")&&$(".bikingGear").slideToggle(),"block"===$(".setup").css("display")&&$(".setup").slideToggle(),"block"===$(".coffeeFreak").css("display")&&$(".coffeeFreak").slideToggle(),"block"===$(".hiking").css("display")&&$(".hiking").slideToggle(),$(".readingList").slideToggle()}),$(".iconBlue").click(function(){"block"===$(".bikingGear").css("display")&&$(".bikingGear").slideToggle(),"block"===$(".readingList").css("display")&&$(".readingList").slideToggle(),"block"===$(".setup").css("display")&&$(".setup").slideToggle(),"block"===$(".hiking").css("display")&&$(".hiking").slideToggle(),$(".coffeeFreak").slideToggle()}),$(".iconGreen").click(function(){"block"===$(".bikingGear").css("display")&&$(".bikingGear").slideToggle(),"block"===$(".readingList").css("display")&&$(".readingList").slideToggle(),"block"===$(".coffeeFreak").css("display")&&$(".coffeeFreak").slideToggle(),"block"===$(".setup").css("display")&&$(".setup").slideToggle(),$(".hiking").slideToggle()}),$(window).scroll({previousTop:0},function(){var e=$(window).scrollTop(),l=$("header").outerHeight();$(window).scrollTop()>l&&(e<=this.previousTop?($("header").css("opacity","1"),$("header").css("pointer-events","auto"),$(".mobile-nav").css("opacity","1"),$(".mobile-nav").css("pointer-events","auto")):($("header").css("opacity","0"),$("header").css("pointer-events","none"),$(".mobile-nav").css("opacity","0"),$(".mobile-nav").css("pointer-events","none"))),this.previousTop=e}),$('li a[href="#welcome"]').click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(".welcome").offset().top-100},1e3),"block"===$(".mobile-nav").css("display")&&($(".mobile-nav").slideToggle(),$(".hamburger").toggleClass("open"))}),$('li a[href="#about"]').click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(".about").offset().top-100},1e3),"block"===$(".mobile-nav").css("display")&&($(".mobile-nav").slideToggle(),$(".hamburger").toggleClass("open"))}),$('li a[href="#skills"]').click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(".skills").offset().top-100},1e3),"block"===$(".mobile-nav").css("display")&&($(".mobile-nav").slideToggle(),$(".hamburger").toggleClass("open"))}),$('li a[href="#portfolio"]').click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(".portfolio").offset().top-100},1e3),"block"===$(".mobile-nav").css("display")&&($(".mobile-nav").slideToggle(),$(".hamburger").toggleClass("open"))}),$('li a[href="#contact"]').click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(".contact").offset().top-100},1e3),"block"===$(".mobile-nav").css("display")&&($(".mobile-nav").slideToggle(),$(".hamburger").toggleClass("open"))})});