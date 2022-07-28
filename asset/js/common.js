$(function(){

    // Gnb Menu slide up&down
    lastScroll = 0;

    $(window).scroll(function(){
        currScroll = $(this).scrollTop();

        
        if(currScroll > 0) {
            $('.header').addClass('hide')
        }else {
            $('.header').removeClass('hide')
        }


        wireless = $('.sc-wireless').offset().top;
        performances = $('.sc-performance').offset().top;


        if(currScroll >= wireless) {
            $('.header').addClass('dark')
            if(currScroll >= performances) {
                $('.header').removeClass('dark')
            }
        }else {
            $('.header').removeClass('dark')
        }

    })

    // Header Lnb slide menu 
    $('.btn-toggle').click(function(){
        $('.menu-list').slideToggle();
  
        if($(this).hasClass('active')){
            $(this).removeClass('active')
            $('.btn-toggle::after').html('+');
        } else {
            $(this).addClass('active')
            $('.btn-toggle::after').html('-');
        }
    });


    // Footer 아코디언 메뉴
    $('.nav-box').click(function(){
        $('.nav-list').slideUp();

        if($(this).children('.nav-list').is(':hidden')) {
            $(this).children('.nav-list').slideDown();
            $('.nav-box .title::after').animate({rotate:'45deg'}, 1000)
        } else {
            $(this).children('.nav-list').slideUp();
            $('.nav-box .title::after').animate({rotate:'-45deg'}, 1000)
        }
    })

});
