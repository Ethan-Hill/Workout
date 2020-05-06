/*  ---------------------------------------------------
    Template Name: Gutim
    Description: Gutim Fitness HTML Template
    Author: Colorlib
    Author URI: http://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */
'use strict';

(function($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function() {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.gallery-controls li').on('click', function() {
            $('.gallery-controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.gallery-filter').length > 0) {
            var containerEl = document.querySelector('.gallery-filter');
            var mixer = mixitup(containerEl);
        }

    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Menu Hover
	--------------------*/
    $(".header-section .nav-menu .mainmenu ul li").on('mousehover', function() {
        $(this).addClass('active');
    });
    $(".header-section .nav-menu .mainmenu ul li").on('mouseleave', function() {
        $('.header-section .nav-menu .mainmenu ul li').removeClass('active');
    });

    /*------------------------
		Class Slider
    ----------------------- */
    $(".classes-slider").owlCarousel({
        items: 3,
        dots: true,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        About Counter Up
    --------------------*/
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
       Schedule Filter
    --------------------*/
    $('.nav-controls ul li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.nav-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function() {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

})(jQuery);

function check() {
    const getCookie = (name) => {
        return document.cookie.split('; ').reduce((r, v) => {
          const parts = v.split('=')
          return parts[0] === name ? decodeURIComponent(parts[1]) : r
        }, '')
      }

      function delete_cookie( name ) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }

      var cookie = getCookie("expires");
      if(cookie) {
          let now = moment();
          if(now.format('LT') >= cookie){
            delete_cookie(`expires`);
            delete_cookie(`used`)
          } else {
              var expire = getCookie("expires");
        document.getElementById("myBtn").innerHTML = `This can be used again at ` + expire
          }
      }
}

function workout() {

    const getCookie = (name) => {
        return document.cookie.split('; ').reduce((r, v) => {
          const parts = v.split('=')
          return parts[0] === name ? decodeURIComponent(parts[1]) : r
        }, '')
      }

    if (document.cookie.split(';').some(function(item) {
            return item.indexOf('used=1') >= 0
        })) {
        document.getElementById("myBtn").setAttribute("disabled", "disabled");
        var expire = getCookie("expires");
        document.getElementById("myBtn").innerHTML = `This can be used again at ` + expire
    } else {

        console.log(`Used`)

        const now = moment();
        const expiration = moment().add(6, `hours`);
        
        // get the difference between the moments
        const diff = expiration.diff(now);
        
        //express as a duration
        const diffDuration = moment.duration(diff);

        console.log(diffDuration.hours())
        document.cookie = "used=1";
        document.cookie = "expires=" + expiration.format('LT');

        var abs = [
            ["Crunch"],
            ["Situp"],
        ];

        var legs = [
            ["squat"],
            ["lunge"],
        ];

        var randomWorkoutabs = abs[Math.random() * abs.length | 0];
        document.getElementById("abs").innerHTML = randomWorkoutabs;

        var randomWorkoutlegs = legs[Math.random() * legs.length | 0];
        document.getElementById("legs").innerHTML = randomWorkoutlegs;

        check()
    }
}

check()



