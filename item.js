/*==================================================
共通部分読み込み
==================================================*/
$(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});
    
/*==================================================
お気に入りボタン
==================================================*/

// 初期値は0（お気に入り前）
var open = 0;

// お気に入りボタン押下時
$('.heart-icon').click(function() {

    if (open === 0) {
        // 登録時
        document.getElementById('heart-before').style.display = 'none'
        document.getElementById('heart-after').style.display = 'block'

        // 登録済に値を変更
        open += 1;
    } else {
        // 解除時
        document.getElementById('heart-before').style.display = 'block'
        document.getElementById('heart-after').style.display = 'none'

        // 解除済に値を変更
        open -= 1;
    }
});


/*==================================================
スライド
==================================================*/
$('.slider').slick({
    //自動スライド
    autoplay: false,
    //スライドのループ
    infinite: true,
    //スライドを画面に3枚表示
    slidesToShow: 1,
    //1回のスクロールで1枚の写真を移動して見せる
    slidesToScroll: 1,
    //矢印部分PreviewのHTMLを変更
    prevArrow: '<div class="slick-prev"></div>',
    //矢印部分NextのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',
    //要素を中央揃えする
    centerMode: true,
    //幅の違う画像の高さを揃えて表示
    variableWidth: true,
    responsive: [{
        //モニターの横幅が767px以下の見せ方
        breakpoint: 767,
        settings: {
            //下部ドットナビゲーションの表示
            dots: true,
        }
    }]
});

/*==================================================
スライド（お気に入り）
==================================================*/

// スライド設定
$('.slider_favorite').slick({
    //自動スライド
    autoplay: false,
    //スライドのループ
    infinite: false,
    //スライドを画面に3枚表示
    slidesToShow: 3,
    //1回のスクロールで3枚の写真を移動して見せる
    slidesToScroll: 3,
    //矢印部分PreviewのHTMLを変更
    prevArrow: '<div class="slick-prev-favorite"></div>',
    //矢印部分NextのHTMLを変更
    nextArrow: '<div class="slick-next-favorite"></div>',
    //下部ドットナビゲーションの表示
    dots: false,
});

if (window.matchMedia('(min-width: 768px)').matches) {
    // 画像リスト
    var pathList_favorite = [
        "item_0004.jpg",
        "item_0005.jpg",
        "item_0006.jpg",
        "item_0002.jpg",
        "item_0003.jpg",
    ];

    // 配列
    var img_favorite = new Array();
    for (var i = 0; i < pathList_favorite.length; i++) {
        var image_favorite = new Image();
        image_favorite.src = pathList_favorite[i];
        img_favorite.push(image_favorite);
    }

    document.getElementById("favorite_img_1").src = img_favorite[0].src;
    document.getElementById("favorite_img_2").src = img_favorite[1].src;
    document.getElementById("favorite_img_3").src = img_favorite[2].src;
    document.getElementById("favorite_img_4").src = img_favorite[3].src;
    document.getElementById("favorite_img_5").src = img_favorite[4].src;
}

/*==================================================
スライド（注文履歴）
==================================================*/

// スライド設定
$('.slider_history').slick({
    //自動スライド
    autoplay: false,
    //スライドのループ
    infinite: false,
    //スライドを画面に3枚表示
    slidesToShow: 3,
    //1回のスクロールで3枚の写真を移動して見せる
    slidesToScroll: 3,
    //矢印部分PreviewのHTMLを変更
    prevArrow: '<div class="slick-prev-history"></div>',
    //矢印部分NextのHTMLを変更
    nextArrow: '<div class="slick-next-history"></div>',
    //下部ドットナビゲーションの表示
    dots: false,
    //幅の違う画像の高さを揃えて表示
    // variableWidth: true,
});

if (window.matchMedia('(min-width: 768px)').matches) {
    // 画像リスト
    var pathList_history = [
        "item_0004.jpg",
    ];

    // 配列
    var img_history = new Array();
    for (var i = 0; i < pathList_history.length; i++) {
       var image_history = new Image();
       image_history.src = pathList_history[i];
      img_history.push(image_history);
    }

    document.getElementById("history_img_1").src = img_history[0].src;
}

/*==================================================
スライド（トレンド）
==================================================*/
$('.slider_trend').slick({
    //自動スライド
    autoplay: false,
    //スライドのループ
    infinite: false,
    //スライドを画面に3枚表示
    slidesToShow: 3,
    //1回のスクロールで3枚の写真を移動して見せる
    slidesToScroll: 3,
    //矢印部分PreviewのHTMLを変更
    prevArrow: '<div class="slick-prev-trend"></div>',
    //矢印部分NextのHTMLを変更
    nextArrow: '<div class="slick-next-trend"></div>',
    //下部ドットナビゲーションの表示
    dots: false,
    //幅の違う画像の高さを揃えて表示
    // variableWidth: true,
});

