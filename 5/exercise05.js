/*IIFE */
//IIFE 立即执行表达式 小括号的用法（两种）
(function min(x,y){
	return x<y?x:y;
}(2,3)); //2

(function min(x,y){
	return x<y?x:y;
})(2,3);  //2


// 要用分号结尾
(function() {
    console.log("111");
})();//111
(function () {
    console.log("222");
})()  //报错
//与运算符的结合 （短路原则）
!function(x,y){
    return x==y?true:false;//false   // === 返回什么 true
}("5",5);

//避免全局污染
//通过IIFE解决变量共享问题
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}
// Thu Apr 12 2018 10:30:41 GMT+0800 (中国标准时间) 0
// Thu Apr 12 2018 10:30:42 GMT+0800 (中国标准时间) 1
// Thu Apr 12 2018 10:30:43 GMT+0800 (中国标准时间) 2
// Thu Apr 12 2018 10:30:44 GMT+0800 (中国标准时间) 3
// Thu Apr 12 2018 10:30:45 GMT+0800 (中国标准时间) 4



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
console.log(inc(1));
console.log(inc2(1));//重新创建了一个闭包

var tmp =100;
function foo(x){
    var tmp=3;
    return function (y){
        console.log(x+y+(++tmp));
    }
}
var fee=foo(2);
fee(10);
fee(10);
fee(10);
