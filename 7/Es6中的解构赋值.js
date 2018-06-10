/**解构赋值 */
let [a,b,[c],d]=[{x:1},2,[true],"ab"];
console.log(a,b,c,d);
//如果没有匹配值，结果为undefined
/**解构赋值允许有默认值 */
var [foo=3]=[];
console.log(foo);//结果为3，默认值
function f2(){
    return 2;
}
let[x7=f2()]=[1];
console.log(x7);//结果为1

function f2(){
    return 2;
}
let[x7=f2()]=[];
console.log(x7);//结果为2 使用默认值
//对象的结构赋值
var{bar2,foo2}={foo2:"ccc",bar2:"ddd"};
console.log(foo2,bar2);//ccc ddd
var {baz3}={foo3:"ccc",bar3:"ddd"};
console.log(baz3);//undefined
var {foo4:baz4}={foo4:"aaa",bar4:"bbb"};
console.log(baz4);//aaa  此时foo4既是一个匹配符，不会影响值 如果将baz4换成bar4结果不变

//字符串数字赋值
const [a,b,c,d,e]='hello';
console.log(a);//"h"
console.log(b);//"e"
console.log(c);//"l"
console.log(d);//"l"
console.log(e);//"o"
let{toString:s1}=123;
console.log(s1);//function toString(){
    //[native code]
s1===Number.prototype.toString//true
//函数参数的结解构赋值
function move1({x=0,y=0}={}){
    return [x,y];
}
console.log(move1({x:3,y:4}));
console.log(move1({x:3}));
console.log(move1({}));
console.log(move1());
//[3, 4]
// [3, 0]
// [0, 0]
// [0, 0]
//
function move2({x,y}={x:0,y:0}){
    return [x,y];
}
console.log(move2({x:3,y:4}));
console.log(move2({x:3}));
console.log(move2({}));
console.log(move2());
//[3, 4]
//[3, undefined]
//[undefined, undefined]
//[0, 0]






