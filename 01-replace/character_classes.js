/*
Character Classes or Character Sets
*/

'1a2b3c4q5z'.replace(/[a-z]/g, '|');   // 1|2|3|4|5|
'1a2b3c4T5Z'.replace(/[a-z]/g, '|');   // 1|2|3|4T5Z
'1a2b3c4T5Z'.replace(/[a-zA-Z]/g, '|');   // 1|2|3|4|5|
'1a2b3c4q5z'.replace(/[0-9]/g, '|');   // |a|b|c|q|z