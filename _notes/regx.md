
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

## 量词
```
*       0 or n

+       1 or n

?       0 or 1

{2,5}   2 to 5

{2,}    >=2

Adding ? after the qualifier makes it perform the match in non-greedy or minimal fashion
```

## Greedy
Greedy 指尽量多的匹配

## Sample
```
    ^http(|s):\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+\/$
    \d{2,6}
    [a-zA-Z0-9]
```
