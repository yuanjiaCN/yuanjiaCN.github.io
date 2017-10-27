var drawing = document.getElementById("drawing");
var context = drawing.getContext("2d");
clockWidth = drawing.width;
context.translate(clockWidth / 2,clockWidth / 2);//这句话一定要写在外面！不然每执行一次圆心就会移动这里标定的距离

function circleClock() {
    context.strokeStyle = "rgba(220,150,150,0.8)";
    context.fillStyle = "rgba(50,50,50,0.8)"
    context.lineWidth = 5;
    if (drawing.getContext) {
        context.beginPath();
        context.arc(0, 0, 0.05 * clockWidth, 0.1*Math.PI,  0.9*Math.PI, false);
        context.moveTo(0.065 * clockWidth-(0.05 * clockWidth)/Math.PI, 32-0.05 * clockWidth);//必须标在圆的起点
        context.arc(9+0.075 * clockWidth, 18, 0.05 * clockWidth, -0.9*Math.PI,  -0.1*Math.PI, false);
        context.stroke();
        context.font = "20px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
    }
}
circleClock();
/*
function number(num) {
    for(i = 0; i<num ;i++){
        context.arc(2*(i-1)*0.05 * clockWidth, 0, 0.05 * clockWidth, 0,  2*Math.PI, false);
        context.moveTo((3+2*i)*0.05 * clockWidth, 0);//必须标在圆的起点
    }
}
number(3);
*/
