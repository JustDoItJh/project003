$(function(){

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




        // if(currScroll > lastScroll) {
        //     $('.header').addClass('hide')
        // } else {
        //     $('.header').removeClass('hide')
        // }

        // lastScroll = currScroll

    })
    
});
