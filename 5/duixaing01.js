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

//访问属性的方法，注意：访问和设置时不加括号
var o = {
    _x:1.0,//前面加一个_用来表示这是私有的，不想别人看到的
    get x(){
        return this._x;//获取这个私有变量
    },
    set x(val){
        this._x = val;//改变这个私有变量的值
    }
};
console.log(o.x);//访问私有变量为1
o.x = 2;
console.log(o.x,o._x);//2 2
//o.hasOwnProperty("x");//访问器属性
//o.hasOwnProperty("_x");//数据属性



//访问器属性 实例二 只读
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//输出1 1 对象中没有set函数改变其中的值，o.x不改变x的值


// 访问器属性 实例三
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;//请输入正常年龄  没有满足逻辑条件，没有改变年龄的值
console.log(p1.age);//23

var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);//undefined  已经删除没有值

//访问属性的for循环练习
var obj2 = {
    id_1:2,
    id_2:4,
    id_3:6,
    id_4:8,
    id_5:10
};
