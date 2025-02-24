# lookbehind assertion

(?<=...) → Positive lookbehind:
Ensures that what’s inside (...) must be present before the match.
it does not include that pattern in the match itself.

(?<!...) → Negative lookbehind:
Ensures that what’s inside (...) must not be present

```js
/(?<=\w )\d{2,3}/;
```

(?<=\w ) → A lookbehind that ensures a single word character (\w, which matches letters, digits, or underscores) followed by a space ( ) precedes the match.
\d{3} → Matches exactly three digits.
