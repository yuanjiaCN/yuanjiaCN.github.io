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
        "<a href='sixteenth.html' class='blog' value='2017.7.29'>css3实现瀑布流多栏布局</a>"+
        "<a href='fifteenth.html' class='blog' value='2017.7.28'>在网页内点击链接不跳转切换图片集</a>"+
        "<a href='fourteenth.html' class='blog' value='2017.7.28'>文章批量推荐功能（不包括当前页）;上一篇、下一篇切换功能</a>"+
        "<a href='thirteenth.html' class='blog' value='2017.7.27'>图片不拉伸；背景图片随滚轮移动；首行缩进2个中文字</a>"+
        "<a href='twelfth.html' class='book' value='2017.7.27'>css3媒体查询；A元素hover时改变B元素背景色</a>" +
        "<a href='eleventh.html' class='book' value='2017.7.27'>html5、css3表单相关</a>" +
        "<a href='tenth.html' class='blog' value='2017.7.27'>transition不支持display;图片下方有一小条背景溢出的处理方法</a>" +
        "<a href='ninth.html' class='blog' value='2017.7.26'>让背景图片浮在图片上方</a>" +
        "<a href='eighth.html' class='blog' value='2017.7.26'>实现不定长度的标题和段落在不同尺寸的图片上在同一个位置水平居中（垂直可调）</a>" +
        "<a href='seventh.html' class='blog' value='2017.7.25'>博客用到的文字换行、首行渲染、CSS3动画属性</a>" +
        "<a href='sixth.html' class='blog' value='2017.7.24'>做博客遇到的小问题【3】溢出、伪选择器</a>" +
        "<a href='fifth.html' class='book' value='2017.7.24'>CSS创建等高文本列，条件注释,不透明度,神器属性text-overflow,强迫症福利：标点符号悬挂hanging-punctuation</a>"+
        "<a href='forth.html' class='blog' value='2017.7.23'>做博客遇到小问题【2】评论区</a>" +
        "<a href='third.html' class='blog' value='2017.7.22'>做博客遇到小问题【1】主页</a>" +
        "<a href='second.html' class='book' value='2017.7.22'>外边距叠加、行框、行内框、outline属性</a>" +
        "<a href='first.html' class='book' value='2017.7.21'>轮播图小心得</a>"
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