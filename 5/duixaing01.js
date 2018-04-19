/** 对象 */
var me={
	age:100,
	name:'unknow',
	show:function(){
		console.log("我是"+this.name+"今年"+this.age+"岁了!");
	}
}
me.show();
console.log(String instanceof Object);
// true
var o={
	_x:1.0,
	get x(){
		return this._x;
	},
	set x(val){
		this._x=val;
	}
};
console.log(o.x);//1
o.x=2;
console.log(o.x,o._x);//2 2
/**原型 */
var o={
	x:12
}
o.__proto__===Object.prototype;//true
//属性值设置及特性
var person ={name:"jack"};
Object.defineProperty(person,"name",{
	writable:false,
	configurable:false,
	enumerable:true,
	value:"mike"
});
console.log(person.name);
// mike

person.name="lucy";
console.log(person.name);
//mike

delete person.name;
//false
console.log(person.name);
//mike  谨慎使用

//给对象添加属性
//第一种直接给对象添加属性，默认的属性特性值为true
var obj={
	x:1,
	y:2
};
obj.z=3;
for(var k in obj){
	console.log(k,obj[k]);
}
// x 1
//y 2
// z 3

//第二种通过defineProperty添加属性，属性特征的默认值为false
var obj={
	x:1,
	y:2
};
obj.z=3;
Object.defineProperty(obj,"w",{
	value:456,configurable:true
});
for(var k in obj){
	console.log(k,obj[k]);
}
//x 1
//y 2
// z 3 遍历不到"w"

