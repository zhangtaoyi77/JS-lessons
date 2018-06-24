/**使用区域锁死现象 */
var temp=new Date();
function f(){
    console.log(temp);
    if(false){
        let temp='hi!';
    }
}
f();//结果不会报错，会输出时间
//let 变量所在的区域为if条件块，在这个条件块中，temp将不会向外层寻找temp
var temp=new Date();
function f(){
    console.log(temp);
    //if(false){
        let temp='hi!';//此时let存在函数法f()中，他的上一行代码是输出，但是let不会变量提升，也不会向外层代码寻找temp
    //}
}
f();//结果报错

 /**let，const不能重复声明定义 var可以 */
/**var会变量提升，此时i为全局变量，for循环中的函数i*2形成闭包，这里的i是全局的，在执行完i=3，才会执行表达式i*2，所以会是6 可以用立即执行函数解决*/
 var callback=[];
 for(var i=0;i<=2;i++){
     callback[i]=function(){
             return i*2;
         }
 }
 console.log(callback[0]());//6
 console.log(callback[1]());//6
 console.log(callback[2]());//6

 /**let声明变量 回形成块作用域，for循环一次形成一次新的作用域*/
 var callback2=[];
for(let i=0;i<=2;i++){
	callback2[i]=function(){
			return i*2;
		}
}
console.log(callback2[0]());
console.log(callback2[1]());
console.log(callback2[2]());
//0
//2
//4
