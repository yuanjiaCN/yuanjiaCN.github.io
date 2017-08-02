$(function () {
    $("#book").mouseover(function () {
        $("#book").css({
            background: "rgb(229,116,55)"
        })
    })
    $("#book").mouseout(function () {
        $("#book").css({
            background: "rgb(221,221,221)"
        })
    })
    $("#book").click(function () {
        $("#book").css({
            color: "rgb(229,116,55)"
        })
        $("#blog").css({
            color: "black"
        })
    })
    $("#blog").mouseover(function () {
        $("#blog").css({
            background: "rgb(56,182,230)"
        })
    })
    $("#blog").mouseout(function () {
        $("#blog").css({
            background: "rgb(221,221,221)"
        })
    })
    $("#blog").click(function () {
        $("#blog").css({
            color: "rgb(56,182,230)"
        })
        $("#book").css({
            color: "black"
        })
    })
    $("#navigation>article>section.right").append(
       $all    //在另一个JS文档中的所有的链接
    );
    $("#navigation>article>section.right a").wrap("<div><div class='left'><h1></h1></div></div>");//把超链接包裹起来
    $("#navigation>article>section.right>div").append("<div class='right'><img src='picture/head.jpg'/></div>");

    //把A中包含时间的value值传递给p
    $("#navigation>article h1").before("<p></p>");
    var $P =$("#navigation>article p");
    var $A = $("#navigation>article>section.right a");
        for(var i=0;i<$P.length;i++){
           $P[i].innerText = $A[i].getAttribute("value");
        }
    //分类导航
    var $LI = $("#navigation>nav li");
    $LI.click(function () {
        var $liId = $(this).children("a").attr("id");
        for (var i = 0; i < $A.length; i++) {
            var $Ai = $($A[i]);
            if ($Ai.attr("class") !== $liId) {
                $Ai.parent().parent().parent().css({
                    display: "none"
                })
            } else {
                $Ai.parent().parent().parent().css({
                    display: "block"
                })
            }
        }
    })
    var $allNav = $("#navigation>nav>header");
    $allNav.click(function () {
        $A.parent().parent().parent().css({
            display: "block"
        })
        $LI.children("a").css({
            color:"black"
        })
    })

})