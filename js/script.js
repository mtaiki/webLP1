$(document).ready(function() {

    // ハンバーガーメーニュー
    $("#js-header-btn").click(function() {
        $(this).toggleClass("active");
        $("#js-header-nav").toggleClass("active");
    });

});