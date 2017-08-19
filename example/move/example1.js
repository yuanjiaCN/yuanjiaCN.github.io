var ul = document.getElementsByTagName("ul");
var li = ul[0].getElementsByTagName("li");
ul[0].innerHTML = ul[0].innerHTML+ul[0].innerHTML;
//复制一份li
ul[0].style.width = li[0].offsetWidth*li.length;
//让ul的宽度时原来的两倍，不然宽度不够的话，刚加的一份li会掉在下面
function odd() {
    for(var i=0;i<li.length;i++){
        if(i%2){
            li[i].style.background = 'red';
            //懒得弄图片就弄个间隔颜色的效果
        }
        li[i].style.width = li[i].offsetWidth/2+"px"
        //由于是百分比布局，li的宽度会随着width的宽度变，这里得让它变回原来的宽度
    }
}
odd();
function example() {
    clearTimeout(timer);
    var timer = setTimeout(function () {
        if(ul[0].offsetLeft<-ul[0].offsetWidth/2){
            //当原本的一组li的最后一个也过去的时候，也就是ul的宽度的一半
            ul[0].style.left = '0';
            //把这个ul拽回到一开始的状态
        }
        ul[0].style.left = ul[0].offsetLeft-2+"px";
    },10)
    setTimeout(example,10)
}
example();












