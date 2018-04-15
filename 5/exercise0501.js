/* 闭包 */
function f1(){
    var x=1;
    function f2(){
        return x++;
    }
    return f2;
    }
    var f3=f1();
    console.log(f3());//1
    console.log(f3());//2

function createInc(starValue){
    return function(step){
        starValue+=step;
        return starValue;
    }
}
var inc=createInc(5);
var inc2=createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8  形成闭包，变量不会被释放
console.log(inc(1));//9
console.log(inc2(1));//重新创建了一个闭包6

var tmp =100;
function foo(x){
    var tmp=3;
    return function (y){
        console.log(x+y+(++tmp));
    }
}
var fee=foo(2);
fee(10);//16
fee(10);//17
fee(10);//18

function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //和相关作用域形成了一个闭包
bar(10); //输出什么？15 1
bar(10); //输出什么？15 2
bar(10); //输出什么？15 3

function fn() {
    var max = 10;
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//15

function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());1
console.log(d.count());1
console.log(c.reset());0
console.log(c.count());1
console.log(d.count());2

var max = 10;
var fn = function (x) {
    if(x > max){
        console.log(x);
    }
};
(function (f) {
    var max = 100;
    f(15);
})(fn);//15