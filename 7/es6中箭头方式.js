//ES6新增的箭头函数
var f = function (v) {
    return v + 1;
};
f(2);//返回3

var f = v => v + 1; //单参数可以不用（），单语句可以不用return关键字
var f = (v) => {return v + 1;};
f(2);//返回3

// 方法中的函数嵌套 this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了point
        }
        //内部嵌套函数
        function moveToY() {
 this.y = y;//this绑定到了point
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//{x:2，y:2

// ES6 中实现函数参数默认值的方法
var sum = function(a,b=4,c=5){
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

// ES6函数的参数默认值注意事项
// 带默认值的参数变量是默认声明的，所以函数体内不能再用let或const重复声明
function foo(x=5){
    let x = 1;//报错
    const x = 2;//报错
    var x = 3;//正常
}
foo();


//...Rest 相当于合并若干参数为一个数组，主要用于函数定义时，代替 arguments，组解决arguments的弊端
function f(...y){
    console.log(y);
}
f("a","b","c");//输出 ["a","b","c"]

function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3) // 10
//...Spread 扩展操作符 相当于解数组为分散的参数，主要用于函数调用时，...Rest的逆运算
function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);//等价于f("a","b","c");
f("a");//输出 "a",[]
f();//输出 undefined,[]
