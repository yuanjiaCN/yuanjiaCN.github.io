/*
//process方法，在下一个循环中执行
"use strict";
 console.log("第一个");
 process.nextTick(function () {
 console.log("应该不会是第二个")
 });
 console.log("应该是第二个");
//process方法，在关闭前执行
 process.on("exit",function (code) {
 console.log("about to exit with code: "+ code);
 });
//判断是否是浏览器或者node.js
 if(typeof (window) === "undefined"){
 console.log("node.js");
 } else {
 console.log("browser");
 }

 var fs = require("fs");
 //异步
 fs.readFile("example.txt","utf-8",function (err,data) {
 if (err) {
 console.log(err);
 }else{
 console.log(data);
 }
 });
 console.log("同步先显示");

 //同步
 var fs = require("fs");
 try{
 var data = fs.readFileSync("example.txt","utf-8");
 console.log(data);
 }catch(err){
 console.log("出错")
 }

 console.log("因为之前用的是同步，所以这个会之后再显示");

 var fs = require("fs");
 var data = "Hello, Node.js";
 fs.writeFile("sampl.txt", data, function (err) {//可以是一个原本不存在的文件，用这个就可以直接创建一个，并且写上data中内容
 if (err) {
 console.log(err);
 } else {
 console.log("ok");
 }
 });
 */
"use strict";
var fs  = require("fs");
fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});