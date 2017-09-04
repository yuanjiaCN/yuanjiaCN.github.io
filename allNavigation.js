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
        $("#set").css({
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
        $("#set").css({
            color: "black"
        })
    })
    $("#set").mouseover(function () {
        $("#set").css({
            background: "rgb(116,129,55)"
        })
        $("#set").css({
            color: "black"
        })
    })
    $("#set").mouseout(function () {
        $("#set").css({
            background: "rgb(221,221,221)"
        })
    })
    $("#set").click(function () {
        $("#set").css({
            color: "rgb(116,129,55)"
        })
        $("#book").css({
            color: "black"
        })
        $("#blog").css({
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
    var $P = $("#navigation>article p");
    var $A = $("#navigation>article>section.right a");
    for (j = 0; j < $P.length; j++) {
        $P[j].innerText = $A[j].getAttribute("value");
    }
    //分类导航
    var $LI = $("#navigation>nav li");
    $LI.click(function () {
        var $liId = $(this).children("a").attr("id");
        for (i = 0; i < $A.length; i++) {
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
            color: "black"
        })
    })

     //增加一个计数器，记录被隐藏的链接数。
     //当计数器数字和链接数相等时，即证明所有链接都被隐藏，说明输入信息没有与之匹配的文章，即让所有文章恢复显示
     //搜索
     var $aHref = new Array();
     var $submit = $("#submit");
     var $input = $("#something")
     for(k = 0; k < $A.length; k++) {
         $aHref.push($A[k]);
     }

     $submit.click(function () {
         var number = 0;
         for (l = 0; l < $aHref.length; l++) {
             var aHref = $($aHref[l]);
             var $inputText = $input.val().toLowerCase();
             var $aHrefText = $aHref[l].innerHTML.toLowerCase();
             if ($aHrefText.search($inputText) != -1) {
                 aHref.parent().parent().parent().show();
             } else {
                 aHref.parent().parent().parent().hide();
                 number++;                      //增加一个计数器，记录被隐藏的链接数。
             }
             if (number == $aHref.length) {    //当计数器数字和链接数相等时，即证明所有链接都被隐藏，
                 //说明输入信息没有与之匹配的文章，即让所有文章恢复显示

                 $A.parent().parent().parent().show();
             }
         }
     })


    //预留文字点击时隐藏
    var $submit = $("#submit");
    var $input = $("#something");
    $input.focus(function () {
        if ($(this).val() == this.defaultValue) {
            $(this).val("");
        }
        $("#search>p").hide();
    })
    $input.blur(function () {
        if ($(this).val() == "") {
            $(this).val("请输入关键词");
            $("#search>p").hide();
        }
    })
    //搜索
    var $aHref = new Array();
    for (k = 0; k < $A.length; k++) {
        $aHref.push($A[k]);
    }
    $submit.click(function () {
        var $inputText = $input.val().toLowerCase();
        var $allAText = $A.text();
        if ($allAText.search($inputText) != -1) {
            //先让输入的字符串，与$allAText匹配，
            //这个变量是包含了所有链接的text()的字符串，如果匹配成功，
            //再继续后方的循环和判断以确定与哪（几）篇文章匹配,否则不执行后方代码
            var number = 0;
            for (l = 0; l < $aHref.length; l++) {
                var aHref = $($aHref[l]);
                var $aHrefText = $aHref[l].innerHTML.toLowerCase();
                if ($aHrefText.search($inputText) != -1) {
                    aHref.parent().parent().parent().show();
                } else {
                    aHref.parent().parent().parent().hide();
                }
            }
        }else{
            $("#search>p").show();
            }
        })
    })