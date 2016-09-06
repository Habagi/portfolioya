$(function(){

    $(window).resize(function(){
        cpt($('.popup'))
    })

    function black(){

                $('body').prepend(add)


                $('.black').fadeTo(1000,0.5);


                return false;
            }

            function cpt(target){

                target.css({
                    left:'50%',
                    marginLeft:function(){

                        var aa = target.width()

                        return -aa/2 + 'px'
                        console.log(aa)
                    },
                    top:'50%',
                    marginTop:function(){
                        var aa = target.height()

                        return -aa/2 + 'px'
                    }


                })
}


      $('.clearfix li').click(function(){

          var i = $(this).index();
          console.log(i)
          $('.popup').fadeIn();
          $('.black').addClass('on');
          $('.popup img').eq(i).fadeIn();
          $('html, body').css({'overflow-y':'hidden'});

          if($('.popup').height() > $(window).height()){
              $('.popup').css({
                              'height':'80%',
                              'width':'60%'
                            })
              }

           cpt($('.popup'));

          return false;


      });

      $('.popup .close').click(function(){
          $('.popup').fadeOut();
          $('.black').removeClass('on');
          $('.popup img').fadeOut();
          $('html, body').css({'overflow-y':'visible'});
      })

      $('.black').click(function(){
          $(this).removeClass('on');
          $('.popup').fadeOut();
          $('.popup img').fadeOut();
          $('html, body').css({'overflow-y':'visible'});

      })


})
