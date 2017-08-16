$(function () {
 $("#index>section.works>section").append(
     $all
 )
    $("#index>section.works>section a").wrap("<div></div>");

    var workSection = document.getElementsByClassName("works");
    var section = workSection[0].getElementsByTagName("section");
    var div = section[0].getElementsByTagName("div");
    section[0].innerHTML = section[0].innerHTML+section[0].innerHTML;
//复制一份全体div
    section[0].style.width = div[0].offsetWidth*div.length+"px";
//让section的宽度能够容纳所有的div，不然宽度不够的话，宽度以外可以容纳的div会掉在下方
    function odd() {
        for(var i=0;i<div.length;i++){
            div[i].style.width = div[i].offsetWidth/16+"px";
            //本来设计的div为31%，其父元素也就是section的宽度只可以让3个div并排，我现在需要让所有24*2组个DIV并排
            //父元素本来是容纳3个div的宽度，现在容纳48个，是原来的16倍，div要除以相应的倍数
            //由于是百分比布局，div的宽度会随着width的宽度变，这里得让它变回原来的宽度
            div[i].style.margin = div[i].offsetWidth/496+"px";
            //由于并没有offsetMargin这种属性，用style取margin并不能取到外部css表中内容，又懒得写currentStyle的兼容，
            //这里就偷个懒
            //由于margin本身我设计的是1%，而div的宽度是31%，而且div本身宽度除了16，所以margin宽度相应的调整为16*31=496
        }
    }
    odd();
    function example() {
        var timer = setTimeout(function () {
            if(section[0].offsetLeft<-section[0].offsetWidth/2){
                //当原本的一组div的最后一个也过去的时候，也就是section的宽度的一半
                section[0].style.left = '0';
                //把这个section拽回到一开始的状态
            }
            section[0].style.left = section[0].offsetLeft-30+"px";
            setTimeout(example,10)
        },10)
    }
    example();
})