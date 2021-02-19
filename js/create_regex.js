/*
    Thera are two ways to create regular express in js.
*/

// Using a regular expression literal, which consists of a pattern enclosed between slashes
let reg = /all/;
console.log(reg);   // /all/
console.log('This is all I have.'.replace(reg, 'ALL'));    // This is ALL I have.


// Calling the constructor function of the RegExp object
reg = new RegExp('all');
console.log(reg);   // /all/
console.log('This is all I have.'.replace(reg, 'ALL'));    // This is ALL I have.
