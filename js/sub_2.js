
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

    $(document).ready(function () {
        $('#jomonsugi .prev').click(function(){
        $('#jomonsugi .slide li:last').prependTo('#jomonsugi .slide');
        $('#jomonsugi .slide').css('margin-left','-100%');
        $('#jomonsugi .slide').stop().animate({marginLeft:0},800);
        });

    $('#jomonsugi .next').click(function(){
        $('#jomonsugi .slide').stop().animate({marginLeft:'-100%'},800, function(){
        $('#jomonsugi .slide li:first').appendTo('#jomonsugi .slide');
        $('#jomonsugi .slide').css({marginLeft:0});
        });
        });
    });

    $(document).ready(function () {
        $('#willson .prev').click(function(){
        $('#willson .slide li:last').prependTo('#willson .slide');
        $('#willson .slide').css('margin-left','-100%');
        $('#willson .slide').stop().animate({marginLeft:0},800);
        });

    $('#willson .next').click(function(){
        $('#willson .slide').stop().animate({marginLeft:'-100%'},800, function(){
        $('#willson .slide li:first').appendTo('#willson .slide');
        $('#willson .slide').css({marginLeft:0});
        });
        });
    });

    $(document).ready(function () {
        $('#huhusugi .prev').click(function(){
        $('#huhusugi .slide li:last').prependTo('#huhusugi .slide');
        $('#huhusugi .slide').css('margin-left','-100%');
        $('#huhusugi .slide').stop().animate({marginLeft:0},800);
        });

    $('#huhusugi .next').click(function(){
        $('#huhusugi .slide').stop().animate({marginLeft:'-100%'},800, function(){
        $('#huhusugi .slide li:first').appendTo('#huhusugi .slide');
        $('#huhusugi .slide').css({marginLeft:0});
        });
        });
    });

    $(document).ready(function () {
        $('#siratani .prev').click(function(){
        $('#siratani .slide li:last').prependTo('#siratani .slide');
        $('#siratani .slide').css('margin-left','-100%');
        $('#siratani .slide').stop().animate({marginLeft:0},800);
        });

    $('#siratani .next').click(function(){
        $('#siratani .slide').stop().animate({marginLeft:'-100%'},800, function(){
        $('#siratani .slide li:first').appendTo('#siratani .slide');
        $('#siratani .slide').css({marginLeft:0});
        });
        });
    });

//     $(document).ready(function () {
//     function prev() {
//         $('.slide li:last').prependTo('.slide');
//         $('.slide').css('margin-left', '-100%');
//         $('.slide').stop().animate({ marginLeft: 0 }, 800);
//     }

//     function next() {
//         $('.slide').stop().animate({ marginLeft: '-100%' }, 800, function () {
//             $('.slide li:first').appendTo('.slide');
//             $('.slide').css({ marginLeft: 0 });
//         });
//     }

//     setInterval(next, 3000);

//     $('.prev').click(function () {
//         prev();
//     });
//     $('.next').click(function () {
//         next();
//     });
// });

    
        