

/*====================================
[ JS TABLE CONTENT ]
------------------------------------
    1.0 - Off Canvas
    2.0 - Mobile Menu Collapse
    3.0 - Header Social Follow
    4.0 - Smooth Link
    5.0 - Scrollspy
    6.0 - Typed Effect
    7.0 - Text Rotate
    8.0 - Waves Typing
    9.0 - Background Video
   10.0 - Text Slider
   11.0 - Partner Slider
   12.0 - Testimonial Slider
   13.0 - Team Slider
   14.0 - Latest News Slider
   15.0 - Counter
   16.0 - Portfolio Filter
   17.0 - Magnific Popup
   18.0 - Form Validator
   19.0 - Map
   20.0 - Wow
   21.0 - Back to Top
   22.0 - Pre Loader 
   23.0 - Header Sticky
   24.0 - mb.YTPlayer TogglePlay
-------------------------------------
[ JS CSS TABLE CONTENT ]
=====================================*/

(function($) {
    "use strict";


    jQuery(document).ready(function($) {


        /* =============================================
            1.0 - Off Canvas
        ============================================= */
        var myOffcanvas = Froffcanvas();

        /* =============================================
            2.0 - Mobile Menu Collapse
        ============================================= */
        $(".navbar-nav .nav-link").on('click', function(){
            $(".navbar-collapse").removeClass("show");
        });

        /* =============================================
            3.0 - Header Social Follow
        ============================================= */
        $('.header-follow').on('click', function(event) {
            event.preventDefault();
            $('.header-social').toggleClass('is-visible');
        });
        $('.header-follow-close').on('click', function(event) {
            event.preventDefault();
            $( '.header-social' ).toggleClass( 'is-visible');
        });

        /* =============================================
            4.0 - Smooth Link
        ============================================= */
        $('.page-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        /* =============================================
            5.0 - Scrollspy
        ============================================= */
        $(".navbar-collapse").scrollspy({ offset: 0});

        /* =============================================
            6.0 - Typed Effect
        ============================================= */
        $(".element").each(function(){
            var $this = $(this);
                $this.typed({
                strings: $this.attr('data-elements').split(','),
                typeSpeed: 100,
                loop: true,
                startDelay: 1000,
                backDelay: 1000,
            });
        });

        /* =============================================
            7.0 - Text Rotate
        ============================================= */
        $(".text-rotate").textrotator({
            animation: "flipUp",
            speed: 1750
        });

        /* =============================================
            8.0 - Waves Typing
        ============================================= */
        $('.anime-waves').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({loop: true})
        .add({
            targets: '.anime-waves .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: function(el, i) {
              return 150 * (i+1)
          }
        }).add({
            targets: '.anime-waves',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });

        /* =============================================
            9.0 - Background Video
        ============================================= */
        $(".bg-video-player").YTPlayer();

        /* =============================================
            10.0 - Text Slider
        ============================================= */
        $('#text-slider').owlCarousel({
            loop : true,
            dots : false,
            nav : false,
            autoplay : true,
            autoplayHoverPause : true,
            autoHeight : true,
            responsiveCla1ss : true,
            items: 1,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
        });

        /* =============================================
            11.0 - Partner Slider
        ============================================= */
        $('#partner-slider').owlCarousel({
            loop : true,
            dots : false,
            nav : false,
            autoplay : true,
            autoplayHoverPause : true,
            autoHeight : true,
            responsiveCla1ss :true,
            responsive : {
                0 : {
                    items: 2
                },
                540 : {
                    items: 3,
                },
                720 : {
                    items: 3,
                },
                992 : {
                    items: 4,
                },
                1140 : {
                    items: 5,
                },
            }
        });

        /* =============================================
            12.0 - Testimonial Slider
        ============================================= */
        $('#testimonial-slider').owlCarousel({
            loop : true,
            dots : false,
            nav : false,
            autoplay : true,
            autoplayHoverPause : true,
            autoHeight : true,
            responsiveClass :true,
            responsive : {
                0 : {
                    items: 1
                },
                540 : {
                    items: 1,
                },
                720 : {
                    items: 2,
                },
                992 : {
                    items: 2,
                },
                1140 : {
                    items: 2,
                },
            }
        });

        /* =============================================
            13.0 - Team Slider
        ============================================= */
        $('#team-slider').owlCarousel({
            loop : true,
            dots : false,
            nav : false,
            autoplay : true,
            autoplayHoverPause : true,
            autoHeight : true,
            responsiveClass :true,
            responsive : {
                0 : {
                    items: 1
                },
                540 : {
                    items: 1,
                },
                720 : {
                    items: 2,
                },
                992 : {
                    items: 3,
                },
                1140 : {
                    items: 4,
                },
            }
        });

        /* =============================================
            14.0 - Latest News Slider
        ============================================= */
        $('#blog-slider').owlCarousel({
            loop : true,
            dots : false,
            nav : false,
            autoplay : true,
            autoplayHoverPause : true,
            autoHeight : true,
            responsiveClass :true,
            responsive : {
                0 : {
                    items: 1
                },
                540 : {
                    items: 1,
                },
                720 : {
                    items: 2,
                },
                992 : {
                    items: 3,
                },
                1140 : {
                    items: 3,
                },
            }
        });

        /* =============================================
            15.0 - Counter
        ============================================= */
        $('.counter-value').counterUp({
            delay: 10,
            time: 1000
        });

        /* =============================================
            16.0 - Portfolio Filter
        ============================================= */
        var $grid = $('.portfolio-row').imagesLoaded( function() {
            $grid.isotope({
                itemSelector: '.portfolio-col',
                layoutMode: 'fitRows',
                percentPosition: true,
                filter: '*'
            });
        });

        $('.portfolio-filter li').on( 'click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        $('.portfolio-filter li').on('click', function (e) {
            e.preventDefault();
            $('.portfolio-filter li').removeClass('active');
            $(this).addClass('active');
            var groupName = $(this).attr('data-group');
            $grid.isotope('shuffle', groupName );
        });

        /* =============================================
            17.0 - Magnific Popup
        ============================================= */
        $('.popup-image').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false,
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /* =============================================
            18.0 - Form Validator
        ============================================= */
        $(function () {
            $('.needs-validation').validator();
            $('.needs-validation').on('submit', function (e) {
                if (!e.isDefaultPrevented()) {
                    var url = "php/contact.php";
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: $(this).serialize(),
                        success: function (data)
                        {
                            var messageAlert = 'alert-' + data.type;
                            var messageText = data.message;
                            var alertBox = '<div class="alert mb-20 '+messageAlert+' alert-dismissible fade show" role="alert">'+ messageText +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
                            if (messageAlert && messageText) {
                                $('.needs-validation').find('.messages').hide().html(alertBox).fadeIn('slow');
                                $('.needs-validation')[0].reset();
                            }
                        }
                    });
                    return false;
                }
            })
        });

        /* =============================================
            19.0 - Map
        ============================================= */
        var center = [46.099760, -65.592160];
        $('#map-canvas')
        .gmap3({
            center: center,
            zoom: 13,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            scrollwheel: false,
            streetViewControl: true,
            draggable: true,
            styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"}]}, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road.highway", "elementType": "all","stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]}, {"featureType": "water","elementType": "all","stylers": [{"color": "#f1f1f1"},{"visibility": "on"}]}]
        })
        .marker({
            position: center,
            icon: 'images/map-pin.svg'
        })
        .infowindow({
            position: center,
            content: "<div class='text-center'><h5><span class='text-uppercase fw-7 text-black'>Brand Widget</span></h5><p> 231, DLF Mall, South Court, Saket, Milton Keynes,</br> MK19 6H</p></div>"
        })
        .then(function (infowindow) {
            var map = this.get(0);
            var marker = this.get(1);
            marker.addListener('click', function() {
              infowindow.open(map, marker);
          });
        });

        /* =============================================
            20.0 - Wow
        ============================================= */
        var wow = new WOW({
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       100,
            mobile:       true,
            live:         true,
        });
        wow.init();


    });


    /* =============================================
        21.0 - Back to Top
    ============================================= */
    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
        return false;
    });
    
     /* =============================================
        22.0 - Pre Loader
    ============================================= */   
    jQuery(window).on('load', function() {
        $('body').imagesLoaded( function() {
            $('#pre-loader').fadeOut();
        });

    });

    /* =============================================
        23.0 - Header Sticky
    ============================================= */
    jQuery(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".header").addClass("header-sticky");
        } else {
            $(".header").removeClass("header-sticky");
        }
    });
    jQuery(window).on('load', function () {

        $(".header").sticky({topSpacing: 0});

    });


}(jQuery));

