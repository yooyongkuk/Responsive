
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

    //코다마 토글-->

    $(document).ready(function(){
        $(".kodamaslide").click(function(){
            $(".kodama").toggle(2000);
        });
    });

    $(document).ready(function(){
        $(".kodama").click(function(){
        var kodama = $(".kodama");
            kodama.animate({height:"100%",opacity:"0.4"},"slow");
            kodama.animate({width:"100%",opacity:"0.8"},"slow");
            kodama.animate({height:"70%",opacity:"1"},2000);    
            kodama.animate({width:"70%",opacity:"1"},2000);      
        });     
         });
        
         //슬라이드-->
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

    //배너토글-->
    $(document).ready(function(){
        $(".togle").click(function(){
            $("#banner1 > p").slideToggle("slow");
        });

    });

    //버튼조작
    $(document).ready(function(){
       $(".hitosyasin").click(function(){
        var kao = $(".hitosyasin");
            kao.animate({height:"50px",opacity:"0.4"},"slow");
            kao.animate({width:"50px",opacity:"0.8"},"slow");
            kao.animate({height:"40px",opacity:"0.4"},"slow");
            kao.animate({width:"40px",opacity:"1"},"slow");
       });
        });

        $(document).ready(function(){
        $(".hitokao").click(function(){
        var kao = $(".hitosyasin");
            kao.animate({height:"50px",opacity:"0.4"},"slow");
            kao.animate({width:"50px",opacity:"0.8"},"slow");
            kao.animate({height:"40px",opacity:"0.4"},"slow");
            kao.animate({width:"40px",opacity:"1"},"slow");
         });
        });
    
      $(document).ready(function(){
        $("#jomonsugi p:last").click(function(){
            var kao = $(".hitosyasin");
            kao.animate({height:"50px",opacity:"0.4"},"slow");
            kao.animate({width:"50px",opacity:"0.8"},"slow");
            kao.animate({height:"40px",opacity:"0.4"},"slow");
            kao.animate({width:"40px",opacity:"1"},"slow");   
        });
      });