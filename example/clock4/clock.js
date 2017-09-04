var DIV = document.getElementById("numberClock"),
    currentTime = new Date(),
    currentTime = addZero(currentTime.getHours()) + ":" + addZero(currentTime.getMinutes()) + ":" + addZero(currentTime.getSeconds()),
    drawing = document.getElementById("drawing"),
    context = drawing.getContext("2d"),
    timerButton = document.getElementById("startTheTimer"),
    showTheTime = document.getElementById("showTheTime"),
    millisecondNumber = document.getElementById("millisecond"),
    secondNumber = document.getElementById("second"),
    minuteNumber = document.getElementById("minute"),
    millisecondNumberContent = millisecondNumber.innerHTML,
    secondNumberContent = secondNumber.innerHTML,
    minuteNumberContent = minuteNumber.innerHTML,
    numberOfTimesBox = document.getElementById("numberOfTimes"),
    stopButton = document.getElementById("stopTheTimer"),
    makeSureTheInputTime = document.getElementById("makeSureTheInput"),
    countDownMinute = document.getElementById("countDownTimerMinute"),
    countDownSecond = document.getElementById("countDownTimerSecond"),
    countDownMillisecond = document.getElementById("countDownTimerMillisecond"),
    minuteContent,secondContent,millisecondContent,
    chaosCanvasElement = document.getElementById("chaosCanvas"),
    number = 0; //这是个全局变量，控制清零后计次从1开始
    chaosContext = chaosCanvasElement.getContext("2d");
    //这两句不写的话，线条会虚化锯齿的特别的厉害，原因是canvas的宽度与高度必须作为属性明确指定（也不能通过CSS设置），
    // 并且只能是数字，不支持百分比。基于以上的规则，所以很容易找到症结，canvas绘制的图片本来较小，但经过CSS强行放大拉伸，所以就会出现模糊、锯齿严重的效果。
    //解决的办法很简单，在绘制之前，首先设置canvas的宽度，代码如下：
    chaosCanvasElement.width = chaosCanvasElement.offsetWidth;
    chaosCanvasElement.height = chaosCanvasElement.offsetHeight;
    clockWidth = drawing.width;
    context.translate(clockWidth / 2,clockWidth / 2);//这句话一定要写在外面！不然每执行一次圆心就会移动这里标定的距离
    DIV.innerText = currentTime;
//数字时钟
function addZero(num) {
    if (num < 10) {
        return "0" + num;
    }
    return num;
}
function clock() {
    clearTimeout(timer);
    var timer = setTimeout(function () {
        var oDate = new Date();
        oDate = addZero(oDate.getHours()) + ":" + addZero(oDate.getMinutes()) + ":" + addZero(oDate.getSeconds());
        DIV.innerText = oDate;
    }, 1000)
    setTimeout(clock, 1000)
}
clock();

//圆形钟

