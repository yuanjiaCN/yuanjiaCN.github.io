var aButton = document.getElementsByTagName("input")[0];
var timer = null;
var oDIV = document.getElementById("example");
function startMove() {
    clearTimeout(timer);//外部
    timer = setTimeout(function (){
        //内部
        if(oDIV.offsetLeft<300) {
            oDIV.style.left = oDIV.offsetLeft + 10 + "px";
            setTimeout(startMove,200);
           //位置1
        }else{
            clearTimeout(timer);
        }
    },200);
    //setTimeout(startMove,1000);//位置2
}
aButton.onclick = function () {
    startMove();
};