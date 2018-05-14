/**数组 */
var arr2=new Array(5);
console.log(arr2);//长度为5的空数组

var arr3=new Array("5");
console.log(arr3);//["5"]

var arr22=[];
for(var i=0;i<5;i++){
    document.onclick=function(){
        arr22[i]=i;
    }
}
//异步 

/*数组特别之处在于，当使用使用2的32次方以内的非负整数作为属性名时，包括转换类型的数组，会作为数组元素而不是数组对象**/
var arr=[];
arr[1.23]="XX";
arr;
//[1.23: "XX"]
//1.23: "XX"length: 0__proto__: Array(0)

var arr=[];
arr[1.000]="hi";
arr;
//(2) [empty × 1, "hi"]

/**稀疏数组 不会遍历，并且最后一个逗号以后的元素不算其长度 */
var a1=[,"abc"];
console.log(a1.length);
for(var i in a1){
	console.log(i,a1[i]);
}
// 2
//1 abc

/**多维数组 */
var table =new Array(5);
for(var i=0;i<table.length;i++){
	table[i]=new Array(5);
}
for(var row=0;row<table.length;row++){
	for(var col=0;col<table[row].length;col++){
		table[row][col]=row*col;
	}
}
var product=table[2][4];


var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function (a){
	console.log(a,this);
},arr2);
console.log(arr1);
//2 (3) [1, 6, 7]
// (3) [1, 6, 7]
//(3) [1, 6, 7]
// (3) [2, 5, 8]

var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function (a,i){
	console.log(a,i,this);
	arr3[i]=a>arr2[i]?a:arr2[i];
},arr2);
console.log(arr3);