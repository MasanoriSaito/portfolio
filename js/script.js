$(function () {
    'use strict';
    // ナビゲーションクリック
    $('a[href^="#"]:not([href="#"])').click(function(){
        // 移動さきのコンテンツの位置を取得
        var target = $($(this).attr('href')).offset().top;

        // コンテンツスクロール
        $("html, body").animate({scrollTop: target}, 500);

        return false;
    });

    // $('a[href^="#"]').click(function () {
    //     var speed = 500;
    //     var href = $(this).attr("href");
    //     var target = $(href == "#" || href == "" ? 'html' : href);
    //     var position = target.offset().top;
    //     $("html, body").animate({ scrollTop: position }, speed, "swing");
    //     return false;
    // });
});