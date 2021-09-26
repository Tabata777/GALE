/*==================================================
メニューエリア＆検索エリア
==================================================*/
(function($) {
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
})(jQuery);

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

/*==================================================
ヘッダー透過（スクロール時）
==================================================*/
var _window = $(window),
    _header = $('header'),
    _search_text = $("#form-text"),
    _search_button = $("#form-button"),
    heroBottom,
    startPos,
    winScrollTop;

_window.on('scroll', function() {
    winScrollTop = $(this).scrollTop();
    heroBottom = document.documentElement.clientHeight;
    if (winScrollTop >= heroBottom) {
        _header.addClass('reveal');
        _search_text.addClass('reveal');
        _search_button.addClass('reveal');
    } else {
        _header.removeClass('reveal');
        _search_text.removeClass('reveal');
        _search_button.removeClass('reveal');
    }
    startPos = winScrollTop;
});

_window.trigger('scroll');
