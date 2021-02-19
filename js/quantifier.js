/*
    +       Matches between 1 and unlimited times
    ?       0 or 1 time
    *       0 or anytimes
    {n}     n times
    {n, m}  n to m times
    {n,}    at least n times
*/

// matches 1 digit
'1234567890'.replace(/\d/, 'a'); // a234567890

// matches 1 or unlimited digits
'1234567890'.replace(/\d+/, 'a'); // a

// matches 1 digit
'1234567890'.replace(/\d?/, 'a'); // a234567890

// matches all digits (any times)
'1234567890'.replace(/\d*/, 'a'); // a

// matches 3 digits
'1234567890'.replace(/\d{3}/, 'a'); // a4567890

// matches 4 digits
'1234567890'.replace(/\d{2,4}/, 'a'); // a567890

// matches at least 3 digits
'1234567890'.replace(/\d{3,}/, 'a'); // a

// can not match at least 3 digits 
'12'.replace(/\d{3,}/, 'a'); // 12