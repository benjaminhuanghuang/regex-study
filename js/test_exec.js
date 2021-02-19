/*
    test() return bool value determining match or not
*/

const reg = /\w/;
reg.test('|'); // false
reg.test('a'); // true
reg.test('a'); // true

/*
    return matched string by arry or null 
*/
/\d(\w)(\w)\w\d/.exec('ab1cde2fg');

