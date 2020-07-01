// index.js


// 햄버거 스크립트
$(document).ready(function () {
  $(".nav-icon").click(function () {
    $(this).toggleClass("is-active");
  });
});

$('.depth1').hover(
  function () {
    $('.nav_bg').css('display', 'block');
  },
  function () {
    $('.nav_bg').css('display', 'none');
  }
)

// 메인메뉴
$(function () {
  // 2단계 메뉴 닫힘
  $('#main_header .depth2').hide();

  // hover
  $('#main_header .depth1 > li').hover(
    // MOUSEOVER
    function () {
      $(this)
        .children('.depth2')
        .stop().fadeIn(100);
    },
    // MOUSEOUT
    function () {
      $('#main_header .depth2')
        .stop()
        .fadeOut(100);
    }
  );
})

// 좋아요 카운트
$(function () {
  var count = 1;

  // on() / this는 부모를 뜻함
  $('.like').on('click', function () {
      $(this).html(count);
      count++
  });

});

$(function () {
  // 슬라이더
  var img_num1 = 0;
  var img_num2 = 0;
  var img_height = 100; // 높이
  var duration = 3000;

  setInterval(function () {
    if (img_num1 >= 3) { img_num1 = 0; }
    $('.sliders').css({
      top: -(img_height * img_num1) + '%'
    });
    img_num1++;
  }, duration);

  setInterval(function () {
    if (img_num2 >= 3) { img_num2 = 0; }
    $('.sliders-2').css({
      left: -(img_height * img_num2) + '%'
    });
    img_num2++;
  }, duration);


}) // end $()

// 메인메뉴
$(function () {
  // 2단계 메뉴 닫힘
  $('#main_header .depth2').hide();

  // hover
  $('#main_header .depth1 > li').hover(
    // MOUSEOVER
    function () {
      $(this)
        .children('.depth2')
        .stop().fadeIn(100);
    },
    // MOUSEOUT
    function () {
      $('#main_header .depth2')
        .stop()
        .fadeOut(100);
    }
  );
})