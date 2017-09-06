$(function () {
    //导航栏因为各种动作亮起
    function mouseAndClick() {
        $("#book").mouseover(function () {
            $("#book").css({
                background: "rgb(229,116,55)"
            });
        });
        $("#book").mouseout(function () {
            $("#book").css({
                background: "rgb(221,221,221)"
            });
        });
        $("#book").click(function () {
            $("#book").css({
                color: "rgb(229,116,55)"
            });
            $("#blog").css({
                color: "black"
            });
            $("#set").css({
                color: "black"
            });
        });
        $("#blog").mouseover(function () {
            $("#blog").css({
                background: "rgb(56,182,230)"
            });
        });
        $("#blog").mouseout(function () {
            $("#blog").css({
                background: "rgb(221,221,221)"
            });
        });
        $("#blog").click(function () {
            $("#blog").css({
                color: "rgb(56,182,230)"
            });
            $("#book").css({
                color: "black"
            });
            $("#set").css({
                color: "black"
            });
        });
        $("#set").mouseover(function () {
            $("#set").css({
                background: "rgb(116,129,55)"
            });
            $("#set").css({
                color: "black"
            });
        });
        $("#set").mouseout(function () {
            $("#set").css({
                background: "rgb(221,221,221)"
            });
        });
        $("#set").click(function () {
            $("#set").css({
                color: "rgb(116,129,55)"
            });
            $("#book").css({
                color: "black"
            });
            $("#blog").css({
                color: "black"
            })
        })
    }

    mouseAndClick();

    function importTheAllA() {
        $("#navigation>article>section.right").append(
            $all    //在另一个JS文档中的所有的链接
        );
        $("#navigation>article>section.right a").wrap("<div><div class='left'><h1></h1></div></div>");//把超链接包裹起来
        $("#navigation>article>section.right>div").append("<div class='right'><img src='picture/head.jpg'/></div>");
    }

    importTheAllA();


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
        var $L = new Array();//这是当前页面没有被隐藏的blog,如果没有这个的话，分类导航的页数就会联系到全部导航中
        var $Link = $("article>section.right>div");
        for (j = 0; j < $Link.length; j++) {
            if ($Link[j].style.display !== "none") {
                $L.push($Link[j]); //把每个看得见的链接push到$L,用[j]=[j],由于看得见的链接不是连续的，会出事情
            }
        }
        $Link.css({ //把所有链接都隐藏
            display: "none"
        });
        for (k = 0; k < 10; k++) {
            if ($L[k]) {//如果blog数不满10，会报错
                $L[k].style.display = "block";//只显示前10个blog
            }
        }
        clickLinkNumber($L);//把$L传递给这个函数，让它以$L来创建页数
    });
    var $allNav = $("#navigation>nav>header");
    $allNav.click(function () {
        $A.parent().parent().parent().css({
            display: "block"
        });
        $LI.children("a").css({
            color: "black"
        });
        createPage();//重新点回导航也要更新页数
    });

    function vagueSearch() {
        //增加一个计数器，记录被隐藏的链接数。
        //当计数器数字和链接数相等时，即证明所有链接都被隐藏，说明输入信息没有与之匹配的文章，即让所有文章恢复显示
        //搜索
        var $aHref = new Array();
        var $submit = $("#submit");
        var $input = $("#something")
        for (k = 0; k < $A.length; k++) {
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
            } else {
                $("#search>p").show();
            }
            var $L = new Array();//这是当前页面没有被隐藏的blog,如果没有这个的话，分类导航的页数就会联系到全部导航中
            var $Link = $("article>section.right>div");
            for (j = 0; j < $Link.length; j++) {
                if ($Link[j].style.display !== "none") {
                    $L.push($Link[j]); //把每个看得见的链接push到$L,用[j]=[j],由于看得见的链接不是连续的，会出事情
                }
            }
            $Link.css({ //把所有链接都隐藏
                display: "none"
            });
            for (k = 0; k < 10; k++) {
                if ($L[k]) {//如果blog数不满10，会报错
                    $L[k].style.display = "block";//只显示前10个blog
                }
            }
            clickLinkNumber($L);//把$L传递给这个函数，让它以$L来创建页数
        });

        //预留文字点击时隐藏
        var $submit = $("#submit");
        var $input = $("#something");
        $input.focus(function () {
            if ($(this).val() == this.defaultValue) {
                $(this).val("");
            }
            $("#search>p").hide();
        });
        $input.blur(function () {
            if ($(this).val() == "") {
                $(this).val("请输入关键词");
                $("#search>p").hide();
            }
        });
        //搜索
        var $aHref = new Array();
        for (k = 0; k < $A.length; k++) {
            $aHref.push($A[k]);
        }
    }

    vagueSearch();

    //创建原始页面
    function createPage() {
        var $originalLink = $("#navigation>article>section.right ul>li");
        //删除原有li，不然会有两排页数或者最多页数一直存在
        $originalLink.detach();
        //创建页数栏，便于翻页
        $pageNumberSection = document.createElement("section");
        $pageNumberSection.id = "pageTurningSection";
        $pageNumberUl = document.createElement("ul");
        $("#navigation>article>section.right").append($pageNumberSection);
        $pageNumberSection.append($pageNumberUl);
        var $Link = $("article>section.right>div");
        var liNumber = Math.ceil($Link.length / 10);//一页有10篇文章，一共有几页，向上取整
        for (page = 0; page < liNumber; page++) {
            $pageNumberUl.append(document.createElement("li"));
            $pageNumberUl.children[page].innerHTML = page + 1; //页数从0开始有点怪
        }
        $Link.css({//隐藏所有的blog
            display: "none"
        });
        for (i = 0; i < 10; i++) {
            $Link[i].style.display = "block";//只显示前10篇blog
        }
        $("#navigation>article>section.right").append($pageNumberSection);
        var $L = new Array();//这是看得见的链接组成的数组
        var $Link = $("article>section.right>div");
        /*没什么用，开始的时候本身就只看得见10篇
         for (j = 0; j<$Link.length; j++) {
         if($Link[j].style.display !== "none"){//如果页面本身被隐藏，那就不要算到现有链接中
         $L[j] = $Link[j];
         }
         }
         */
        var liNumber = Math.ceil($L.length / 10);
        for (page = 0; page < liNumber; page++) {
            $pageNumberUl.append(document.createElement("li"));//加上相应数量的li页码
            $pageNumberUl.children[page].innerHTML = page + 1; //页数从0开始有点怪
        }
        var $linkNumber = $("#navigation>article>section.right ul>li");
        var $Link = $("article>section.right>div");
        for (i = 0; i < $linkNumber.length; i++) {
            $linkNumber[i].onclick = function () {
                var pageNumber = this.innerHTML;
                $Link.css({
                    display: "none"
                });
                for (k = 10 * (pageNumber - 1); k < 10 * pageNumber; k++) {//获取当前页数相对应的博客
                    $Link[k].style.display = "block";
                }
            }
        }
    }
    createPage();

    //点击效果
    function clickLinkNumber($L) {
        var liNumber = Math.ceil($L.length / 10);
        var $originalLink = $("#navigation>article>section.right ul>li");
        //删除原有li
        $originalLink.detach();
        for (page = 0; page < liNumber; page++) {
            $pageNumberUl.append(document.createElement("li"));//加上相应数量的li页码
            $pageNumberUl.children[page].innerHTML = page + 1; //页数从0开始有点怪
        }
        var $linkNumber = $("#navigation>article>section.right ul>li");
        var $Link = $("article>section.right>div");
        for (i = 0; i < $linkNumber.length; i++) {
            $linkNumber[i].onclick = function () {
                var pageNumber = this.innerHTML;
                $Link.css({
                    display: "none"
                });
                for (k = 10 * (pageNumber - 1); k < 10 * pageNumber; k++) {
                    if ($L[k]) { //博客数目不到10*pageNumber时会报错
                        $L[k].style.display = "block";
                    }

                }
            }
        }
    }
});