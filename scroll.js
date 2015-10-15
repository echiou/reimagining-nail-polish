$(document).ready(function(){
    updateDots();

    $(".sect1").click(function(){
        $('html, body').animate({
            scrollTop: $(".grey1").offset().top
        }, 500);
    });

    $(".sect2").click(function(){
        $('html, body').animate({
            scrollTop: $(".turq").offset().top
        }, 500);
    });

    $(".sect3").click(function(){
        $('html, body').animate({
            scrollTop: $(".grey2").offset().top
        }, 500);
    });

    $(".sect4").click(function(){
        $('html, body').animate({
            scrollTop: $(".pink").offset().top
        }, 500);
    });

    $(document).scroll(function(){
        updateDots();
    });

    function updateDots() {
        if($(this).scrollTop() < 1059)
        {
            $(".sect2").removeClass("current");
            $(".sect3").removeClass("current");
            $(".sect4").removeClass("current");
            $(".sect1").addClass("current");
        }
        if($(this).scrollTop() > 1059 && $(this).scrollTop() < 2183)
        {
            $(".sect1").removeClass("current");
            $(".sect3").removeClass("current");
            $(".sect4").removeClass("current");
            $(".sect2").addClass("current");
        }
        if($(this).scrollTop() > 2183 && $(this).scrollTop() < 2641)
        {
            $(".sect1").removeClass("current");
            $(".sect2").removeClass("current");
            $(".sect4").removeClass("current");
            $(".sect3").addClass("current");
        }
        if($(this).scrollTop() > 2641 && $(this).scrollTop() < 3000 || $(window).scrollTop() + $(window).height() == $(document).height())
        {
            $(".sect1").removeClass("current");
            $(".sect2").removeClass("current");
            $(".sect3").removeClass("current");
            $(".sect4").addClass("current");
        }
    }
});
