

- https://segmentfault.com/a/1190000015101341?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly


## C++
```
  #include <regex>
  using namespace std

  regex regexNum(R"(\d*)");   // need -std=c++11
  regex regexNum("\\d");
```

## Python
```
re.sub()         replace string
re.findall()     return a list of string or list of groups
re.finditer()    return a iterator of MatchObject
re.match()       return MatchObject if matching at the beginning
re.search()
re.split()
```

## JavaScript
```
let regex = /all/;
regex = new RegExp('all');
regex = new RegExp('foo*', 'g');

// text() return true/false. 
// whether a pattern is found in a string
const exist = /regex/.test("The long text");


/*
 exec() method executes a search for a match in a specified string. 
  Returns a result array, or null.
  [
    {
      0: "匹配到的字符",
      index: 
      input:
      groups:
    }
  ]
*/
const exist = /\d{3}/.exec("123345");


// 
const s = 'This is all I have.'.replace(reg, 'ALL'); 



```

