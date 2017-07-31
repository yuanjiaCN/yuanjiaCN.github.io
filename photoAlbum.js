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

    $("#album>article").append(
        "<img date='eleventh' value='gardening' src='picture/gardening7(little).jpg' original='picture/original/gardening7.jpg'/>"+
        "<img date='eighth' value='italic' src='picture/italic6(little).jpg' original='picture/original/italic6.jpg' />"+
        "<img date='tenth' value='gardening' src='picture/gardening6(little).jpg' original='picture/original/gardening6.jpg'/>"+
        "<img date='seventh' value='italic' src='picture/italic5(little).jpg' original='picture/original/italic5.jpg' />"+
        "<img date='ninth' value='gardening' src='picture/gardening5(little).jpg' original='picture/original/gardening5.jpg'/>"+
        "<img date='sixth' value='italic' src='picture/italic4(little).jpg' original='picture/original/italic4.jpg' />"+
        "<img date='eighth' value='gardening' src='picture/gardening4(little).jpg' original='picture/original/gardening4.jpg'/>"+
        "<img date='fifth' value='italic' src='picture/italic3(little).jpg' original='picture/original/italic3.jpg' />"+
        "<img date='seventh' value='gardening' src='picture/gardening3(little).jpg' original='picture/original/gardening3.jpg'/>"+
        "<img date='forth' value='italic' src='picture/italic2(little).jpg' original='picture/original/italic2.jpg' />"+
        "<img date='sixth' value='gardening' src='picture/gardening2(little).jpg' original='picture/original/gardening2.jpg'/>"+
        "<img date='third' value='italic' src='picture/italic(little).jpg' original='picture/original/italic.jpg' />"+
        "<img date='fifth' value='gardening' src='picture/gardening1(little).jpg' original='picture/original/gardening1.jpg'/>"
    );
        $("#album>article img").wrap("<div><figure></figure></div></div>");
        $("#album>article>div").append("<div class='top'><div><p class='title'></p></div></div>");
        $("#album>article>div").append("<div class='bottom'><div><p class='introduction'>on the <b></b> day of <span></span></p></div></div>");
        var $doing =$("#album>article span");
        var $date =$("#album>article b");
        var $T =$("#album>article .top p");
        var $IMG = $("#album>article img");
        for(var i=0;i<$T.length;i++) {
            $T[i].innerText = $IMG[i].getAttribute("value");
            $doing[i].innerText = $IMG[i].getAttribute("value");
            $date[i].innerText = $IMG[i].getAttribute("date");
        }

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
    var $album = $("#album>nav>header");
    $album.click(function () {
        $("#album>article>div").css({
            display: "block"
        })
        $LI.children("a").css({
            color:"black"
        })
    })
})