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














