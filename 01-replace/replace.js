let reg = /all/;
console.log('This is all I have.'.replace(reg, 'ALL'));    // This is ALL I have.


/*
    regular expression group backward reference
    含有分组的正则表达式匹配成功时，将子表达式匹配到的内容，保存到内存中一个以数字编号的组里，
    可以简单的认为是对一个局部变量进行了赋值，这时就可以通过反向引用方式，引用这个局部变量的值。
*/
'05/28/2018'.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$1-$2');
// => 2018-05-28

// Markdown to html
'[Test](https://www.test.com/)'.replace(/\[(.+)\]\((http(|s):\/\/.+)\)/, '<a href="$2">$1</a>');
// => <a href="https://www.test.com/">Test</a>