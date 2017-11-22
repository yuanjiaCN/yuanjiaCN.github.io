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

 'use strict';

 var fs = require('fs');

 var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
 ws1.write('使用Stream写入文本数据...\n');
 ws1.write('END.');
 ws1.end();

 var ws2 = fs.createWriteStream('output2.txt');
 ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
 ws2.write(new Buffer('END.', 'utf-8'));
 ws2.end();

 "use strict";
 var fs = require("fs");
 var rs = fs.createReadStream("readyFor.txt");
 var ws = fs.createWriteStream("copied.txt");
 rs.pipe(ws);

 "use strict"
 var http = require("http");
 var server = http.createServer(function (request,response) {
 console.log(request.method + ":" + request.url);
 response.writeHead(200,{"Content-Type":"text/html"});
 response.end("<h1>Hello world!</h1>");
 });
 server.listen(8080);
 console.log("Server is running at http://127.0.0.1:8080/");

 "use strict";
 var url = require("url");
 console.log(url.parse("http://user:pass@host.com:8080/path/to/file?query=string#hash"))

 'use strict';

 var path = require('path');

 // 解析当前目录:
 var workDir = path.resolve('.'); // '/Users/michael'

 // 组合完整的文件路径:当前目录+'pub'+'index.html':
 var filePath = path.join(workDir, 'pub', 'index.html');
 // '/Users/michael/pub/index.html'
 console.log(filePath)

 "use strict";

 var http = require('http');
 var server = http.createServer(function (request, response) {
 console.log(request.method + ":" + request.url);
 response.writeHead(200, {"Content-Type":"text/html"});
 response.end("<h1>Hello world!</h1>")
 });
 server.listen(8080);
 console.log("Server is running at http://127.0.0.1:8080/");

 'use strict';

 var path = require('path');

 var workDir = path.resolve('.'); // '/Users/michael'
 console.log(workDir);
 var filePath = path.join(workDir,"pub","index.html");
 console.log(filePath);

 "use strict";
 var
 fs = require("fs"),
 url = require("url"),
 path = require("path"),
 http = require("http");
 var root = path.resolve(process.argv[2] || ".");
 console.log("Static root dir :" + root);

 var server = http.createServer(function (request, response) {
 var pathname = url.parse(request.url).pathname;
 var filepath = path.join(root, pathname);

 fs.stat(filepath,function (err, stats) {
 if(!err && stats.isFile()){
 console.log("200" + request.url);
 response.writeHead(200);
 fs.createReadStream(filepath).pipe(response);
 } else {
 console.log("404" + request.url);
 response.writeHead(404);
 response.end("404 not found");
 }
 })
 });
 server.listen(8080);
 console.log("Server is runnning at http://127.0.0.1:8080/");


 console.log("Hello, world!");


 var greet = require("hello");
 var s = "Yuan";
 greet(s);//Hello, Yuan!

 process.nextTick(function () {
 console.log("第二句");
 });
 console.log("第一句");

 if(typeof (window) === "undefined"){
 console.log("node.js");
 } else {
 console.log("browser");
 };
 var fs = require("fs");
 fs.readFile("sample.txt", "utf-8", function (err,data) {
 if(err){
 console.log(err);
 }else{
 console.log(data);
 }
 });
 var fs = require("fs");
 fs.readFile("unexist.txt", "utf-8", function (err,data) {
 if(err){
 console.log(err);
 }else{
 console.log(data);
 }
 });

 var fs = require("fs");
 fs.readFile("sample.jpg",function (err,data) {
 if(err){
 console.log(err);
 } else {
 console.log(data);
 console.log(data.length + "bytes");
 console.log(data.toString("utf-8"));
 }
 });

 var fs = require("fs");
 var data = fs.readFileSync("sample.txt","utf-8");
 console.log(data);

 var fs = require("fs");
 var data = "Hello, Node.js";
 fs.writeFileSync("output1.txt", data);

 var fs = require("fs");
 var txt = fs.statSync("sample.txt").size;
 console.log(txt);//31
 var fs = require("fs");
 var rs = fs.createReadStream("sample.txt","utf-8");
 rs.on("data",function (chunk) {
 console.log("DATA:");
 console.log(chunk);
 });
 rs.on("end",function () {
 console.log("END");
 });
 rs.on("error",function (err) {
 console.log("error:" + err);
 });
 var fs = require("fs");
 var ws1 = fs.createWriteStream("blank.txt","utf-8");
 ws1.write("使用Stream写入文本数据...\n");
 ws1.write("END");
 ws1.end();

 var ws2 = fs.createWriteStream("blank2.txt");
 ws2.write(new Buffer("使用Stream写入二进制数据...\n","utf-8"));
 ws2.write(new Buffer("END","utf-8"));
 ws2.end();
 */
var fs = require("fs");
var rs = fs.createReadStream("text1.txt");
var ws = fs.createWriteStream("text2.txt");
rs.pipe(ws);

