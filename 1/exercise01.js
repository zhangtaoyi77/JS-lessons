var num;
var str;
var b;
var n;
var u;
/*var num = 1;
var str = "some string";
var b = true;
var n = null;
var u = undefined;*/ 
console.log(typeof num);
console.log(typeof str);
console.log(typeof b);
console.log(typeof n);
console.log(typeof u);
/*如果不给赋值，仍然输出对应的类型
number
string
boolean
object js的特别之处，null为对象类型
undefined*/
console.log(typeof Number); //function
console.log(typeof String); //function 
console.log(typeof Boolean); //function
console.log(typeof Object); //function
console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof RegExp); //function
console.log(typeof Error); //function
console.log(typeof Math); //object
console.log(typeof JSON);//object



/*判等步骤
首先判断是什么==还是===
1.如果是===，判断类型是否相同，如果不相同直接是false；如果类型相同，基本类型数值等则为true，反之为false，引用类型是否为同一个引用，相同为true
2.如果是==，先进行类型转化，如果是数值类型，值相同则为true，如果为引用类型，同为一个引用则为true
*/
var a1 = 2;
var a2 = "2";
console.log(a1==a2);//true 
console.log(a1===a2);//false

var b1 = {};
var b2 = {};
console.log(b1==b2);//false 引用类型，非同一个引用 
console.log(b1===b2);//false 同上
console.log(b1===b1);//true 同一个引用 

var c1 = 23;
var c2 = new Number(23);
console.log(c1==c2);//true 引用类型转换为基本数据类型
console.log(c1===c2);//false

var str2 = "abc";
console.log(str2.length);
str2.length = 1;
console.log(str2);//3  abc  原理是原始类型变量的不可变性；在访问基本类型变量属性时，会创建一个临时的包装对象，访问的是包装对象的属性，如果改变
//也是改变包装对象的属性，不会改变原始类型变量的
var arr=["apple","pear","banana"];
console.log(arr.length);
arr.length=2;
console.log(arr);
3
(2) ["apple", "pear"]
//？？？？？

//typeof是基本数据类型
//instanceof 引用类型变量，左侧为对象，右侧为类型，结果为true false
console.log({}instanceof Object);//true
console.log([]instanceof Object);//true
console.log([]instanceof Array);//true