function circleClock() {
    context.strokeStyle = "rgba(220,150,150,1)";
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
        for (i = 1; i < 13; i++){
            context.fillStyle = "rgba(50,50,50,1)"
            context.strokeStyle = "rgba(50,50,50,0.8)";
            context.fillText(i,Math.sin((Math.PI / 6) * i) * clockWidth * 0.4,-Math.cos((Math.PI / 6) * i) * clockWidth * 0.4)
            //注意y值是负的！因为原点往下是正，往上是负
            //Math.sin中不可直接写度数，一定要用Math.PI计算
            if ((i + 1) % 3) {
                context.font = "20px Arial bold"
            } else {
                context.font = "40px Arial bold"//设置接下来的数字的样式
            }
        }
        //小短线
        for (i = 0; i < 60; i++) {
            if (i % 5) {
                context.lineWidth = 3;
                context.beginPath();
                context.moveTo(Math.sin(Math.PI * i / 30) * clockWidth * 0.45, -Math.cos(Math.PI * i / 30) * clockWidth * 0.45);
                context.lineTo(Math.sin(Math.PI * i / 30) * clockWidth * 0.47, -Math.cos(Math.PI * i / 30) * clockWidth * 0.47);
                context.stroke();
            } else {
                context.lineWidth = 5;
                context.beginPath();
                context.moveTo(Math.sin(Math.PI * i / 30) * clockWidth * 0.43, -Math.cos(Math.PI * i / 30) * clockWidth * 0.43);
                context.lineTo(Math.sin(Math.PI * i / 30) * clockWidth * 0.47, -Math.cos(Math.PI * i / 30) * clockWidth * 0.47);
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
        if(oSecond % 15){
            context.beginPath();
            context.lineWidth = 2;
            context.moveTo(-Math.sin(Math.PI * oSecond / 30) * clockWidth * 0.05,Math.cos(Math.PI * oSecond / 30) * clockWidth * 0.05);
            context.lineTo(Math.sin(Math.PI * oSecond / 30) * clockWidth * 0.37, -Math.cos(Math.PI * oSecond / 30) * clockWidth * 0.37);
            context.moveTo(Math.sin(Math.PI * oSecond / 30) * clockWidth * 0.43, -Math.cos(Math.PI * oSecond / 30) * clockWidth * 0.43);
            context.lineTo(Math.sin(Math.PI * oSecond / 30) * clockWidth * 0.47, -Math.cos(Math.PI * oSecond / 30) * clockWidth * 0.47);
            context.stroke();
            context.fillStyle = "rgba(200,20,20,0.2)";
            context.beginPath();
            context.arc(Math.sin(Math.PI *oSecond / 30) * clockWidth * 0.40, -Math.cos(Math.PI * oSecond / 30) * clockWidth * 0.40, 0.03 * clockWidth, 0,2 * Math.PI, false);
            context.arc(Math.sin(Math.PI * oSecond / 30) * clockWidth * 0.40, -Math.cos(Math.PI * oSecond / 30) * clockWidth * 0.40, 0.03 * clockWidth, 0,2 * Math.PI, false);
            //秒针上的小小装饰品。。。一个圆圈
            context.stroke();
        } else {
            context.beginPath();
            context.lineWidth = 2;
            context.moveTo(-Math.sin(Math.PI * oSecond / 30) * clockWidth * 0.05,Math.cos(Math.PI * oSecond / 30) * clockWidth * 0.05);
            context.lineTo(Math.sin(Math.PI * oSecond / 30) * clockWidth * 0.35, -Math.cos(Math.PI * oSecond / 30) * clockWidth * 0.35);
            context.moveTo(Math.sin(Math.PI * oSecond / 30) * clockWidth * 0.43, -Math.cos(Math.PI * oSecond / 30) * clockWidth*0.43);
            context.lineTo(Math.sin(Math.PI*oSecond/30)*clockWidth*0.47,-Math.cos(Math.PI * oSecond / 30) * clockWidth * 0.47);
            context.stroke();
            context.fillStyle = "rgba(100,100,100,0.1)";
            context.beginPath();
            context.arc(Math.sin(Math.PI * oSecond / 30) * clockWidth * 0.40, -Math.cos(Math.PI * oSecond / 30) * clockWidth * 0.40, 0.05 * clockWidth, 0,2 * Math.PI, false);
            //秒针上的小小装饰品。。。一个圆圈
            context.stroke();
        }
        context.fill();
}
secondPin();

//分针
function minutePin() {
    var oDate = new Date();
    var oMinute = oDate.getMinutes() + oDate.getSeconds() / 60; //不要每隔一分钟才跳一次，把秒钟算进去
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(-Math.sin(Math.PI * oMinute / 30) * clockWidth * 0.05, Math.cos(Math.PI * oMinute / 30) * clockWidth * 0.05);
    context.lineTo(Math.sin(Math.PI * oMinute / 30) * clockWidth * 0.38, -Math.cos(Math.PI * oMinute / 30) * clockWidth * 0.38);
    context.stroke();
    context.restore();
}
minutePin()

//把24小时改成12小时
function repairHour(oHour) {
    if (oHour > 12) {
        oHour = oHour - 12;
    }
    return oHour
}

//时针
function hourPin() {
    var oDate = new Date();
    var oHour = oDate.getHours() + oDate.getMinutes() / 60 + oDate.getSeconds() / 60 / 60;//把分针和秒针的时间都算进去
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(-Math.sin(Math.PI * repairHour(oHour) / 6) * clockWidth * 0.05,Math.cos(Math.PI * repairHour(oHour) / 6) * clockWidth * 0.05);
    context.lineTo(Math.sin(Math.PI * repairHour(oHour) / 6) * clockWidth * 0.25, -Math.cos(Math.PI * repairHour(oHour) / 6) * clockWidth * 0.25);
    context.stroke();
    context.restore();
}
hourPin()

//运动
function move() {
    var timer = setTimeout(function () {
        context.clearRect(-500, -500, 1000, 1000)//重画整个表
        circleClock();
        secondPin();
        minutePin();
        hourPin();
    }, 1000)
    setTimeout(move, 1000)
}
move()

//开始、暂停计时
function startOrPause() {
    timerButton.onclick = function () {
        if (this.innerHTML == "计时开始") {
            this.innerHTML = "暂停";
            continueMove = true;
            startNumnber();
        } else {
            this.innerHTML = "计时开始";
            continueMove = false;
            number++;
            numberOfTimes(number);
        }
    }
}
startOrPause();

//停止计时
stopButton = document.getElementById("stopTheTimer");
function stopTheTimer() {
    stopButton.onclick = function () {
        continueMove = false;
        timerButton.innerHTML = "计时开始";
        millisecondNumberContent = 0;
        secondNumberContent = 0;
        minuteNumberContent = 0;
        millisecondNumber.innerHTML = addZero(0);
        secondNumber.innerHTML = addZero(0);
        minuteNumber.innerHTML = addZero(0);
        numberOfTimesBox.innerHTML = "";
        number = 0;
    }
}
stopTheTimer();

//开始计时
function startNumnber() {
    if (continueMove) {
        timer = setTimeout(function () {
            if (continueMove) { //这里要再清一次，不然清零的时候会变成00:00:01
            //判断毫秒是否进位
                if (millisecondNumberContent == 99) {
                    millisecondNumberContent = 0;
                    millisecondNumber.innerHTML = addZero(millisecondNumberContent);
                    //判断秒针是否进位
                    if (secondNumberContent == 59) {
                        secondNumberContent = 0;
                        secondNumber.innerHTML = addZero(secondNumberContent);
                        minuteNumberContent++;
                        minuteNumber.innerHTML = addZero(minuteNumberContent);
                    } else {
                        secondNumberContent++;
                        secondNumber.innerHTML = addZero(secondNumberContent);
                    }
                } else {
                millisecondNumberContent++;
                millisecondNumber.innerHTML = addZero(millisecondNumberContent);
            }
            }
        }, 10)
            setTimeout(startNumnber, 10)
    } else {
        clearTimeout(timer)
    }
}
//计次
function numberOfTimes(number) {
    var numberOfTimes = document.createElement("div");
    numberOfTimes.innerHTML = "计次" + number + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + minuteNumber.innerHTML + ":" + secondNumber.innerHTML + ":" + millisecondNumber.innerHTML
    numberOfTimesBox.append(numberOfTimes);
}

//群魔乱舞画布
function chaos() {
        timer = setTimeout(function () {
        //各种线条图形群魔乱舞
        chaosContext.strokeStyle = "rgb(" + randomNumber(0, 255) + "," + randomNumber(0, 255) + "," + randomNumber(0, 255) + ")";
        chaosContext.beginPath();
        chaosContext.strokeStyle = "rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255))";
        chaosContext.lineWidth = 2;
        chaosContext.arc(randomNumber(0, (chaosCanvasElement.width)), randomNumber(0, (chaosCanvasElement.height)), randomNumber(1, 100), 0, randomNumber(0, 2 * Math.PI), false);
        chaosContext.moveTo(randomNumber(0, (chaosCanvasElement.width)),randomNumber(0,(chaosCanvasElement.height)));
        chaosContext.lineTo(randomNumber(0, (chaosCanvasElement.width)),randomNumber(0, (chaosCanvasElement.height)));
        chaosContext.font = randomNumber(10, 100) + "px Arial bold";
        chaosContext.fillText("时间到啦",randomNumber(0, (chaosCanvasElement.width)), randomNumber(0, (chaosCanvasElement.height)));
        chaosContext.stroke();
    }, 500)
    setTimeout(chaos, 500)
}

//随机数
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //Math类型的随机数公式
}

//定时器
function makeSureButton() {
    makeSureTheInputTime.onclick = function () {
        stopTheCountDownMove = true;//停止计时以后还可以新的一轮开始
        var minuteContent = Number(countDownMinute.value);
        var secondContent = Number(countDownSecond.value);
        var millisecondContent = Number(countDownMillisecond.value);
        countDownMove(minuteContent,secondContent,millisecondContent,stopTheCountDownMove);
    }
}
makeSureButton()
var stopTheCountDownMove = true;
function countDownMove(minuteContent,secondContent,millisecondContent) {
    //必须在这里再加这三句，不然setTimeout(countDownMove,1000)的调用，不知道这三个变量
        minuteContent = Number(countDownMinute.value)
        secondContent = Number(countDownSecond.value);
        millisecondContent = Number(countDownMillisecond.value);
        var timer = setTimeout(function () {
        if(stopTheCountDownMove){
            if (minuteContent + secondContent + millisecondContent == 0){
                stopTheCountDownMove = false;
                    chaos();
            } else {
                if (millisecondContent == 0) {
                    if (secondContent == 0) {
                        minuteContent--
                        countDownMinute.value = minuteContent;
                        secondContent = 99;
                        countDownSecond.value = secondContent;
                        millisecondContent = 99;
                        countDownMillisecond.value = millisecondContent;
                    } else {
                        secondContent--;
                        countDownSecond.value = secondContent;
                        millisecondContent = 99;
                        countDownMillisecond.value = millisecondContent;
                    }
                }else{
                    millisecondContent = millisecondContent - 1;
                    countDownMillisecond.value = millisecondContent;
                }
            }
        }
    }, 10)
    setTimeout(countDownMove, 10)
}
//暂停计时
function pauseTheCountDownTime() {
    var pauseButton = document.getElementById("pauseTheCountDownTime");
    pauseButton.onclick = function () {
        if(pauseButton.innerHTML == "暂停计时"){
            stopTheCountDownMove = false;
            this.innerHTML = "开始计时";
        }else{
            stopTheCountDownMove = true;
            this.innerHTML = "暂停计时";
        }
    }
}
pauseTheCountDownTime();

//停止计时
function stopTheCountDownTime() {
    var stopButton = document.getElementById("stopTheCountDownTime")
    stopButton.onclick = function () {
        if (confirm("确定要停止吗？")) {
            countDownMinute.value = 0;
            countDownSecond.value = 0;
            countDownMillisecond.value = 0;
            stopTheCountDownMove = false;
        }
    }
}
stopTheCountDownTime();