//逻辑运算符
console.log(2>1&&4<5);//true
console.log(true&&(!2));//false
console.log(false&&("2" == 2));//false
console.log(false&&false);//false

console.log(2>1||4<5);//true
console.log(true||(!2));//true
console.log(false||("2" == 2));//true
console.log(false||false);//false

console.log(1===1.0);//true
console.log(Number("xyz"));//NaN
console.log(3/0);//Infinity\

var a = 10;
console.log(++a);//11

var b = 20;
console.log(b++);//20

//字符串拼接
var a = "abc";
var b = "def";
var c = a+b;
console.log(c);//abcdef

//字符串常用方法 concat接在一起  slice 返回选定的元素（start,end）start必须值 是开始的位置，如果为负数，从数组尾部开始计算
//最后一个为-1，倒数第二个为-2,；end 为可选值 数组片段结束的数组下标，如果没有改参数，从start到数组结束，如果是负数，则规定
//是从数组尾部算起的元素
//返回一个新的数组，从start到end（不包含自己）,
//该方法不会修改一个数组，只会返回一个子数组，如果想删除一段元素用.splice方法
var str1 = "aaa".concat("bbb");//返回字符串
var str2 = "abcdef".slice(2);//cdef
var str3 = "abcdef".slice(2,5);//cde
var str4 = "abcdef".slice(-2);//ef
var str5 = "abcdef".slice(2,-2);//cd

//split用法 用于将一个字符串分割成字符串数组（separate，howmany），separate必需，字符串或正则表达式，从该参数指定的地方分割
//howmany可选，该参数指定返回的数组的最大长度，如果设置，则返回的子串不会多余这个参数指定的数组，如果没有设置，整个字符串会被
//分割，不考虑长度
var str6 = "abcdef".split("c");//["ab","def"]
var str7 = "abcdef".split("c",1);//["ab"]
var str8 = "abcdef".split("c",2);//["ab","def"]
var str0="abcdefghj".split("hj",2);
console.log(str0);//(2)["abcdefg",""] 空也会表示


//charAt 用于返回指定位置的字符（index），字符串的位置，字符的下标
var str9 = "abcdef".charAt(2);//c
//indexOf 返回某个指定字符首次出现的位置，（searchvalue，fromindex）searchvalue必须，规定检索字符串的值，fromindex可选整数
//规定在字符中开始检索的位置，合法范围是0~length-1，如果省略该参数，则从字符串首开始
var str10 = "abcdefabcdef".indexOf("d",1);//3
var str11 = "abcdefabcdef".indexOf("d",4);//9
str0="abcdefghij".indexOf("c",3);
console.log(str0);//如果该字符没有出现，则返回-1
//trim（）返回已移除前导空格、尾随空格和行终止符的原始字符串
var str12 = "    abc def     \r\n  ".trim();

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表截取长度 
console.log(str13,str14);//str13 未受到破坏 abcdefghijklmn cdefg

var str15 = str13.substring(2,5);//后一个参数代表第几个end 截取到第几个，不包括本身
console.log(str13,str15);//str13 未受到破坏 abcdefghijklmn cde


////循环语句
for(var i=0;i<10;i++){
    console.log("i:",i);
}
console.log("out of for:",i);//此时为多少 10

//break和continue
//练习输出0到20之间的奇数
for(var i=0;i<20;i++){
    if(i%2==0){
        continue;
    }
    coonsole.log(i);
}