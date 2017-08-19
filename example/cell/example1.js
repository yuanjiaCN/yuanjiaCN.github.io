var blackCell = document.getElementsByClassName("black");
var oContain = document.getElementsByClassName("contain");
var row = document.getElementsByClassName("row");
var computedStyle = document.defaultView.getComputedStyle(oContain[0]);
var Main = document.getElementById("main");
oContain[0].style.top = "-"+parseInt(computedStyle.height)/4 +"px";
var pass = true;//判断游戏是否失败
var pScore = document.getElementById("score");
var score = pScore.innerHTML;
var judgeIfEnd = 1;
var timer = null;
var oStart = document.getElementById("start");

var oButton = document.getElementsByTagName("button")[0];
var oSpeed = document.getElementById("oSpeed");
var cellSpeed;
var speed = 4;

oButton.onclick =function () {
    speed = oSpeed.value;
    return speed;
}



//判断游戏是否结束了，还原所有
function failure() {
    if (confirm("准备好重来一局了吗？")) {
        pass = true;
        pScore.innerHTML = 0;
        score = 0;
        for (var i = 0; i < oContain[0].children.length; i++) {
            oContain[0].removeChild(oContain[0].children[i]);
        }
    } else {
        judgeIfEnd = 0;
    }
}
//任意被点击，不过规定是目标物
Main.onclick = function(e){
    judge(e);
}

// 判断是否点击黑块，如果是，则分数加1
function judge(e) {

    if (judgeIfEnd != 0) {
        if (e.target.className.indexOf('black') == -1) {
            /*
             indexof()函数作用,如:
             a.indexOf(b),是判断,字符串a是否包含b,
             如果包含,就返回b所在的下标的序号,从0开始.
             如果不包含就返回-1
             */
            alert("恭喜你获得了"+score+"分")
            failure();
        } else {
            e.target.style.background = "white";
            e.target.className = "";   //防止可以一直点这个黑键加分，得让它的className不等于black
            e.target.parentNode.className += " click";
            score++;
            pScore.innerHTML = score;
        }
    }
}
function move() {
    clearTimeout(timer)
    if (judgeIfEnd != 0) {
        if (pass) {
            if (removeRow() != false) {
                if (oContain[0].style.top >= "0px") {
                    oContain[0].style.top = "-" + parseInt(computedStyle.height) / 4 + "px";
                    addNewRow();
                }
                timer = setTimeout(function () {
                    oContain[0].style.top = oContain[0].offsetTop + 4 + "px";

                    //setTimeout(move,30); //!!!注意在这里，毫秒数是叠加的
                }, 200/parseInt(speed))
                setTimeout(move,200/parseInt(speed));
            }
        } else {
            failure();
        }
    }
}

function randomNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function addNewRow() {
    var newRow = document.createElement("div");
    newRow.className = "row";
    oContain[0].prepend(newRow);
    for(var i=0;i<4;i++){
        newRow.append(document.createElement("div"));
    }
    var randomBlackCell = row[0].getElementsByTagName("div");
    randomBlackCell[randomNumber(0,3)].className = "black";
    removeRow();
}
addNewRow()
function removeRow() {
    var row = document.getElementsByClassName("row");
    if (oContain[0].children.length >= 6) { //其实是要让第二下方的触底，才算失败，并且移除最下方的那行，
                                            //这时候，已经创建出了新的一个row，加上最下方已经看不见的那行，一共是6个
            if(oContain[0].lastElementChild.className != "row click"){
               alert("恭喜你获得了"+score+"分")
               failure()
        }else{
                oContain[0].removeChild(oContain[0].lastElementChild);
            }
    }
}

function startButton() {
    oStart.onclick = function () {
        if(this.value == "开始游戏"){
            this.value = "暂停"
            judgeIfEnd = 1;
            move();
        }else{
            judgeIfEnd = 0;
            this.value = "开始游戏";
        }
    }
}
startButton()
