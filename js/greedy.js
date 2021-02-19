/*
    By default, regular express use greedy mode
*/

// Matches between 1 and unlimited times, as many times as possible, greedy
'1234567890'.replace(/\d+/, 'a'); // get a, not a234567890

// Matches between 2 and 4 times, greedy
'1234567890'.replace(/\d{2,4}/, 'a'); //get a567890 instead of a34567890

/*
    Using lazy mode (as few times as possible) by putting a ? after the quantifier
*/
'1234567890'.replace(/\d{2,4}/, 'a');  // a567890
// {2,4}? Quantifier — Matches between 2 and 4 times, as few times as possible, expanding as needed (lazy)
'1234567890'.replace(/\d{2,4}?/, 'a'); // a34567890

'1234567890'.replace(/\d+/, 'a');      // a
'1234567890'.replace(/\d+?/, 'a');     // a234567890

