function foo(){
    var a=b=3;//var a=3;b=3 
}
foo();
console.log("a:",a);//不能输出
console.log("b",b);//b:3
/*非严格模式下，可以删除没有定义的属性和方法，不会报错，但是严格模式会报错*/ 
function fun(){
    "ues strict"
    console.log(this);//严格模式下undefined 非严格模式下window
}
function isStrictMode(){
    if(this==undefine){
        return true;
    }
    else if(this==window)
    {
        return fasle;
    }
}
var i=65;
switch(new Boolean(true)){
    case(i>=60):
    console.log("及格");
    case(i<60):
    console.log("不及格");
    default:
    console.log("输出default");
}//switch 比较时使用全等操作符，===，不会发生隐式类型转换，所以输出default
var i = 65;
switch(true){ 
    case i>=60:
        alert('及格');
        break;
    case i<60:
        alert('不及格');
        break;
    default:
        alert('default');
}
/*Boolean转换 */
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(0));//false
console.log(Boolean(NaN));//false
console.log(Boolean(1));//true
console.log(Boolean(""));//false
console.log(Boolean("abc"));//true
console.log(Boolean({}));//true

if(new Boolean(false)){
    console.log("执行");
}//执行
/*Number转换 */
console.log(Number(undefined));//NaN
console.log(Number(null));//NaN
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0
console.log(Number("abc"));//NaN
console.log(Number("123.345xx"));//NaN
console.log(Number("32343,345xx"));//NaN
console.log(Number({x:1,y:2}));//NaN

/*String 转换 */
console.log(String(undefined));//undefined
console.log(String(null));//null
console.log(String(true));//true
console.log(String(false));//false
console.log(String(0));//0
console.log(String(234));//234
console.log(String({x:1,y:2}));//[Object Object]




