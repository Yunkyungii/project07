$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.scroll_sec').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            }
            else {
                $(this).removeClass('on')
            };

        })
    })



    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .dots li').eq(0).addClass('on');
        $('.main_visual .dots li').eq(c).addClass('on')
            .siblings().removeClass('on');

    });

    $('.main_slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
    });

    $('.main_visual .dots li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.itm_slide').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
    })

    $('.main_area .dots li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.main_area .box_list li').eq(idx).addClass('on').siblings().removeClass('on');

    });

    $('.main_event .name li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.main_event .itm_slide>*').eq(idx).addClass('on').siblings().removeClass('on');

    });



    // $('.menu_list li').on('click', function () {
    //     $(this).addClass('on').siblings().removeClass('on');
    // });


})