$(function () {
    $(".first").height($(window).height());//获取视口高度给背景图片，这个元素不可以有margin或者padding的top或者bottom属性
    //如果有了的话，视口高度会加上padding&margin的值，如果值为正，则背景图片会超过视口高度，继续往下延伸。
    //其子元素有padding&margin值则不影响
    $(".sign").offset({top: 0.92 * $(window).height()});//直接设置$(window).height()，则这个元素出现在视口底部的后一行
    // 修改为display:inline也不行，只能出此下策

})
