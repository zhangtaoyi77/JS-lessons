/** */
var date=new Date(2017,9,18,12,34,1);
console.log(date);//月份会加一
var date=new Date("2017-08-09")
console.log(date);//月份不会加一
var date=new Date();
console.log(date);//当前标准时间
console.log(date);
var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);
console.log(n2,typeof n2);
//Number {[[PrimitiveValue]]: 123} "object"
// 123 "number"
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1978 10 6 25 8
// -480
//1978 10 6 11 8
//1999 5 4 3 8
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());
//15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23
// Sat Apr 21 2012 ___ 2012/4/21
///2012-04-21T07:07:23.234Z

