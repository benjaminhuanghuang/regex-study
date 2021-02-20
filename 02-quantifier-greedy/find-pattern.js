
const exist = /\d{6}/.test('1234567')

console.log(exist)  // true


const matches = /\d{0,1}/.exec('1234567')
console.log(matches)  // one match
/*
[
  {
    0: "匹配到的字符",
    index: 
    input:
    groups:
  }
]
*/