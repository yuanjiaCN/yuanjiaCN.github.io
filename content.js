$(function () {
    var $hasComment = $(".comment div");
    if($hasComment>0){
        $(".comment>p").hide();
    }else {
        $(".comment>p").show();
    }
    $("#author").focus(function () {
        if($(this).val()==this.defaultValue ||"不告诉我名字就不让你评论哼！"){
            $(this).val("");
            $(this).css({
                color:"black"
            })
        }
    });
    $("#author").blur(function () {
        if($(this).val()==""){
            $(this).val("你叫啥呀");
        }
    });
    $("#address").focus(function () {
        if($(this).val()==this.defaultValue){
            $(this).val("");
        }
    });
    $("#address").blur(function () {
        if($(this).val()==""){
            $(this).val("你是哪里人呀");
        }
    });
    $("#comment").focus(function () {
        if($(this).val()==this.defaultValue ||"真的不说点什么吗！嘤嘤嘤"){
            $(this).val("");
            $(this).css({
                color:"black"
            })
        }
    });
    $("#comment").blur(function () {
        if($(this).val()==""){
            $(this).val("求你了，说点什么吧");
        }
    });
    $("#button").click(function () {
        var $name = $("#author").val();
        if($("#address").val()=="你是哪里人呀"){
            $address = "不明地区";
        }else{
            $address = $("#address").val();
        }
        var $comment = $("#comment").val();
        if($name=="你叫啥呀"||$name=="不告诉我名字就不让你评论哼！"){
            $("#author").val("不告诉我名字就不让你评论哼！");
            $("#author").css({
                color: "red"
            })
        }else if($comment=="求你了，说点什么吧"||$comment=="真的不说点什么吗！嘤嘤嘤"){
            $("#comment").val("真的不说点什么吗！嘤嘤嘤");
            $("#comment").css({
                color: "red"
            })
        }else{
            alert("评论成功");
            $(".comment>p").hide();
            $(".comment").append("<img src='picture/head.jpg'>");
            $(".comment").append("<span>来自"+" "+$address+" "+"的"+" "+$name+" "+"在2017.07评论</span>");
            $(".comment").append("<div style='border-bottom: 1px dotted #64706c'>"+$comment+"</div>");
            if(!$("#rememberYes").is(":checked")){
                $("#author").val("你叫啥呀");
                $("#comment").val("求你了，说点什么吧");
                $("#address").val("你是哪里人呀");
            }
        }
    });
                //其他文章推荐功能
    $("aside.right nav").append(
        "<a href='first.html'>轮播图小心得</a>"+
        "<a href='second.html'>外边距叠加、行框、行内框、outline属性</a>" +
        "<a href='third.html'>做博客遇到小问题【1】主页</a>" +
        "<a href='forth.html'>做博客遇到小问题【2】评论区</a>" +
        "<a href='fifth.html'>CSS创建等高文本列，条件注释,不透明度,神器属性text-overflow,强迫症福利：标点符号悬挂hanging-punctuation</a>"+
        "<a href='sixth.html'>做博客遇到的小问题【3】溢出、伪选择器</a>" +
        "<a href='seventh.html'>博客用到的文字换行、首行渲染、CSS3动画属性</a>" +
        "<a href='eighth.html'>实现不定长度的标题和段落在不同尺寸的图片上在同一个位置水平居中（垂直可调）</a>" +
        "<a href='ninth.html'>让背景图片浮在图片上方</a>" +
        "<a href='tenth.html'>transition不支持display;图片下方有一小条背景溢出的处理方法</a>" +
        "<a href='eleventh.html'>html5、css3表单相关</a>" +
        "<a href='twelfth.html'>css3媒体查询；A元素hover时改变B元素背景色</a>" +
        "<a href='thirteenth.html'>图片不拉伸；背景图片随滚轮移动；首行缩进2个中文字</a>"+
        "<a href='fourteenth.html'>文章批量推荐功能（不包括当前页）;上一篇、下一篇切换功能</a>"+
        "<a href='fifteenth.html'>在网页内点击链接不跳转切换图片集</a>"+
        "<a href='sixteenth.html'>css3实现瀑布流多栏布局</a>"
    );

                    //上一篇、下一篇切换功能
        var $thisParaName =$(".content>h1").text();
        var $a = $("aside.right nav").children();
        for(var i = 0;i<$a.length;i++){
           if($a[i].innerHTML == $thisParaName) {
              var $thisParaA = $($a[i]);                     //DOM对象转换为jQuery对象
              var $nextParaA = $thisParaA.next();
              var $prevParaA = $thisParaA.prev();
              var $thisParaHref= $thisParaA.attr("href");    //当前页面的href
              var $nextParaHref= $nextParaA.attr("href");
              var $prevParaHref= $prevParaA.attr("href");
              var $thisParaAName= $thisParaA.text();         //当前页面超链接名
              var $nextParaAName= $nextParaA.text();         //最后一篇博客的后一篇链接名为""
              var $prevParaAName= $prevParaA.text();


              var cut = $(".cut");
              if($nextParaAName==""){
                  $(".cut").append(
                      "<a href='" + $prevParaHref + "'>上一篇：" + $prevParaAName +"</a>"+
                      "<br/>"+
                      "<a href='" + "#" + "'>下一篇：" + "这是最后一篇了" +"</a>"
                  );
              }else if($prevParaAName==""){
                  $(".cut").append(
                      "<a href='" + "#" + "'>上一篇：" + "这是第一篇" +"</a>"+
                      "<br/>"+
                      "<a href='" + $nextParaHref + "'>下一篇：" + $nextParaAName +"</a>"
                  );
              }else{
                  $(".cut").append(
                      "<a href='" + $prevParaHref + "'>上一篇：" + $prevParaAName +"</a>"+
                      "<br/>"+
                      "<a href='" + $nextParaHref + "'>下一篇：" + $nextParaAName +"</a>"
                  );
              }
               //其它文章推荐隐藏当前的文章

               if($thisParaName==$thisParaAName){    //这里detach和remove都可以用，但是empty不可以
                  $("aside.right nav a").detach("a[href='" + $thisParaHref+ "']");
               }
               //if($thisParaName==$thisParaAName){
               //    $thisParaA.css({                 //更方便，但是上一个代码比较符合这里的语义
               //        display:"none"
               //    })
               //}

               }
           }
        })