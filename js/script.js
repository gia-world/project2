$(document).ready(function () {

  // -- HEADER start --
  // CSSMap;
  $("#map-continents").CSSMap({
    "size": 430,
    "tooltips": "floating-top-center"
  });
  // END OF THE CSSMap;

  //pc menu
  var widthW = $(window).width();
  $("nav").hover(function () {
    if (widthW > 767) {
      $(".menuWrap").css("display", "block");
    } else {
      //hambtn
      $(".hamBtn").click(function () {
        $(".menuWrap").css("display", "block");
        $(".search").addClass("mSearch");
        $(".closeBtn").css("display", "block");
        $(".mMenuBg").css({
          display: "block",
          width: $("body").width(),
          height: $("body").height()
        });
      })
    }
  }, function () {
    if (widthW > 767) {
      $(".menuWrap").css("display", "none");
    }
  })


  // --- mobile ---
  //closeBtn
  $(".closeBtn").click(function () {
    $(".menuWrap").css("display", "none");
    $(".search").removeClass("mSearch");
    $(this).css("display", "none");
    $(".mMenuBg").css("display", "none")
  })

  //searchBtn
  $(".search").click(function () {
    if (widthW > 767) {
      $(this).children("input").fadeToggle(500);
    }
    else {
      $(".hamBtn").trigger("click");
    }
  })

  //submenu
  $("#nav>li>a").click(function () {
    if ($(this).parent("li").hasClass("active")) {
      $(this).parent("li").removeClass("active");
      $(this).next(".sub").css("display", "none");
    } else {
      $(this).parent("li").addClass("active");
      $(this).next(".sub").css("display", "block");
    }
    $(this).parent("li").siblings("li").removeClass("active").children(".sub").css("display", "none");
  })
  // })


  // -- CONTAINER start --
  // slides

  function moveBanner(target, sNum, liWidth) {
    var bnrArr = [];
    bnrArr.push($(".bannerUl"));
    //console.log(target,bnrArr[1]);
    // console.log(target===bnrArr[1][0]);
    // console.log($(target)===bnrArr[1][0]);
    // console.log($(target).get(0)===bnrArr[1][0]); //true

    $(target).stop().animate({
      "left": -sNum * liWidth
    }, 500)

    if (target.get(0) === bnrArr[0][0]) {
      console.log("mainBanner");
      $(target).children("li").css("transition", "0.5s").eq(sNum + 1).addClass("active").siblings().removeClass("active");

    } else if (target.get(0) === bnrArr[0][1]) {
      console.log("mainTv");
      $(target).prev().children("li").eq(sNum).addClass("active").siblings().removeClass("active");

      $(target).children("li").css("transition", "0.5s").eq(sNum + 1).addClass("active").siblings().removeClass("active");
    }
    else {
      console.log("thumb");
    }
  }

  $(".bannerWrap").each(function (i) {
    var showBanner = 0;
    var $bnr = $(this).find(".bannerUl");
    var preCount = $bnr.children("li").length;
    var lastObj = $(this).find(".bannerUl>li:last").clone();
    if (i < 2) {
      var frontObj = $(this).find(".bannerUl>li:lt(2)").clone();
    } else {
      var frontObj = $(this).find(".bannerUl>li").clone();
    }

    $bnr.prepend(lastObj);
    $bnr.append(frontObj);
    var count = $bnr.children("li").length;

    if (i < 2) {
      $bnr.outerWidth(count * 100 + "%");
      $bnr.children("li").outerWidth(100 / count + "%");
    }

    else {
        $bnr.outerWidth(count / 6 * 100 + "%");
        $bnr.children("li").outerWidth(100 / count + "%");
    }

    // 배너 버튼 동작
    $(this).find(".prevBtn").click(function (e) {
      var liWidth = $(this).parent().prev().children("li").outerWidth();
      e.preventDefault();
      if (showBanner === 0) {
        showBanner = preCount;
        $(this).parent("ul").prev().css("left", -showBanner * liWidth);
      }
      showBanner--;
      moveBanner($(this).parent("ul").prev(), showBanner, liWidth);
    })

    $(this).find(".nextBtn").click(function (e) {
      var liWidth = $(this).parent().prev().children("li").outerWidth();
      e.preventDefault();
      if (showBanner === preCount) {
        showBanner = 0;
        $(this).parent("ul").prev().css("left", 0);
      }
      showBanner++;
      moveBanner($(this).parent("ul").prev(), showBanner, liWidth);
    })

  })


  $(window).resize(function () {
    widthW = $(window).width();

    //menu reset
    $(".menuWrap").css("display", "none");
    $(".search").removeClass("mSearch");
    $(".closeBtn").css("display", "none");
    $(".mMenuBg").css("display", "none");

    //bnr reset
    showBanner = 0;
    $(".bannerUl").css("left", 0);
    var countThumb=$(".thumb>li").length ;
    if(widthW>767){
      $(".thumb").outerWidth(countThumb/ 6 * 100 + "%");
      $(".thumb>li").outerWidth(100/countThumb + "%");
    }
    else{
    $(".thumb").outerWidth(countThumb / 4 * 100 + "%");
        $(".thumb>li").outerWidth("25vw");
    }
  })


})

