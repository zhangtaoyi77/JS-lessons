var x="1";
x+=1;
console.log(x);

var x="1";
x/=1;
console.log(x);


var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x===obj2.x);
console.log(obj1.y===obj2.y);
console.log(obj1.z===onj2.z);



console.log(true&&new Boolean(true));
console.log(true&&new Boolean(false));

typeof(NaN);//"number"

/* */
function foo(a){
    console.log(a>90&&"优秀"||a>75&&"良"||a>60&&"及格"||a<60&&"不及格");
}


console.log((new Boolean(false))&&234);//234
console.log((new Boolean(false))||234);//返回对象 Boolean(false)


/*间接调用*/
objA={name:"AA"};
objB={name:"BB"};
objA.foo=function(){
console.log(this.name);
}
objA.foo();//AA
objA.foo.call(objB);//BB
objA.foo.apply(objB);//BB
//call与apply的区别，就是参数形式，apply以数组的形式传入

function text(){
    console.log(arguments);
    console.log(test.arguments==arguments,argument)
}

/*在use strict严格模式下,this返回undefined，而在非严格模式下，this返回window*/
"use strict";
function test1() {
    console.log("this is",this);
}
test1();//this is undefined

function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//this is Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

/*调用参数数量问题*/
//实参数量大于形参的数量，通过函数对象属性arguments获得所有参数、类数组对象
//arguments对象的长度是由实参个数决定而不是形参个数确定。形参是函数内部重新开辟内存空间存储的
//变量，但是与其arguments对象内存空间并不重叠。
function f(a, b, c){
    alert(arguments.length);   // result: "2"
    a = 100;
    alert(arguments[0]);       // result: "100"
    arguments[0] = "qqyumidi";
    alert(a);                  // result: "qqyumidi"
    alert(c);                  // result: "undefined"
    c = 2012;
    alert(arguments[2]);       // result: "undefined"
  }
  f(1, 2);

  //arguments属性callee，arguments.callee返回此arguments对象所在当前函数引用
  //在使用函数递归调用时推荐使用arguments.callee代替函数名本身
  //但是callee在严格模式下被禁用
  function count(a){
         if(a==1){
             return 1;
         } 
         return a + arguments.callee(--a);
     }
    var mm = count(10);
    alert(mm);
//实参数量小于形参数量，js中没有函数重载，只会代替

function sum(a,b){
    return a+b;
    }
    sum(4);//NaN

function sum(a,b){
    return a+b;
    }
    sum(4,5,6);//9

function sum(a,b){
    b=b||6;
    return a+b;
    }
    sum(4);//10
var sum = function(a,b,c){
            b = b||4;
            c = c||5;
            return a+b+c;
        };
        console.log(sum(1,2,3));//6
        console.log(sum(1,2));//8
        console.log(sum(1));//10 这样会造成错误

//值传递
var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);
    x = 2;//step 2222
    console.trace("a:",a," x:",x);//step 3333
}
console.trace("a:",a);
foo(a);// step 1111
console.trace("a:",a); // step 4444  a仍为1
//引用传递
var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);
    o.x = 3;// step 2222
    console.trace("obj.x :",obj.x," o.x :",o.x);// step 3333
}

console.trace("obj.x :",obj.x);
fee(obj);// step 1111
console.trace("obj.x :",obj.x);//step 4444  obj.x被改写为3
//打开index.html 学习chrome的Sources调试
document.onclick = function () {//测试Event Listener Breakpoints
    alert("click");
    //var body =  document.getElementsByName("body");
};