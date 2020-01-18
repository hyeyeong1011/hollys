$(function(){

    // 메인 슬라이드
    var mainSwiper = new Swiper('.main-slide > .swiper-container' , {

        pagination: {
            el: '.main-slide .swiper-pagination',
            clickable: true,
        },

    });


    // gnb 
    $(window).resize(function(){

        var windowW = $(window).width();

        $('.gnb > ul > li > ul, .gnb').removeAttr('style');
        $('.gnb li').removeClass('on');
        $('.gnb > ul > li').off('mouseenter');
        $('.gnb > ul > li > a').off('click');
        $('.gnb > ul').off('mouseleave');


        if(windowW > 767){

            $('.gnb > ul > li').mouseenter(function(){

                $('.gnb > ul > li').find('span').css('opacity','1');
                $('.gnb > ul > li > ul, .depth2-bg').stop().slideDown(300);
                $('.gnb > ul > li').removeClass('on');
                $(this).addClass('on');

            });

            $('.gnb > ul > li').mouseleave(function(){

                $('.gnb > ul > li').removeClass('on');

            });

            $('.depth2-bg').mouseleave(function(){

                $('.gnb > ul > li').find('span').css('opacity','0');
                $('.gnb > ul > li > ul, .depth2-bg').stop().slideUp(300);

            });

        }else{

            $('.btn-menu').click(function(){

                $('.gnb').stop().slideToggle();

            });

        }

    }).resize();


    // 태블릿 배너 슬라이드
    var bannerSwiper = new Swiper('.first-row-tab > .swiper-container', {

        pagination: {
            el: '.first-row-tab .swiper-pagination',
            clickable: true,
            type: 'progressbar',
        },

    });



});