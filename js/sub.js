
    //네비게이션
    $(function(){
        $(".a").click(function(){
            $(".b ul").slideToggle();
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

    //슬라이더
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

    //브로그슬라이드
    $(document).ready(function() {
        var totalNum = $(".vis > div").length 
        var currentNum = 1;
        $(".page_n > span:first").text(currentNum);
        $(".page_n > span:last").text(totalNum);
        $(".next_b").click(function() {
            currentNum++;
            if (currentNum > totalNum) {
                currentNum = 1;
            }
            $(".vis div:first").insertAfter(".vis div:last");
            $(".page_n > span:first").text(currentNum);
        });
        $(".prev_b").click(function() {
            currentNum--;
            if (currentNum < 1) {
                currentNum = totalNum;
            }
            $(".vis div:last").insertBefore(".vis div:first");
            $(".page_n > span:first").text(currentNum);
        });
    });

    

    
        