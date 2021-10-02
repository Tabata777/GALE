/*==================================================
共通部分読み込み
==================================================*/
$(function() {
    $("#header").load("header-top.html");
    $("#footer").load("footer.html");
});

/*==================================================
メインビジュアル_スライドショー
==================================================*/
$('.slider').slick({
    //自動的に動き出すか。初期値はfalse
    autoplay: true,
    //スライドをループさせるかどうか。初期値はtrue
    infinite: true,
    //スライドを画面に3枚見せる
    slidesToShow: 1,
    //1回のスクロールで3枚の写真を移動して見せる
    slidesToScroll: 1,
    //矢印部分PreviewのHTMLを変更
    prevArrow: '<div class="slick-prev"></div>',
    //矢印部分NextのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',
    //下部ドットナビゲーションの表示
    dots: true,
});

/*==================================================
最近チェックした商品（矢印、フリック操作）
==================================================*/
$('.check-pic').slick({
    //自動的に動き出すか。初期値はfalse
    autoplay: false,
    //スライドをループさせるかどうか。初期値はtrue
    infinite: true,
    //スライドを画面に3枚見せる
    slidesToShow: 1,
    //1回のスクロールで3枚の写真を移動して見せる
    slidesToScroll: 1,
    //矢印部分PreviewのHTMLを変更
    prevArrow: '<div class="slick-prev"></div>',
    //矢印部分NextのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',
    //下部ドットナビゲーションの表示
    dots: true,
    responsive: [{
            //モニターの横幅が767px以下の見せ方
            breakpoint: 767,
            settings: {
                //スライドを画面に1枚見せる
                slidesToShow: 1,
                //1回のスクロールで1枚の写真を移動して見せる
                slidesToScroll: 1,
            }
        },
    ]
});