/* =============================================
    24.0 - mb.YTPlayer TogglePlay
============================================= */
function changeLabel( state ) {
    jQuery( "#togglePlay" ).html( state == 1 ? "<i class='icofont icofont-ui-pause'></i>" : "<i class='icofont icofont-ui-play'></i>" );
}



$(window).on("load", function() {

    $("<div class='style-switcher'></div>").insertAfter("#wrapper"),
    $("<link id='color-opt' href='css/skins/skin-default.css' rel='stylesheet'>"),
    $("<link href='demo/style-switcher.css' rel='stylesheet'>").appendTo($("head"));
    $(".style-switcher").load("switcher.html", function() {

    $("#switcher-settings").on("click", function(a) {
        a.preventDefault(), $(".style-switcher").toggleClass("show")
    }),

    $("ul.pattern .color1" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-default.css" ); return false;});
    $("ul.pattern .color2" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-pink-gradient.css" ); return false;});
    $("ul.pattern .color3" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-yellow-gradient.css" ); return false;});
    $("ul.pattern .color4" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-skyblue-gradient.css" ); return false;});
    $("ul.pattern .color5" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-gray-gradient.css" ); return false;});
    $("ul.pattern .color6" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-green-gradient.css" ); return false;});
    $("ul.pattern .color7" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-blue.css" ); return false;});
    $("ul.pattern .color8" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-pink.css" ); return false;});
    $("ul.pattern .color9" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-yellow.css" ); return false;});
    $("ul.pattern .color10" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-skyblue.css" ); return false;});
    $("ul.pattern .color11" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-gray.css" ); return false;});
    $("ul.pattern .color12" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-green.css" ); return false;});
    $("ul.pattern .color13" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-red.css" ); return false;});
    $("ul.pattern .color14" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-purple.css" ); return false;});
    $("ul.pattern .color15" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-brown.css" ); return false;});
    $("ul.pattern .color16" ).click(function(){$("#color-opt").attr("href", "css/skins/skin-light-green.css" ); return false;});

    $("ul.pattern li a").click(function(e){
        e.preventDefault();
        $(this).parent().parent().find("a").removeClass("active");
        $(this).addClass("active");
    }) 

    })

});