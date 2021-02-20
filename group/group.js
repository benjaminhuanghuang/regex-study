/*
() 有两个作用
1. 分组，子表达式
2. 引用



*/


const matches = /(ab){2}/.exec("abab");
console.log(matches)   // ab



const year_month_day = /(\d{4})-(\d{1,2})-(\d{1,2})/.exec("2020-6-10");
console.log(year_month_day)   // 

console.log(RegExp.$0)   // 
console.log(RegExp.$1)   // 
console.log(RegExp.$2)   // 
console.log(RegExp.$3)   //    