window.onload=function(){
   console.log('windows');
    var div2=document.getElementById('div2');
    div2.onclick=function(){
        console.log('div2 click');
    }
}
function div1click(){
     console.log("div1 click");
} 
  

window.onload=function (e){
    console.log("e:",e);
    console.log(e.target);
   var div1=document.getElementById('div1');
    var div2=document.getElementById('div2');
    var eventHandler=function(e){
        //测试0
        //console.log(e.type);
        //console.log(e.target);

        // 测试1
        //console.log(e.clientX,e.clientY);
        //console.log(this, "-----", e.target.id);

        // 测试2
       //console.log(e);
        //console.log(e.__proto__);
        //console.log(e.__proto__.__proto__);
        //console.log(e.__proto__.__proto__.__proto__);
        //console.log(e.__proto__.__proto__.__proto__.__proto__);

       // 测试3
        //for(var k in e){
        //    console.log(k,e[k]);
        //}
        //for(var k in e.__proto__){
       //    console.log(k);
        //}
        //for(var k in e.__proto__.__proto__){
        //    console.log(k);
        //}
        //for(var k in e.__proto__.__proto__.__proto__){
        //    console.log(k);
        //}
    }
    div2.onclick=eventHandler;
    div1.onclick=eventHandler;

    //自定义事件监听、事件分发
    document.addEventListener("xx",function(){console.log("11")});
    document.dispatchEvent(new Event("xx"));
} 
  

/*//测试2 DOM0级事件处理

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };
    div2.onclick = eventHandler;
    //div2.onclick = null;//取消事件响应
}
*/



/*//测试3 DOM2级事件处理
window.onload=function(e){
   var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler=function(e){
        console.log(e.clientX,e.clientY)
    }
    div1.addEventListener('click',eventHandler);
   //div2.addEventListener("click",eventHandler);
    div2.addEventListener("click",eventHandler,false);
    div2.removeEventListener("click",eventHandler);//取消事件响应处理

    //自定义事件、事件分发、事件监听
    div2.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
    div2.dispatchEvent(new Event("MyEvent"));
}*/

//自定义事件（创建、分发、捕获的综合案例）
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // console.log(e.target);
        // console.log(this);
        var myEvent = new Event("MyEvent");
        // div2.dispatchEvent(myEvent);//若改我div1分发的话会怎样
        div1.dispatchEvent(myEvent);

    }
   div1.onclick = eventHandler;

    //下述代码部分，参见事件流部分
    div2.addEventListener("MyEvent",function (e) {
        console.log("div2 listener",e.type);
    },false);//改为true

    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式
}

  

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>事件及事件对象</title>
    <link rel="stylesheet" href="style.css">
    <script src="JS/demo01.js">
    </script>
</head>

<body>
    <!-- 点击事件和显示事件对象主要属性 -->
    <div id="div1" onclick="div1click()">
    </div>
    <div id="div2">
    </div>
</body>

</html> 
  

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Html事件响应</title>
   <link rel="stylesheet" href="style.css">
    <script src="JS/demo02.js">
</script>
</head>

<body>
    <!-- 点击事件和显示事件对象主要属性 -->
    <div id="div1" onclick="div1click()">
    </div>
    	<div id="div2">
    </div>
</body>

</html> 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Html事件响应</title>
    <link rel="stylesheet" href="style.css">
    <script src="JS/demo03.js">
</script>
</head>

<body>
    <!-- 测试1 html事件处理 缺点：JS和HTML耦合性太强-->
    <!-- <div id="div1" onclick="div1click()">
    </div>

    <div id="div2" ondrag="console.log('drag')">
    </div> -->

    <!-- 测试2 测试3 测试4 参见demo03.js -->
    <div id="div1">
    </div>
    <div id="div2">
    </div>
    
</body>

</html> 
  

#div1{
  width: 200px;
  height: 200px;
  background-color: red; 
  margin: 0px;
  padding: 0px; 
}

#div2{
  width: 100px;
  height: 100px;
  background-color: yellow; 
  padding: 0px;
  margin: 50px;
  position: absolute;
}

#div3{
 width: 50px;
  height: 50px;
  background-color: blue; 
  padding: 0px;
  margin: 25px;
  position: absolute;
}