var a= new Array(5);//创建一个长度为5的数组
var b=new Array("5");//数组元素为5
//访问一个对象的原型
Object()._proto_ ===Function.prototype;
//caller 属性
function test(){
    if(test.caller==null){
    console.log("test is called from the toppest level");
    }
    else
    {
    console.log("test is called from the function");
    console.log(test.caller.toString());
    }
    }
    function foo(){
    test();
    }
    foo();//test is called from the function
        // function foo(){
        //test();
        //}
        function f1(x){
	return x+1;
}
function f2(y){
	return y*y;
}
function f3(j){
	return j+1;
}
function foo(x,y,f1,f2){
	return 
}

function foo(){}
console.log(foo); //function
console.log(typeof foo); //true
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true

console.log(typeof Function);//function 
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object

console.log(typeof new Function());//function
console.log(typeof new Array());	//object
console.log(typeof new Date());//object

console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//true
console.log(Math instanceof Object);//false
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//false

console.log(a);//undefined 1 
var a = 1;
console.log(a);
/*
var a;
console.log(a);
a = 1;
console.log(a);
 */
console.log(a,b);//输出什么
var b = 23;
console.log(a,b);//输出什么
//var a = b;//undefined undefined
// undefined 23
// 23 23
console.log(a,b);
/*

*/
console.log(obj1,obj2);
var obj1 = {x:23};
console.log(obj1,obj2);
var obj2 = obj1;
console.log(obj1,obj2);
obj2.x =25;
console.log(obj1,obj2);
/*undefined undefined
 {x: 23} undefined
 {x: 23} {x: 23}
 {x: 25} {x: 25}*/

 foo();
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

/*function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2 */

foo();
var foo = function(){
    console.log("foo");
};//foo

