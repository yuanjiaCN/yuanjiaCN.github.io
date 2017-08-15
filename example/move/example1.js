/*function example() {
    var DIV = document.getElementById("example");
    DIV.onclick = (function () {
        alert("1");
    })()
    DIV.onclick = function () {
        alert("2");
    }
}
 function example() {
 var DIV = document.getElementById("example");
 DIV.addEventListener("click",function () {
 alert(this.id);
 },false);
 DIV.addEventListener("click",function () {
 alert("hello world");
 },false);
 }
 example();
}
 var DIV = document.getElementById("example");
 DIV.onclick = function () {
 alert("1");
 alert("2");
 }
 var DIV = document.getElementById("example");
 DIV.attachEvent("onclick",function () {
 alert("clicked1");
 })
 DIV.attachEvent("onclick",function () {
 alert("clicked2");
 })
 var DIV = document.getElementById("example");
 DIV.onclick = function () {
 return function () {
 return(this);
 }
 }
 alert(DIV.onclick()())
 var DIV = document.getElementById("example");
 DIV.onclick = function (event) {
 alert("onclick")                              //[object]
 }
 DIV.onmouseover = function (event) {
 alert("2")                              //[object]
 }
 function timee() {
 alert("hello world");
 setTimeout(timee,20);
 }

 setTimeout(timee,1000);


 var Abutton = document.getElementsByTagName("input")[0];
 var timer = null;
 var oDIV = document.getElementById("example");
 function startMove() {
 clearTimeout(timer);
 timer = setTimeout(function (){
 if(oDIV.offsetLeft<300) {
 oDIV.style.left = oDIV.offsetLeft + 10 + "px";
 setTimeout(startMove,200);
 }else{
 clearTimeout(timer);
 }
 },200);

 }
 Abutton.onclick = function () {
 startMove();
 };
 var timer = null;
 var Abutton = document.getElementsByTagName("input")[0];
 var oDIV = document.getElementById("example");
 function startMove() {
 clearTimeout(timer);
 if(oDIV.offsetLeft<300){
 timer = setTimeout(function (){
 oDIV.style.left = oDIV.offsetLeft+10+"px";
 },200);
 setTimeout(startMove,200);
 }else{
 clearTimeout(timer);
 }
 }
 Abutton.onclick = function () {
 startMove();
 };

 var Abutton = document.getElementsByTagName("input")[0];
 var timer = null;
 var oDIV = document.getElementById("example");
 function startMove() {
 clearTimeout(timer);
 timer = setTimeout(function (){
 if(oDIV.offsetLeft<300) {
 oDIV.style.left = oDIV.offsetLeft + 10 + "px";
 setTimeout(startMove,200);//位置1
 }else{
 clearTimeout(timer);
 }
 },200);
 //位置2
 }
 Abutton.onclick = function () {
 startMove();
 };
 var Abutton = document.getElementsByTagName("input")[0];
 var timer = null;
 var oDIV = document.getElementById("example");
 function startMove() {
 clearTimeout(timer);
 timer = setTimeout(function (){
 if(oDIV.offsetLeft<300) {
 //Math.ceil(num)，向上取整，向大取整
 //Math.floor(num)，向下取整，向小取整
 oDIV.style.left = Math.ceil(oDIV.offsetLeft+(300-oDIV.offsetLeft)/10)+"px"; //必须要加上oDIV.offsetLeft，不然第一次得到30px,第二次就是27……
 setTimeout(startMove,20)
 }else{
 clearTimeout(timer);
 }
 },20);
 }
 Abutton.onclick = function () {
 startMove();
 };
 */
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
    var timer = setTimeout(function () {
        if(ul[0].offsetLeft<-ul[0].offsetWidth/2){
            //当原本的一组li的最后一个也过去的时候，也就是ul的宽度的一半
            ul[0].style.left = '0';
            //把这个ul拽回到一开始的状态
        }
        ul[0].style.left = ul[0].offsetLeft-2+"px";
        setTimeout(example,10)
    },10)
}
example();












