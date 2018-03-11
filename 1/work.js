/*
创建一个函数，函数的功能是数组去重，且从小到大排列
*/
function foo(Array){
    var len=Array.length;
    var temp;
    for(var j=0;j<len;j++){
      for(var i=1;i<len;i++){
        if(Array[j]==Array[j+i]){
          Array.splice(j+i,1);
        }
      }
    }
    for(var n=0;n<len;n++){
      for(var m=0;m<len-1-n;m++){
         if(Array[m]>Array[m+1]){
            temp=Array[m];
            Array[m]=Array[m+1];
            Array[m+1]=temp;
          }
      }
    }
    console.log(Array)
    }
    var arr1=[1,2,3,2,3,4,7,1,5,8,9,5];
    foo(arr1);