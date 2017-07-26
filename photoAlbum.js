$(function () {
    $("#gardening").mouseover(function () {
        $("#gardening").css({
            background: "rgb(229,116,55)"
        })
        $("#italic").css({
            background:"rgb(214,238,246)"
        })
    })
    $("#gardening").mouseout(function () {
        $("#italic").css({
            background:"rgb(56,182,230)"
        })
        $("#gardening").css({
            background:"rgb(214,238,246)"
        })
    })
    $("#gardening").click(function () {
        $(".gardening").css({
            display:'block'
        })
        $(".italic").css({
            display:"none"
        })
    })
    $("#italic").click(function () {
        $(".gardening").css({
            display:'none'
        })
        $(".italic").css({
            display:"block"
        })
    })
})