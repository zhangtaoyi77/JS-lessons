/** */
var proObj={z:3};
var obj=Object.create(proObj);
obj.x=1;
obj.y=2;
console.log(obj.x);
console.log(obj.y);
console.log(obj.z);
"z" in obj;
obj.hasOwnProperty("z");//此方法用于检测对象在排除原型链的情况下是否具有某个属性
obj.z=5;
obj.hasOwnProperty("z");
obj.z;
proObj.z;
obj.z=8;
delete obj.z;
obj.z;
delete obj.z;
obj.z;

// 要求掌握下述方法的使用
// Object.keys() 返回所有自有（非继承）可枚举属性的键
// Object.getOwnPropertyNames()返回所有自有（非继承）键，包括不可枚举
// Object.prototype.hasOwnProperty() 判断自身是否有该属性，不包括可枚举的属性
// Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举
// in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
// for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
// 思考Object静态方法和Object.prototype原型方法的区别（都共享了方法，使用上有什么区别）
var o3 = {};
o3.y = "yyy";
Object.defineProperty(o3,"x",
    {configurable:true,enumerable:false,writable:true,value:"xxx"}
);
console.log(Object.keys(o3));//是否包含可枚举属性的键？
console.log(Object.getOwnPropertyNames(o3));//是否包含可枚举属性的键？

console.log(o3.hasOwnProperty("x"));
console.log(o3.propertyIsEnumerable("x"));

for(var k in o3){ //遍历不到x属性
    console.log(k,o3[k]);
}
console.log("x" in o3,"y" in o3);// in 和 for...in 的区别 关于可枚举属性特性
console.log(o3.hasOwnProperty("x"),o3.hasOwnProperty("y"));//是否关心可枚举


//遍历属性的综合实例
var o4 = {};
o4.a = "aaa";
Object.defineProperty(o4,"b",
    {configurable:true,enumerable:false,writable:true,value:"bbb"}
);
var o5 = Object.create(o4);
o5.c = 234;
Object.defineProperty(o5,"d",{enumerable:false,value:567});
for(var k in o5){
    if(o5.hasOwnProperty(k)){
        console.log("o5 自有可遍历属性：",k,o5[k]);
    }else {
        console.log("o5 非自有可遍历属性：",k,o5[k]);
    }
}
console.log(o5.propertyIsEnumerable("a"),
    o5.propertyIsEnumerable("b"),
    o5.propertyIsEnumerable("c"),
    o5.propertyIsEnumerable("d")
);//多少个true 多少个false
console.log("a" in o5,"b" in o5,"c" in o5,"d" in o5);//多少个true 多少个false
console.log(Object.keys(o5));//只显示自身可枚举的属性
console.log(Object.getOwnPropertyNames(o5));//返回一个数组，包含自身所有属性，包括不可枚举的属性

//console.log(o4.isPrototypeOf(o5));



/** */
function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.sayHi=function(){
	console.log("i am"+this.name+"and my age is"+this.age);
}
var p=new Person("Mike",23);
p.sayHi();
/**作用域传递，this */
var a=1;
function f1(){
	var b=2;
	function f2(){
		console.log(a,b);
	}
	f2();
}
f1();//1,2 变量会进行作用域调试
/**this 修改属性 添加属性 */
var a=10,b="hi";
function thisTest(){
	this.a=20;
	delete this.b;
	this.c="新添加的属性";
}
thisTest();
console.log(a,c);//20 新添加的属性