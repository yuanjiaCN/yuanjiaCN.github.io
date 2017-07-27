$(function () {
    $(".ita #gardening").mouseover(function () {
        $("#gardening").css({
            background: "rgb(229,116,55)"
        })
        $("#italic").css({
            background: "rgb(214,238,246)"
        })
    })
    $(".ita #gardening").mouseout(function () {
        $("#italic").css({
            background: "rgb(56,182,230)"
        })
        $("#gardening").css({
            background: "rgb(214,238,246)"
        })
    })


    $(".gar #italic").mouseover(function () {
        $("#gardening").css({
            background: "rgb(214,238,246)"
        })
        $("#italic").css({
            background: "rgb(56,182,230)"
        })
    })
    $(".gar #italic").mouseout(function () {
        $("#gardening").css({
            background: "rgb(229,116,55)"
        })
        $("#italic").css({
            background: "rgb(214,238,246)"
        })
    })

    $("#album>article>div img").click(function (e) {
        var $original = $(this).attr("original");
        $("#show img").attr("src", $original);
        $("#show").css({
            width: "100%",
            height: "100%",
            background:"rgba(10,10,10,0.3)"
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

    })
