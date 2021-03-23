$(document).ready(function(){

$('.parallax-window').parallax({
    imageSrc: 'images/brand.jpg',
        naturalWidth: 1440,
        naturalHeight: 900,
    });

    $(".item>li, .intImg>img").hover(function () {
        $(this).css({
            "position": "relative",
            "border": "none",
            "box-shadow": "0 0 10px 2px #999"
        }).stop().animate({
            "top": "-5px"
        }, 100);
    }, function () {
        $(this).css({
            "position":"static",
            "border": "1px solid rgb(221, 221, 221)",
            "box-shadow": "none"
        })

    })
})
