$(function () {
    var $LI = $("li");
    var $IMG = $("img");
    for(var i=0;i<$LI.length;i++) {
        $LI[i].onmouseover = function () {  //加了【index】后就变为DOM对象了，需要使用DOM的方法和语法
            this.firstElementChild.style.display = "block";//firstElementChild是第一个子元素节点的意思，ie低版本不兼容
        }
        $LI[i].onmouseout = function () {
            this.firstElementChild.style.display = "none";
        }
    }
    })