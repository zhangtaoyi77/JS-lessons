function Person(name,age){
	this.name=name;
	this.age=age;
};
Person.prototype.showName=function(){
	console.log(this.name);
};
function Student(name,age,id){
	Person.call(this,name,age);
	this.id=id;
}
Student.prototype=Object.creat(Person.prototype);
Student.prototype.constructor=Student;
var s1=new Student("XXX",22,2017001);
var s2=new Student("WWW",23,2017002);
/**
 ƒ Student(name,age,id){
	Person.call(this,name,age);
	this.id=id;
}
 */

var superObj={
	x:1,
	y:2
};
var subObj_First=Object.create(superObj);
var subObj_Second=Object.create(superObj);
subObj_First.__proto__.x=5;
console.log(subObj_Second.x);//5

function Person(name){
	this.name=name;
};
Person.prototype.age=22;
Person.prototype.showName=function(){
	console.log(this.name);
};
function Student(id){
	this.id=id;
}
Student.prototype=new Person("Mike");
var s1=new Student(2017001);
var s2=new Student(2017002);
console.log(s1.name,s1.age,s1.id);//Mike 22 2017001
console.log(s2.name,s2.age,s2.id);//Mike 22 2017002
s1.__proto__.name="Jack";
console.log(s2.name);//Jack
s2.__proto__.__proto__.age=99;
console.log(s2.age);//99



