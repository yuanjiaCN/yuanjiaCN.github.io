var blackCell = document.getElementsByClassName("black");
var oContain = document.getElementsByClassName("contain");
var row = document.getElementsByClassName("row");
var computedStyle = document.defaultView.getComputedStyle(oContain[0]);
var Main = document.getElementById("main");
var pScore = document.getElementById("score");
var score = pScore.innerHTML;
var judgeIfEnd = 1;//控制move开关
var timer = null;
var oStart = document.getElementById("start");
var oButton = document.getElementsByTagName("button")[0];
var oSpeed = document.getElementById("oSpeed");
var cellSpeed;
var speed = 4;
var judgeIfReject = 1;

oButton.onclick = function () {
    speed = oSpeed.value; //speed设置为全局函数可以在别的函数内部取到
    return speed;
}

//判断游戏是否结束了，还原所有
function failure() {
        judgeIfEnd = 0;//不论如何，都让move停止，只有再次点开始游戏才可以真正的开始游戏。给玩家一点时间准备。
        oStart.value = "开始游戏";
    if (confirm("准备好重来一局了吗？")) {
        pScore.innerHTML = 0;
        score = 0;
        judgeIfReject = 1;
        for (i = 0; i < oContain[0].children.length; i++) {
            oContain[0].removeChild(oContain[0].children[i]);
        }
    } else {
        judgeIfReject = 0; //已经放弃重新玩，设置后使点开始游戏/暂停不再可以继续计数
    }
}

//任意被点击，不过规定是目标物,而非其包裹元素
Main.onclick = function (e) {
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
            e.target.parentNode.className += " click";//给黑块所在的行加个代表点击过得class
            score++;
            pScore.innerHTML = score;
        }
    }
}

function move() {
    clearTimeout(timer)
    if (judgeIfEnd != 0) { //如果游戏失败就不要再move了
                if (oContain[0].style.top >= "0px") {
                    oContain[0].style.top = "-" + parseInt(computedStyle.height) / 4 + "px";
                    addNewRow();
                }
                timer = setTimeout(function () {
                    oContain[0].style.top = oContain[0].offsetTop + 4 + "px";
                    //setTimeout(move,30); //!!!注意如果写在这里，毫秒数是叠加的
                }, 150 / parseInt(speed))
                setTimeout(move,150 / parseInt(speed));// 改变毫秒数动画比较流畅，如果改速度动画可能会卡
        }
    }

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //Math类型的随机数公式
}

function addNewRow() {
    var newRow = document.createElement("div");
    newRow.className = "row";
    oContain[0].prepend(newRow);
    for(i = 0; i < 4; i++){
        newRow.append(document.createElement("div"));
    }
    var randomBlackCell = row[0].getElementsByTagName("div");
    randomBlackCell[randomNumber(0, 3)].className = "black";
    removeRow();
}
addNewRow()

function removeRow() { //视野范围外的已经被点击的行可以移除了。
    var row = document.getElementsByClassName("row");
    if (oContain[0].children.length >= 6) { //其实是要让第二下方的触底，才算失败，并且移除最下方的那行，
                                            //这时候，已经创建出了新的一个row，加上最下方已经看不见的那行，一共是6个
            if(oContain[0].lastElementChild.className != "row click"){//没有被点击过的黑块所在行触底
               alert("恭喜你获得了" + score + "分")
               failure()
        } else {
                oContain[0].removeChild(oContain[0].lastElementChild);
            }
    }
}

function startButton() {
        oStart.onclick = function () {
            if (judgeIfReject != 0) { //如果玩家失败后不愿意重新开始，那么点这个按钮会让他再次确定是否要重新开始
                if (this.value == "开始游戏") {
                    this.value = "暂停";
                    judgeIfEnd = 1;
                    move();
                } else {
                    judgeIfEnd = 0;
                    this.value = "开始游戏";
                }
            } else {
                failure();
            }
        }
    }
startButton()