
## Meta
```
.       Match any character except newline
\d      Match a digit [0-9]
\D      [^0-9]
\s      Match whitespace character [\t\r\n\f]
\S      [^\t\r\n\f]
\w      Match a single word character [A-Za-z0-9_]
\W      [^A-Za-z0-9_]

```

## quantifier 量词
```
* = {0,}       0 or n

+ = {1,}       1 or n

? = {0, 1}     0 or 1

{2,5}           2 to 5

{2,}            >=2

Adding ? after the qualifier makes it perform the match in non-greedy or minimal fashion
```
量词只修饰前面一个字符. 比如ab{2},{2}修饰b而不是ab 
如果要修饰ab,需要使用 (ab){2}

## Greedy
Greedy 指尽量多的匹配  a*  会匹配 aaaaa 而不是a

在量词后加一个?把贪婪模式改成非贪婪模式
a+?  会匹配 a 而不是 aaaaa
a??  会匹配 "" 而不是 aaaaa
a*?  会匹配 "" 而不是 aaaaa


## Sample
```
    ^http(|s):\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+\/$
    \d{2,6}
    [a-zA-Z0-9]
```
