var name="Jack";
var person={
    name,
    showInfo(){
        console.log(this.name);
    }
}
person.showInfo();
/**values和entries的静态方法 */
var obj={foo:"bar",baz:42};
Object.values(obj);
var obj={foo:"bar",baz:42};
Object.entries(obj);
for(var [k,v] of Object.entries(obj)){
    console.log([k,v]);
}
// ["foo", "bar"]
// ["baz", 42]

/**对函数的扩展 */
//es5中
var max=function(){}
undefined
var max=function(a,b){
return a>b?a:b;
};
max(2,3);
//3
//es6中
var max=(a,b)=>a>b?a:b;
max(2,3);
//3