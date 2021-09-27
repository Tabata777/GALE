/*==================================================
メニューエリア＆検索エリア
==================================================*/

    var $body = $('body');
    var $btn = $('.menu_btn');
    var $btn2 = $('#form-text');
    var $btn3 = $('.close_btn');
    var $mask = $('#mask');

    // メニューボタン押下時
    $btn.on('click', function() {
        if (!$body.hasClass('open')) {
            $body.addClass('open');
        } else {
            $body.removeClass('open');
        }
    });

    // 検索フォーム押下時
    $btn2.on('click', function() {
        $body.addClass('open2');
        $('#search-text').focus();
    });

    // クローズボタン押下時
    $btn3.on('click', function() {
        $body.removeClass('open2');
    });

    // 黒背景部分押下時
    $mask.on('click', function() {
        $body.removeClass('open');
    });

/*==================================================
GALEアイコン
==================================================*/

// GALEアイコン押下時
$(".gale-icon").click(function() {
    window.location.href = 'top.html';
});

/*==================================================
カートアイコン
==================================================*/

// カートアイコン押下時
$(".cart-icon").click(function() {
    window.location.href = 'cart.html';
});
