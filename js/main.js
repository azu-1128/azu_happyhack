$(function($){
    $('.bg-switcher').bgSwitcher({
        images: ['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 5000,
        loop:true,
    });

    $('.slider').slick({
        arrows:true,
        autoplay:true,
        dots:true,
        slidesToShow:4,
        responsive: [
            {
              breakpoint: 480,
              settings: {
              slidesToShow: 1,
              },
            },
          ],
    })

    $(window).scroll(function(){
        var targetElement = $('.fadein1').offset().top;
        var scroll =$(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll > targetElement - windowHeight + 200){
            $('.fadein1').css('opacity','1');
            $('.fadein1').css('transform','translateY(0)');
        }   
    });

    $(window).scroll(function(){
        var targetElement = $('.fadein2').offset().top;
        var scroll =$(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll > targetElement - windowHeight + 200){
            $('.fadein2').css('opacity','1');
            $('.fadein2').css('transform','translateY(0)');
        }   
    });

    $(window).scroll(function(){
        var targetElement = $('.fadein3').offset().top;
        var scroll =$(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll > targetElement - windowHeight + 200){
            $('.fadein3').css('opacity','1');
            $('.fadein3').css('transform','translateY(0)');
        }   
    });

    $(window).scroll(function(){
        var targetElement = $('.fadein4').offset().top;
        var scroll =$(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll > targetElement - windowHeight + 200){
            $('.fadein4').css('opacity','1');
            $('.fadein4').css('transform','translateY(0)');
        }   
    });
});