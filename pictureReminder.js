$(function () {
        $("li>img").mouseover(function (e) {
        var bigger = "<div id='Bigger'><img src='"+ this.src+"'/></div>";
        var TEXT = "<div id='TEXT'>"+this.alt+"</div>"
        $("body").append(bigger);
        $("body").append(TEXT);
        $("#Bigger")
            .css({
                "position":"absolute",
                "top":e.pageY+"px",
                "left":e.pageX+"px"
            })
        $("#TEXT")
            .css({
                "position":"absolute",
                "top":(e.pageY+128)+"px",
                "left":e.pageX+"px",
                "background":"black",
                "color":"white",
                "width":"128px"
            })

            $("li>img").mouseout(function () {
                $("#Bigger").remove();
                $("#TEXT").remove();
            })
            $("li>img").mousemove(function (e) {
                $("#Bigger")
                    .css({
                        "position": "absolute",
                        "top": e.pageY + "px",      //如果写"e.pageY"+"px"就会输出"e.pageYpx"
                        "left": e.pageX + "px"
                    })
                $("#TEXT")
                    .css({
                        "position": "absolute",
                        "top": (e.pageY+128) + "px",
                        "left": e.pageX + "px",
                        "width":"128px"
                    })
            })
    })
})