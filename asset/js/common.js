$(function(){

    // Gnb Menu slide up&down
    lastScroll = 0;

    $(window).scroll(function(){
        currScroll = $(this).scrollTop();

        
        if(currScroll >= lastScroll) {
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


    // responsive Gnb menu
    const toggle = true;

    $('.btn-menu').click(function(){

        if(toggle){
            $('.sidebar').slideDown();
        } else {
            $('.sidebar').slideUp();
        }

        toggle =! toggle;
      
    })



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
