$(function(){
  $('.menuBtn').on('click',function(){
    // メニューに入るテキストを宣言
    let text;
    // onのクラスを持っている時
    if($(this).hasClass('on')){
      text = 'menu';
      // メニューをスライドダウン
      $('#menu').slideUp();
      
    // onのクラスを持っていない時
    // 初期状態に戻す
    } 
    else {
      text = 'close';
      // メニューをスライドアップして隠す
      $('#menu').slideDown();
    }
    
    // ボタンにクラスonを付与
    $(this).toggleClass('on').text(text);
  });

  console.log($('body,html').scrollTop());
  $('.js-scroll').on('click',function(){
    $('body,html').animate({scrollTop: 0 }, 500); 
    console.log($(this).offset().top);
    return false;
  });

  let swiper = new Swiper ('.swiper-container',{
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el:'.swiper-pagination',
      clickable:true,
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

});

