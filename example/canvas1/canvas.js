var drawing = document.getElementById("drawing");
if(drawing.getContext){
    var context = drawing.getContext("2d");
    //绘制两个矩形中间缺一块+阴影
/*
 //context.fillStyle = "#ff0000";
 var gradient = context.createLinearGradient(0,0,50,50);
 gradient.addColorStop(0,"white");
 gradient.addColorStop(1,"black");
 context.fillStyle = gradient;
 context.strokeStyle = "green";
 context.shadowOffsetX=5;
 context.shadowOffsetY=5;
 context.shadowBlur = 4;
 context.shadowColor = "rgba(0,0,0,0.5)";
 context.fillRect (0,0,50,50);
 context.strokeRect(0,0,50,50);
 context.fillStyle = "rgba(0,0,255,0.5)";
 context.fillRect(30,30,40,40);
 context.clearRect(40,40,5,5);
*/


    //绘制钟
    /*
    context.beginPath();
    context.arc(100,100,99,0,2*Math.PI,false);
    context.moveTo(6,100);//必须标在圆的起点
    context.arc(100,100,94,Math.PI,-Math.PI,false);
    context.moveTo(100,100);
    context.lineTo(100,15);
    context.moveTo(100,100);
    context.lineTo(35,100);
    context.stroke();
    context.textAlign = "center"   //不然默认左对齐，12就不在中间了
    context.textBaseline = "middle";//y坐标表示文本中间
    context.fillText("12",100,20)
    */
    //measureText()
    /*
    var fontSize = 100;
    context.font = fontSize+"px Arial";
    while(context.measureText("Hello  worild!").width>140){
        fontSize--;
        context.font = fontSize +"px Arial";
    }
    context.fillText("Hello world!",10,10);
    context.fillText("Font size is "+ fontSize + "px",10,50)
    */
    //绘制图像
    var image  = document.getElementById("aPicture");
    image.onload = function () { //这句话是必须的！！！不然就不会有图片出现在画布上
        //模式
        /*
        pattern = context.createPattern(image,"repeat");
        context.fillStyle = pattern;
        context.fillRect(10,10,150,150)
        */
        context.drawImage(image,0,0);
        imageData = context.getImageData(0,0,image.width,image.height);
        data = imageData.data;
        for (i=0;i<data.length;i+=4 ){
            red = data[i];
            green = data[i+1];
            blue = data[i+2];
            alpha = data[i+3];
            average = Math.floor((red+green+blue)/3);
            data[i] = average;
            data[i+1] = average;
            data[i+2] = average;
        }
        imageData.data = data;
        context.putImageData(imageData,0,0)
    }
}