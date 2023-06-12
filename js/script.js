$(function(){
    //popup
    $('.popup').fadeIn().on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    $('.popupclose').click(function(){
        $('.popup').fadeOut().off('scroll touchmove mousewheel')
    });
    
    //popup swiper
    const swiper = new Swiper('.popup__slide .swiper', {
        slidesPerView: "auto",
        spaceBetween: 10,
    });
    
    //nav
    $('nav a').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
    
    //gnb
    $('.header__btn--gnb').click(function(){
        $('.gnb').addClass('active')
    })
    $('.gnb__btn-close').click(function(){
        $('.gnb').removeClass('active')
    })
    
    //gnb swiper
    const swiper0 = new Swiper('.gnb__slide.swiper', {
        slidesPerView: '1',
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            type: "fraction",
        },
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    
    //btn-top
    $(window).scroll(function(){
        if($(window).scrollTop() > 90) {
            $('aside').addClass('active')
        }
        else {
            $('aside').removeClass('active')
        }
    });
    
    //promotion swiper
    const swiper1 = new Swiper('.promotion.swiper', {
        slidesPerView: '1',
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            type: "fraction",
        },
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    
    //chart tab
    $('.chart__title').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        const data = $(this).attr('data-alt')
        $('#' + data).addClass('active').siblings().removeClass('active')
    });
    $('.chart__tab a').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
    
    //chart swiper
    const swiper2 = new Swiper('.chart__content > li.swiper', {
        slidesPerView: '3',
        spaceBetween: 10,
        loop: false,
    });
    
    //icecon swiper
    const swiper3 = new Swiper('.icecon__slide.swiper', {
        scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
    });
    
    //special accordion
    $('.special__title').click(function(){
        $('.special__title').removeClass('active')
        $(this).addClass('active')
    });
    
    //footer copy
    $('.footer__copy strong').click(function(){
        $(this).toggleClass('active')
        $('.footer__copy p').stop().slideToggle()
    })
});

