$(function () {
    $("#gardening").mouseover(function () {
        $("#gardening").css({
            background: "rgb(229,116,55)"
        })
    })
    $("#gardening").mouseout(function () {
        $("#gardening").css({
            background: "rgb(214,238,246)"
        })
    })
    $("#gardening").click(function () {
        $("#gardening").css({
           color:"rgb(229,116,55)"
        })
        $("#italic").css({
           color: "black"
        })
    })
    $("#italic").mouseover(function () {
        $("#italic").css({
            background: "rgb(56,182,230)"
        })
    })
    $("#italic").mouseout(function () {
        $("#italic").css({
            background: "rgb(214,238,246)"
        })
    })
    $("#italic").click(function () {
        $("#italic").css({
            color:"rgb(56,182,230)"
        })
        $("#gardening").css({
            color: "black"
        })
    })
//点开看大图
    $("#album>article>div img").click(function (e) {
        var $original = $(this).attr("original");
        $("#show img").attr("src", $original);
        $("#show").css({
            width: "100%",
            height: "100%",
            background: "rgba(10,10,10,0.3)"
        })
        $("#show>div>img").css({
            display: "block",
        })
    })
    $("#show").click(function () {
        $("#show").css({
            width: "0",
            height: "0"
        })
        $("#show>div>img").css({
            display: "none",
        })
    })
//切换图片集
    var $titlePara = $("#album>article>div .title");
    var $LI = $("#album>nav li");
    $LI.click(function () {
        var $HREF = $(this).children("a").attr("id");
        for (var i = 0; i < $titlePara.length; i++) {
            var $title = $($titlePara[i]);
            if ($title.text() !== $HREF) {
                $title.parent().parent().parent().css({
                    display: "none"
                })
            } else {
                $title.parent().parent().parent().css({
                    display: "block"
                })
            }
        }
    })
})