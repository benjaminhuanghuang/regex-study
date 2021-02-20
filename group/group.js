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

// 引用前一个子表达式, match aa or bb....
const double_char = /([a-z])\1/.exec("bb");
console.log(double_char)   // 


// 非捕获 ?: 不捕获子表达式 否则会捕获 abc 和 abcabc
const abcabc = /(?:abc){2}/.exec("abcabc")


// matacht the first
const ab = /ab|cd|ef/.exec('abcdef')
console.log(ab);