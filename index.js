$(function () {
 $("#index>section.works>section").append(
     $all
 )
    $("#index>section.works>section a").wrap("<div></div>")
    var $DIV = $("#index>section.works>section>div");
      for(var i=9 ;i<$DIV.length;i++){
          $DIV[i].remove();          //只显示最近9个博客，其他的都删除
      }

})
