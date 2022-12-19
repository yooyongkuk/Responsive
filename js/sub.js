
     $(function(){
        $(".a").click(function(){
            $(".b").slideToggle();
     });
    });

    $(window).resize(function(){
        if(window.innerWidth>=768){
            $('.b').show();
            }
        else{
            $('.b').hide();
            }
        });

    // $('.prev').click(function(){
    //     $('.slide li:last').prependTo('.slide');
    //     $('.slide').css('margin-left',-1140);
    //     $('.slide').stop().animate({marginLeft:0},800);
    //     });

    // $('.next').click(function(){
    //     $('.slide').stop().animate({marginLeft:-1140},800, function(){
    //     $('.slide li:first').appendTo('.slide');
    //     $('.slide').css({marginLeft:0});
    //     });
    //     });
$(document).ready(function () {
    function prev() {
        $('.slide li:last').prependTo('.slide');
        $('.slide').css('margin-left', '-100%');
        $('.slide').stop().animate({ marginLeft: 0 }, 800);
    }

    function next() {
        $('.slide').stop().animate({ marginLeft: '-100%' }, 800, function () {
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({ marginLeft: 0 });
        });
    }

    setInterval(next, 3000);

    $('.prev').click(function () {
        prev();
    });
    $('.next').click(function () {
        next();
    });
});

    
        