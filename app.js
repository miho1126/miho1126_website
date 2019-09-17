$(function () {

  // メニューバーこんにちわ

  // 縦並び
  let navv = $('.nav1');
  $('li', navv).mouseover(function (e) {
    $('ul', this).stop().slideDown('fast');
  })
    .mouseout(function (e) {
      $('ul', this).stop().slideUp('fast');
    });

  let side = $('#aside');
  side.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      side.fadeIn();
    } else if ($(this).scrollTop() < 100) {
      side.fadeOut()
    }
  });


  // トップへ戻るがふわっと出現
  let topBtn = $('#page-top');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  // ----swiper------
  let swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // effect: 'cube',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  // ----ふわっと左から出現
  $('.slide').addClass('move');
  $(window).scroll(function () {
    $(".slide1").each(function () {
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5) {
        $(this).find(".slider").removeClass('move');
      } else {
        $(this).find(".slider").addClass('move');
      }
    });
  });





});

$(function () {

});


// $('.menuBtn').on('click',function(){
//   // メニューに入るテキストを宣言
//   let text;
//   // onのクラスを持っている時
//   if($(this).hasClass('on')){
//     text = 'menu';
//     // メニューをスライドダウン
//     $('#menu').slideUp();

//   // onのクラスを持っていない時
//   // 初期状態に戻す
//   }
//   else {
//     text = 'close';
//     // メニューをスライドアップして隠す
//     $('#menu').slideDown();
//   }

//   // ボタンにクラスonを付与
//   $(this).toggleClass('on').text(text);
// });

// console.log($('body,html').scrollTop());
// $('.js-scroll').on('click',function(){
//   $('body,html').animate({scrollTop: 0 }, 500);
//   console.log($(this).offset().top);
//   return false;
// });

// // 画像のフェードイン・フェードアウト
// $('#wrapper .movie').hide();
// $('#wrapper .map').each(function(i){
//   if($(this).delay(500 * i).fadeIn(1000)){
//   }

// });
// $(this).delay(500 * i).fadeIn(1000)


// // これ使う！！！！！　消える！出現！　一回決して置かないと表示されないからこれは2つで１セット。
// // 出現
// $('#js-show-btn').on('click',function(){
//   //  ミリビョウ
//   // alideUpも可能
//   // slideDownも可能
//    $('#js-target-element').fadeIn(2000)
//  });
// // 消える
//   $('#js-hide-btn').on('click',function(){
//    //  ミリビョウ
//    // alideUpも可能
//     $('#js-target-element').fadeOut(2000)
//   });
