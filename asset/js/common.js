$(function(){

    lastScroll = 0;

    $(window).scroll(function(){
        currScroll = $(this).scrollTop();

        
        if(currScroll > 0) {
            $('.header').addClass('up')
        } else {
            $('.header').removeClass('up')
        }

        if(currScroll > lastScroll) {
            $('.header').addClass('hide')
        } else {
            $('.header').removeClass('hide')
        }

        lastScroll = currScroll

    })
    
});
