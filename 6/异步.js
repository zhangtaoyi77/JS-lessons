// 案例二 异步执行的回调(通过定时器模拟)
var LTimeOperation = function(taskID){
    var id = taskID;
    //思考什么时候将方法定义在构造函数内，什么时候定义在构造函数的prototype属性上
    this.go = function(callback){
        console.log('Start LTimeOperation #'+id);
        var delay = parseInt((Math.random() * 10000000) % 5000);
        setTimeout(function(){
            console.log('task #'+id+' cost '+delay+' ms.');
            callback();
        },delay);
    }
};
function f2(){
    console.log('this is f2, i am callback!\n');
}
for(var i = 0;i<5;i++){
    var task = new LTimeOperation(i);
    task.go(f2);
}



//发布订阅 实例/////////////////////
var Subject = function(){
    var _observer = [];
    this.attach = function(observer){
        _observer.push(observer);
    };
    this.detach = function(){
        _observer.pop();
    };
    this.notify = function(msg){
        for(var i=0;i<_observer.length;i++){
            _observer[i].update(msg);
        }
    };
    this.print = function(){
        console.log(_observer.length);
        console.log(_observer);
    };
};
var Observer = function(name){
    this.update = function(msg){
        console.log('i am '+name+',and i get the message: '+msg);
    };
};
var sub = new Subject()
sub.attach(new Observer('a'));
sub.attach(new Observer('b'));
sub.notify('hello');
//sub.print();

setTimeout(function(){
    var c = new Observer('c');
    sub.detach();
    sub.attach(c);
    sub.notify('world');
    //sub.print();
},5000);



//XMLHttpRequest Get 请求
//后端代码参见参见NodeAjaxTest01.js
//实例一
var xhr = new XMLHttpRequest();
 if (!xhr) {
     console.log("xhr 创建失败！！");
 }
xhr.onreadystatechange = function () {
    //console.log(xhr.readyState,xhr.status);
    if (xhr.readyState == 4) {
        //表示服务器的相应代码是200；正确返回了数据
        if (xhr.status == 200) {
            var message = xhr.responseText;
            console.log(message);
        }
    }
};
xhr.open("get", "http://127.0.0.1:8080?getInfo=MyGetInformation", true/*异步*/);
//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post需增加
xhr.send();




// 域名检测
// http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=qq.com 





var http = require("http");
var url = require("url");

http.createServer(function (req, res) {//创建服务器
    console.log(Object.keys(req),"___",Object.keys(res));
    console.log("req.url：",req.url);
    var getDataObj = url.parse(req.url,true).query;//parse函数中第二个参数为true的话返回一个对象
    var getDataStr = url.parse(req.url).query;//parse函数中第二个参数为true的话返回一个对象

    res.writeHead(200, {
        "Content-Type": "text/plain",
        // res.writeHead(200, {"Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
        "Access-Control-Allow-Methods": "GET, POST"
    });
    setTimeout(function () {
        res.end("你好，我已收到你发的信息："+getDataStr);
    },20000*Math.random());
    res.end("你的输入信息是："+getDataStr);
}).listen(8080,"127.0.0.1");
console.log("start server!");
