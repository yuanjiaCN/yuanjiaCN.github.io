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
 $(function () {
 var div1 = document.getElementsByTagName("div");
 alert(div1.length);
 })
 function example() {
 var timer = setTimeout(function () {
 alert("超时调用") ;//等待超时调用期间，代码会继续往下走
 },1000);
 alert("一个普通的调用")
 }
 example();//先弹出一个普通的调用，再弹出超时调用

 var aButton = document.getElementsByTagName("input")[0];
 var timer = null;
 var oDIV = document.getElementById("example");
 function startMove() {
 clearTimeout(timer);
 timer = setTimeout(function (){
 if(oDIV.offsetLeft<300) {
 oDIV.style.left = oDIV.offsetLeft + 10 + "px";
 //位置1
 }else{
 clearTimeout(timer);
 }
 },200);
 setTimeout(startMove,200);//位置2
 }
 aButton.onclick = function () {
 startMove();
 };
 var oDiv = document.getElementById("example");
 oDiv.style.backgroundColor = "green";
 alert(oDiv.style.backgroundColor)
 */
/*
var P = document.getElementsByTagName("p")[0];
P.style.cssText = "color:green;background-color : red";
var value = P.style.getPropertyValue(P.style[1]);
P.style.removeProperty("background");
alert(value);
alert(P.style.cssText);

var computedStyle = document.defaultView.getComputedStyle(P,null);//或者window.defaultView.getComputedStyle(P,null)
var computedStyle = P.currentStyle;
alert(computedStyle);//[object]
alert(computedStyle.backgroundColor);//black
alert(computedStyle.color);rgb(255, 192, 203);//pink

var sheet = document.styleSheets[0];
alert(sheet.href);//file:///G:/17%20vacation/example.css
*/
/*
function getStyleSheet(element) {
    return element.sheet || element.styleSheet;
}
var link = document.getElementsByTagName("link")[0];
var sheet = getStyleSheet(link);
alert(sheet.href);//file:///G:/17%20vacation/example.css

var sheet = document.styleSheets[0];
var rules = sheet.cssRules || sheet.rules;
var rule = rules[0];
alert(rule.selectorText);//p
alert(rule.style.color);//red
alert(rule.cssText);//p { color: red; background: black none repeat scroll 0% 0%; }
alert(rule.style.cssText);//color: red; background: black none repeat scroll 0% 0%;
rule.style.backgroundColor = "grey";
 var sheet = document.styleSheets[0];
 sheet.insertRule("body{background-color:green }",0);

function insertRule(sheet, selectorText, cssText, position) {
    if(sheet.insertRule){
        sheet.insertRule(selectorText + "{" + cssText + "}", position);
    }else if(sheet.addRule){
        sheet.addRule(selectorText,cssText,position)
    }
}
insertRule(document.styleSheets[0],"body","background-color: red",0);

 function deleteRule(sheet, index) {
 if (sheet.deleteRule){
 sheet.deleteRule(index);
 } else if (sheet.removeRule){
 sheet.removeRule(index)
 }
 }
 deleteRule(document.styleSheets[0],0);
*/
var inner = document.getElementById("inner")
alert(inner.offsetTop)
