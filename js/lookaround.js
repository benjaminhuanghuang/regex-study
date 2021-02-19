/*
Zero-length lookahead and lookbehind assertions, sometimes known as lookaround assertions, 
are special types of non-capturing group. They allow you to perform complex matches based on 
information that follows or precedes a pattern, without the information within the lookahead 
assertion forming part of the returned text.

正则表达式是从头部(左)向尾部(右)开始匹配的，文本的尾部方向称为“前”，文本的头部方向称为“后”
前瞻：正则表达式在匹配到规则的时候，向前检查是否符合断言
后顾：正则表达式在匹配到规则的时候，向后检查是否符合断言

名称	正则	含义
正向前瞻	exp(?=assert)	向前检查符合断言的
负向前瞻	exp(?!assert)	向前检查不符合断言的
正向后瞻	(?<=assert)exp	向后检查符合断言的
负向后瞻	(?<!assert)exp	向后检查不符合断言的


Lookaround	Name	            What it Does
(?=foo)	    Lookahead	        Asserts that what immediately follows the current position in the string is foo
(?<=foo)	Lookbehind	        Asserts that what immediately precedes the current position in the string is foo
(?!foo)	    Negative Lookahead	Asserts that what immediately follows the current position in the string is not foo
(?<!foo)	Negative Lookbehind	Asserts that what immediately precedes the current position in the string is not foo

*/

'ab1cde2fg'.replace(/[a-z](?=\d)/g, 'X'); // aX1cdX2fg
'ab1cde2fg'.replace(/[a-z](?!\d)/g, 'X'); // Xb1XXe2XX

'ab1cde2fg'.replace(/(?<=\d)[a-z]/g, 'X'); // ab1Xde2Xg
'ab1cde2fg'.replace(/(?<!\d)[a-z]/g, 'X'); // XX1cXX2fX