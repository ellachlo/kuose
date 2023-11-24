$(document).ready(function(){

     //서브메뉴 연결하기
     $('.main-menu li').mouseenter(function(){
        const result = $(this).attr('data-tab');
        $('.sub-menu').removeClass('active');
        $('.sub-img img').removeClass('active');
        $(`#${result}`).addClass('active');
        $('.sub-menu-box').addClass('active');
        $('.header-logo img').addClass('on');
        $('.main-menu a').addClass('active');
        $('.icon-box img').addClass('active');
        $(this).find('.main-title').addClass('on');
    });

    $('.main-menu li').mouseleave(function(){
        $(this).find('.main-title').removeClass('on');
    });

    $('.sub-menu li').mouseenter(function(){
        $(this).parent().addClass('active');
    });

    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.sub-menu').removeClass('active')
        $('.header-logo img').removeClass('on');
        $('.main-menu a').removeClass('active');
        $('.icon-box img').removeClass('active');
      
    });

    $('#hamburger').click(function(){
        $(this).toggleClass('active');
    });

    let swiper = new Swiper(".mySwiper", {
        slidePerView:'auto',
        effect: "fade",
        spaceBetween: 0,
        speed:1000,
        slidePerGroup: 1,
        loop: true,
        autoplay: {
            delay:800,
            disableOnInteraction: false,
        }
    });

    $(window).scroll(function(){
        let sct = $(window).scrollTop();

        if(sct >= 300){
            $('.header-area').addClass('active');
            $('.header-logo img').addClass('active');
            $('.main-menu').addClass('on');
            $('.icon-box img').addClass('on');
            $('.top-btn').addClass('active');
            $('#hamburger').addClass('on');
        }else{
            $('.header-area').removeClass('active');
            $('.header-logo img').removeClass('active'); 
            $('.main-menu').removeClass('on');
            $('.icon-box img').removeClass('on');
            $('.top-btn').removeClass('active');
            $('#hamburger').removeClass('on');
        }
    });

    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },100);
    });

    $('#hamburger').click(function(){
        if($('#hamburger').hasClass('active')){
            $('.menu-box').addClass('active');
            $('#hamburger').addClass('switch');
        }else{
            $('.menu-box').removeClass('active');
            $('#hamburger').removeClass('switch');
        }
    });

    
});