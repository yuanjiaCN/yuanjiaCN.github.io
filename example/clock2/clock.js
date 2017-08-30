//数字时钟
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
    clearTimeout(timer);
    var timer = setTimeout(function () {
        var oDate = new Date();
        oDate = addZero(oDate.getHours())+":"+addZero(oDate.getMinutes())+":"+addZero(oDate.getSeconds());
        DIV.innerText = oDate;
    },1000)
    setTimeout(clock,1000)
}
clock();
//圆形钟
var drawing = document.getElementById("drawing");
var context = drawing.getContext("2d");
var clockWidth = drawing.width;
context.translate(clockWidth/2,clockWidth/2);//这句话一定要写在外面！不然每执行一次圆心就会移动（100,100）
function circleClock() {
    context.strokeStyle ="rgba(220,150,150,1)";
    context.lineWidth = 2;
    if (drawing.getContext) {
        context.beginPath();
        context.arc(0, 0, 0.495*clockWidth, 0, 2 * Math.PI, false);
        context.moveTo(0.47*clockWidth, 0);//必须标在圆的起点
        context.arc(0, 0, 0.47*clockWidth, 0, 2 * Math.PI, false);
        context.stroke();
        context.font = "20px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        //12个数字
        for(i=1;i<13;i++){
            context.fillStyle = "rgba(50,50,50,1)"
            context.strokeStyle ="rgba(50,50,50,0.8)";
            context.fillText(i,Math.sin((Math.PI/6)*i)*clockWidth*0.4,-Math.cos((Math.PI/6)*i)*clockWidth*0.4)
            //注意y值是负的！因为原点往下是正，往上是负
            //Math.sin中不可直接写度数，一定要用Math.PI计算
            if((i+1)%3){
                context.font = "20px Arial bold"
            }else{
                context.font = "40px Arial bold"//设置接下来的数字的样式
            }
        }
        //小短线
        for(i=0;i<60;i++){
            if(i%5){
                context.lineWidth = 3;
                context.beginPath();
                context.moveTo(Math.sin(Math.PI*i/30)*clockWidth*0.45,-Math.cos(Math.PI*i/30)*clockWidth*0.45);
                context.lineTo(Math.sin(Math.PI*i/30)*clockWidth*0.47,-Math.cos(Math.PI*i/30)*clockWidth*0.47);
                context.stroke();
            }else{
                context.lineWidth = 5;
                context.beginPath();
                context.moveTo(Math.sin(Math.PI*i/30)*clockWidth*0.43,-Math.cos(Math.PI*i/30)*clockWidth*0.43);
                context.lineTo(Math.sin(Math.PI*i/30)*clockWidth*0.47,-Math.cos(Math.PI*i/30)*clockWidth*0.47);
                context.stroke();
            }

        }
    }
}
circleClock();//所有函数都要先执行一次，不然会卡一秒才有钟出现
//秒针
function secondPin() {
        var oDate = new Date();
        var oSecond = oDate.getSeconds();
        context.strokeStyle ="rgba(200,20,20,0.2)";
        //让圆圈中间没有线穿过的方法，就是分成两个线段。。。
        if(oSecond%15){
            context.beginPath();
            context.lineWidth = 2;
            context.moveTo(-Math.sin(Math.PI*oSecond/30)*clockWidth*0.05,Math.cos(Math.PI*oSecond/30)*clockWidth*0.05);
            context.lineTo(Math.sin(Math.PI*oSecond/30)*clockWidth*0.37,-Math.cos(Math.PI*oSecond/30)*clockWidth*0.37);
            context.moveTo(Math.sin(Math.PI*oSecond/30)*clockWidth*0.43,-Math.cos(Math.PI*oSecond/30)*clockWidth*0.43);
            context.lineTo(Math.sin(Math.PI*oSecond/30)*clockWidth*0.47,-Math.cos(Math.PI*oSecond/30)*clockWidth*0.47);
            context.stroke();
            context.fillStyle ="rgba(200,20,20,0.2)";
            context.beginPath();
            context.arc(Math.sin(Math.PI*oSecond/30)*clockWidth*0.40,-Math.cos(Math.PI*oSecond/30)*clockWidth*0.40, 0.03*clockWidth, 0,2 * Math.PI, false);
            context.arc(Math.sin(Math.PI*oSecond/30)*clockWidth*0.40,-Math.cos(Math.PI*oSecond/30)*clockWidth*0.40, 0.03*clockWidth, 0,2 * Math.PI, false);
            //秒针上的小小装饰品。。。一个圆圈
            context.stroke();
        }else{
            context.beginPath();
            context.lineWidth = 2;
            context.moveTo(-Math.sin(Math.PI*oSecond/30)*clockWidth*0.05,Math.cos(Math.PI*oSecond/30)*clockWidth*0.05);
            context.lineTo(Math.sin(Math.PI*oSecond/30)*clockWidth*0.35,-Math.cos(Math.PI*oSecond/30)*clockWidth*0.35);
            context.moveTo(Math.sin(Math.PI*oSecond/30)*clockWidth*0.43,-Math.cos(Math.PI*oSecond/30)*clockWidth*0.43);
            context.lineTo(Math.sin(Math.PI*oSecond/30)*clockWidth*0.47,-Math.cos(Math.PI*oSecond/30)*clockWidth*0.47);
            context.stroke();
            context.fillStyle ="rgba(100,100,100,0.1)";
            context.beginPath();
            context.arc(Math.sin(Math.PI*oSecond/30)*clockWidth*0.40,-Math.cos(Math.PI*oSecond/30)*clockWidth*0.40, 0.05*clockWidth, 0,2 * Math.PI, false);
            //秒针上的小小装饰品。。。一个圆圈
            context.stroke();
        }

        context.fill();
}
secondPin();
//分针
function minutePin() {
    var oDate = new Date();
    var oMinute = oDate.getMinutes()+oDate.getSeconds()/60; //不要每隔一分钟才跳一次，把秒钟算进去
    context.strokeStyle ="black";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(-Math.sin(Math.PI*oMinute/30)*clockWidth*0.05,Math.cos(Math.PI*oMinute/30)*clockWidth*0.05);
    context.lineTo(Math.sin(Math.PI*oMinute/30)*clockWidth*0.38,-Math.cos(Math.PI*oMinute/30)*clockWidth*0.38);
    context.stroke();
    context.restore();
}
minutePin()
//把24小时改成12小时
function repairHour(oHour) {
    if(oHour>12){
        oHour = oHour-12;
    }
    return oHour
}
//时针
function hourPin() {
    var oDate = new Date();
    var oHour = oDate.getHours()+oDate.getMinutes()/60+oDate.getSeconds()/60/60;//把分针和秒针的时间都算进去
    context.strokeStyle ="black";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(-Math.sin(Math.PI*repairHour(oHour)/6)*clockWidth*0.05,Math.cos(Math.PI*repairHour(oHour)/6)*clockWidth*0.05);
    context.lineTo(Math.sin(Math.PI*repairHour(oHour)/6)*clockWidth*0.25,-Math.cos(Math.PI*repairHour(oHour)/6)*clockWidth*0.25);
    context.stroke();
    context.restore();
}
hourPin()
function move() {
    var timer = setTimeout(function () {
        context.clearRect(-500,-500,1000,1000)//重画整个表
        circleClock();
        secondPin();
        minutePin();
        hourPin();
    },1000)
    setTimeout(move,1000)
}
move()