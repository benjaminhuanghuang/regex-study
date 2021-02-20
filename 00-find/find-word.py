import re

text =''

file = open('../')
for line in file:
  text = text + line
file.close()

# find all 'to' in text
'''
re.findall()
  Return all non-overlapping matches of pattern in string, as a list of strings. 
'''
result = re.findall(' to ', text)

# find all 'axx'
result = re.findall('a..', text)


# find all 'axx', 前后有或没有空格
result = re.findall(' *(a\w{2}）*', text)