if (window.matchMedia('(min-width: 768px)').matches) {
    // 画像リスト
    var pathList_trend = [
       "item_0004.jpg",
       "item_0005.jpg",
       "item_0006.jpg",
       "item_0002.jpg",
       "item_0003.jpg",
    ];

    // 配列
    var img_trend = new Array();
    for (var i = 0; i < pathList_trend.length; i++) {
      var image_trend = new Image();
      image_trend.src = pathList_trend[i];
      img_trend.push(image_trend);
    }

    document.getElementById("trend_img_1").src = img_trend[0].src;
    document.getElementById("trend_img_2").src = img_trend[1].src;
    document.getElementById("trend_img_3").src = img_trend[2].src;
    document.getElementById("trend_img_4").src = img_trend[3].src;
    document.getElementById("trend_img_5").src = img_trend[4].src;
}

/*==================================================
スライド矢印押下時イベント（お気に入り、注文履歴、トレンド）
==================================================*/

// 押下カウント
var favorite_push = 1;
var history_push = 1;
var trend_push = 1;

// 配列表示カウント
var favorite_count = pathList_favorite.length;
var history_count = pathList_history.length;
var trend_count = pathList_trend.length;

// 矢印初期表示色変更
$(function() {
    // お気に入り
    if (favorite_count >= 4) {
        $('.slick-next-favorite').addClass('reveal');
    }

    // 注文履歴
    if (history_count >= 4) {
        $('.slick-next-history').addClass('reveal');
    }

    // トレンド
    if (trend_count >= 4) {
        // 色変更
        $('.slick-next-trend').addClass('reveal');
    }
});


// 矢印（prev）押下時

// お気に入り
$('.slick-prev-favorite').click(function() {

    // 押下カウントを-1する
    favorite_push -= 1;

    // 矢印（前へ）を非アクティブにする
    if (favorite_push === 1) {
        $('.slick-prev-favorite').removeClass('reveal');
    }

    // 矢印（次へ）をアクティブにする
    if ((favorite_count / (3 * favorite_push)) > 1) {
        $('.slick-next-favorite').addClass('reveal');
    }
});

// 注文履歴
$('.slick-prev-history').click(function() {

    // 押下カウントを-1する
    history_push -= 1;

    // 矢印（前へ）を非アクティブにする
    if (history_push === 1) {
        $('.slick-prev-history').removeClass('reveal');
    }

    // 矢印（次へ）をアクティブにする
    if ((history_count / (3 * history_push)) > 1) {
        $('.slick-next-history').addClass('reveal');
    }
});

// トレンド
$('.slick-prev-trend').click(function() {

    // 押下カウントを-1する
    trend_push -= 1;

    // 矢印（前へ）を非アクティブにする
    if (trend_push === 1) {
        $('.slick-prev-trend').removeClass('reveal');
    }

    // 矢印（次へ）をアクティブにする
    if ((trend_count / (3 * trend_push)) > 1) {
        $('.slick-next-trend').addClass('reveal');
    }
});


// 矢印（next）押下時

// お気に入り
$('.slick-next-favorite').click(function() {
    // 1回目の押下時は矢印（前へ）をアクティブにする
    if (favorite_push === 1) {
        $('.slick-prev-favorite').addClass('reveal');
    }

    // 押下カウントを＋1する
    favorite_push += 1;

    // 矢印（次へ）を非アクティブにする
    if ((favorite_count / (3 * favorite_push)) <= 1) {
        $('.slick-next-favorite').removeClass('reveal');
    }
});

// 注文履歴
$('.slick-next-history').click(function() {
    // 1回目の押下時は矢印（前へ）をアクティブにする
    if (history_push === 1) {
        $('.slick-prev-history').addClass('reveal');
    }

    // 押下カウントを＋1する
    history_push += 1;

    // 矢印（次へ）を非アクティブにする
    if ((history_count / (3 * history_push)) <= 1) {
        $('.slick-next-history').removeClass('reveal');
    }
});

// トレンド
$('.slick-next-trend').click(function() {
    // 1回目の押下時は矢印（前へ）をアクティブにする
    if (trend_push === 1) {
        $('.slick-prev-trend').addClass('reveal');
    }

    // 押下カウントを＋1する
    trend_push += 1;

    // 矢印（次へ）を非アクティブにする
    if ((trend_count / (3 * trend_push)) <= 1) {
        $('.slick-next-trend').removeClass('reveal');
    }
});
