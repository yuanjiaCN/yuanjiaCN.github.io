function addZero(num) {
    if(num<10){
        return "0"+num;
    }
    return num;
}
var DIV = document.createElement("div");
document.body.prepend(DIV);  //在所选元素的开头插入元素
var currentTime = new Date();
var currentTime = addZero(currentTime.getHours())+":"+addZero(currentTime.getMinutes())+":"+addZero(currentTime.getSeconds());
DIV.innerText = currentTime;
function clock() {
    //alert("位置2")
    clearTimeout(timer);
    var timer = setTimeout(function () {
        var oDate = new Date();
        oDate = addZero(oDate.getHours())+":"+addZero(oDate.getMinutes())+":"+addZero(oDate.getSeconds());
        DIV.innerText = oDate;
        //setTimeout(clock,1000);//位置1
        //alert("timer内部");
    },1000)
    setTimeout(clock,1000)//位置2
}
clock();
//setTimeout(clock,1000)//位置3
