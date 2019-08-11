$(function(){
  $('.menuBtn').on('click',function(){
    // メニューに入るテキストを宣言
    let text;
    
    // onのクラスを持っている時
    if(!$(this).hasClass('on')){
      text = 'close';
      // メニューをスライドダウン
      $('.menu').slideDown();
      
    // onのクラスを持っていない時
    // 初期状態に戻す
    } else {
      text = 'menu';
      // メニューをスライドアップして隠す
      $('.menu').slideUp();
    }
    
    // ボタンにクラスonを付与
    $(this).toggleClass('on').text(text);
  });
});