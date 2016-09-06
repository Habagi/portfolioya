$(function(){
        $('.container div').click(function(){
            var idx = $(this).index();
            console.log(idx)
            $('.modal').fadeIn();
            $('.contents ul li').eq(idx).children('img').fadeIn();
            $('.close').fadeIn();
            $('.contents').fadeIn();

            return false;
        })
        $('.close').click(function(){
            $('.modal').fadeOut();
            $('.contents ul li').children('img').fadeOut();
            $('.close').fadeOut();
            $('.contents').fadeOut();

            return false;
        })
    })
