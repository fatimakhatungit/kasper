(function($) {

"use strict";

    /*
    |--------------------------------------------------------------------------
    | Template Name: Buildm
    | Version: 1.0.1
    |--------------------------------------------------------------------------
    |--------------------------------------------------------------------------
    | TABLE OF CONTENTS:
    |--------------------------------------------------------------------------
    |
    | 1. Scripts initialization
    | 2. Preloader
    | 3. Primary Menu
    | 4. Scroll Function
    | 5. Scroll Up
    | 6. Owl Carousel
    | 7. Smooth Scroll
    | 8. Accordian
    | 9. Portfolio
    | 10. Magnific Popup
    | 11. Tamjid Counter
    |
    */

    /*--------------------------------------------------------------
        1. Scripts initialization
    --------------------------------------------------------------*/

    $(window).on('load', function() {
        $(window).trigger("scroll");
        $(window).trigger("resize");
        preloaderSetup();
    });

    $(document).ready(function() {
        $(window).trigger("resize");
        scrollUp();
        accordianSetup();
        counterUp();
        new WOW().init();
        $('.parallax').parallax("50%", 0.3);
    });

    $(window).on('scroll', function() {
        scrollFunction();
    });

    /*--------------------------------------------------------------
        2. Preloader
    --------------------------------------------------------------*/

    function preloaderSetup() {

        $("body").imagesLoaded(function () {
            $(".t-circle").fadeOut();
            $("#preloader").delay(200).fadeOut("slow").remove();
        });

    }
    $(window).load(function() {
    //$("#loading").delay(2000).fadeOut(500);
    $("#loading-center").click(function() {
    $("#loading").fadeOut(500);
    })
})

    /*--------------------------------------------------------------
        3. Primary Menu
    --------------------------------------------------------------*/
    // meanmenu
// meanmenu
$('#mobile-menu').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu',
    
});

 //   Search Active
 $('.search-click a').on('click', function(){
    $('.search-hover').toggleClass('active');
 });
    
    /*--------------------------------------------------------------
        4. Scroll Function
    --------------------------------------------------------------*/

    function scrollFunction() {

        var scroll = $(window).scrollTop();
        if(scroll >= 10) {
            $(".site-header").addClass("small-height");
        } else {
            $(".site-header").removeClass("small-height");
        }
        
        if(scroll >= 350) {
            $(".scrollup").addClass("scrollup-show");
        } else {
            $(".scrollup").removeClass("scrollup-show");
        }

    }

    /*--------------------------------------------------------------
        5. Scroll Up
    --------------------------------------------------------------*/

    function scrollUp() {

        $( "body" ).append( "<span class='scrollup'></span>" );

        $('.scrollup').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });

    }


    /*--------------------------------------------------------------
        6. Owl Carousel
    --------------------------------------------------------------*/
$('.hero-slider').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
     navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
  /*--------------------------------------------------------------
        6.testimonial Owl Carousel
    --------------------------------------------------------------*/
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
     navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

  let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
//LightBox / Fancybox
    if($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect  : 'fade',
            closeEffect : 'fade',
            helpers : {
                media : {}
            }
        });
    }
    // 
/* magnificPopup img view */
// $('.popup-image').magnificPopup({
//     type: 'image',
//     gallery: {
//       enabled: true
//     }
// });
    /*--------------------------------------------------------------
        8. Accordian
    --------------------------------------------------------------*/
  
    function accordianSetup() {

        var $this = $(this);
        $( ".accordian-head" ).append( "<span class='accordian-toggle'></span>" );
        $('.single-accordian').filter(':nth-child(n+2)').children('.accordian-body').hide();
        $('.single-accordian:first-child').children('.accordian-head').addClass('active');
        $('.accordian-head').on('click', function() {
            $(this).parent('.single-accordian').siblings().children('.accordian-body').slideUp();
            $(this).siblings().slideToggle();
            /* Accordian Active Class */
            $(this).toggleClass('active');
            $(this).parent('.single-accordian').siblings().children('.accordian-head').removeClass('active');
        });

    }

//
$('#bar1').barfiller({barColor: "#19c8fa"});
$('#bar2').barfiller({barColor: "#19c8fa"});
$('#bar3').barfiller({barColor: "#19c8fa"});
$('#bar4').barfiller({barColor: "#19c8fa"});
    /*--------------------------------------------------------------
        11. Tamjid Counter
    --------------------------------------------------------------*/

    function counterUp() {

        $('.counter').tamjidCounter({
            duration: 3000,
            delay: 0,
            easing: 'swing'
        });

    }

   
})(jQuery); // End of use strict