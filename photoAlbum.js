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
        "<img date='twentySixth' value='italic' src='picture/italic24(little).jpg' original='picture/original/italic24.jpg' />"+
        "<img date='thirtyNinth' value='gardening' src='picture/gardening26(little).jpg' original='picture/original/gardening26.jpg'/>"+
        "<img date='twentyFifth' value='italic' src='picture/italic23(little).jpg' original='picture/original/italic23.jpg' />"+
        "<img date='thirtyEighth' value='gardening' src='picture/gardening25(little).jpg' original='picture/original/gardening25.jpg'/>"+
        "<img date='twentyFourth' value='italic' src='picture/italic22(little).jpg' original='picture/original/italic22.jpg' />"+
        "<img date='thirtyFifth' value='gardening' src='picture/gardening24(little).jpg' original='picture/original/gardening24.jpg'/>"+
        "<img date='twentyThird' value='italic' src='picture/italic21(little).jpg' original='picture/original/italic21.jpg' />"+
        "<img date='thirtyFirst' value='gardening' src='picture/gardening23(little).jpg' original='picture/original/gardening23.jpg'/>"+
        "<img date='thirtieth' value='gardening' src='picture/gardening22(little).jpg' original='picture/original/gardening22.jpg'/>"+
        "<img date='twentyfifth' value='gardening' src='picture/gardening21(little).jpg' original='picture/original/gardening21.jpg'/>"+
        "<img date='twentySecond' value='italic' src='picture/italic20(little).jpg' original='picture/original/italic20.jpg' />"+
        "<img date='twentyFourth' value='gardening' src='picture/gardening20(little).jpg' original='picture/original/gardening20.jpg'/>"+
        "<img date='twentyFirst' value='italic' src='picture/italic19(little).jpg' original='picture/original/italic19.jpg' />"+
        "<img date='twentyThird' value='gardening' src='picture/gardening19(little).jpg' original='picture/original/gardening19.jpg'/>"+
        "<img date='twentieth' value='italic' src='picture/italic18(little).jpg' original='picture/original/italic18.jpg' />"+
        "<img date='twentySecond' value='gardening' src='picture/gardening18(little).jpg' original='picture/original/gardening18.jpg'/>"+
        "<img date='nineteenth' value='italic' src='picture/italic17(little).jpg' original='picture/original/italic17.jpg' />"+
        "<img date='twentyFirst' value='gardening' src='picture/gardening17(little).jpg' original='picture/original/gardening17.jpg'/>"+
        "<img date='eighteenth' value='italic' src='picture/italic16(little).jpg' original='picture/original/italic16.jpg' />"+
        "<img date='twentieth' value='gardening' src='picture/gardening16(little).jpg' original='picture/original/gardening16.jpg'/>"+
        "<img date='seventeenth' value='italic' src='picture/italic15(little).jpg' original='picture/original/italic15.jpg' />"+
        "<img date='nineteenth' value='gardening' src='picture/gardening15(little).jpg' original='picture/original/gardening15.jpg'/>"+
        "<img date='sixteenth' value='italic' src='picture/italic14(little).jpg' original='picture/original/italic14.jpg' />"+
        "<img date='eighteenth' value='gardening' src='picture/gardening14(little).jpg' original='picture/original/gardening14.jpg'/>"+
        "<img date='fifteenth' value='italic' src='picture/italic13(little).jpg' original='picture/original/italic13.jpg' />"+
        "<img date='seventeenth' value='gardening' src='picture/gardening13(little).jpg' original='picture/original/gardening13.jpg'/>"+
        "<img date='fourteenth' value='italic' src='picture/italic12(little).jpg' original='picture/original/italic12.jpg' />"+
        "<img date='sixteenth' value='gardening' src='picture/gardening12(little).jpg' original='picture/original/gardening12.jpg'/>"+
        "<img date='thirteenth' value='italic' src='picture/italic11(little).jpg' original='picture/original/italic11.jpg' />"+
        "<img date='fifteenth' value='gardening' src='picture/gardening11(little).jpg' original='picture/original/gardening11.jpg'/>"+
        "<img date='twelfth' value='italic' src='picture/italic10(little).jpg' original='picture/original/italic10.jpg' />"+
        "<img date='fourteenth' value='gardening' src='picture/gardening10(little).jpg' original='picture/original/gardening10.jpg'/>"+
        "<img date='eleventh' value='italic' src='picture/italic9(little).jpg' original='picture/original/italic9.jpg' />"+
        "<img date='thirteenth' value='gardening' src='picture/gardening9(little).jpg' original='picture/original/gardening9.jpg'/>"+
        "<img date='tenth' value='italic' src='picture/italic8(little).jpg' original='picture/original/italic8.jpg' />"+
        "<img date='twelfth' value='gardening' src='picture/gardening8(little).jpg' original='picture/original/gardening8.jpg'/>"+
        "<img date='ninth' value='italic' src='picture/italic7(little).jpg' original='picture/original/italic7.jpg' />"+
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