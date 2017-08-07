$(function () {
                //其他文章推荐功能
    $("aside.left nav").append(
        $all //另一个JS页面中所有的链接
    );

                    //上一篇、下一篇切换功能
        var $thisParaName =$(".right h1").text();
        var $a = $("aside.left nav").children();
        for(var i = 0;i<$a.length;i++){
           if($a[i].innerText == $thisParaName) {
              var $thisParaA = $($a[i]);                     //DOM对象转换为jQuery对象
              var $nextParaA = $thisParaA.prev();
              var $prevParaA = $thisParaA.next();
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
                   alert($thisParaName);
                  $("aside.left nav a").detach("a[href='" + $thisParaHref+ "']");
               }
               //if($thisParaName==$thisParaAName){
               //    $thisParaA.css({                 //更方便，但是上一个代码比较符合这里的语义
               //        display:"none"
               //    })
               //}


               //相关导航项变色
               var $aClassValue = $a[i].className;
               if($(".right>h1").text()==$thisParaAName) {
                   var $idValue = "#" + $aClassValue;
                   if ($idValue == "#blog") {
                       $($idValue).css({
                           color: "rgb(56,182,230)"
                       })
                   } else if ($idValue == "#book") {
                       $($idValue).css({
                           color: "rgb(229,116,55)"
                       })
                   }
               }
                //每篇博客的title为其标题
               $("head").append("<title>"+$('.right>h1').text()+"</title>")
               }
           }
        })