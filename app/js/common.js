$( document ).ready(function() {

    // STICKY MENU
    var y = $(this).scrollTop();
    if (y > 900) {
        $('.sticky-menu-wrapper').css("opacity", "1");
        $('.sticky-menu-wrapper').addClass('sticky-menu--active');
    } else {
        $('.sticky-menu-wrapper').css("opacity", "0");
        $('.sticky-menu-wrapper').removeClass('sticky-menu--active');
    }

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 900) {
            $('.sticky-menu-wrapper').css("opacity", "1");
            $('.sticky-menu-wrapper').addClass('sticky-menu--active');
        } else {
            $('.sticky-menu-wrapper').css("opacity", "0");
            $('.sticky-menu-wrapper').removeClass('sticky-menu--active');
        }
    });

    // TO TOP
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    // SMOOTH SCROLL
    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 90,
        after: function (anchor, toggle) {
            $('#topMenu').removeClass('top-menu-wrapper--active');
        }
    });

    // NEWS
    var swiperNews = new Swiper('.swiper-news', {
        slidesPerView: 3,
        spaceBetween: 32,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is <= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1263: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    $('.news-navigation__next').bind('click', function () {
        swiperNews.slideNext();
    });

    $('.news-navigation__prev').bind('click', function () {
        swiperNews.slidePrev();
    });


    // NAV MENU MOBILE
    $('#navMenuOpen').click(function(){
        $(".navigation-panel-menu").slideDown();
    });

    $('#navMenuClose').click(function(){
        $(".navigation-panel-menu").slideUp();
    });


    // TOGGLE
    $('.about-speakers-toggle-btn').click(function() {
        $(this).parent().find('.about-speakers-items').toggleClass("about-speakers-items--active");
        var buttonText = $(this).text();
        if (buttonText == "Показать") {
            $(this).text("Скрыть");
            $(this).addClass("about-speakers-toggle-btn--active");
        } else {
            $(this).text("Показать");
            $(this).removeClass("about-speakers-toggle-btn--active");
        }
    });




});
