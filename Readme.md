# pretzel
A javascript cookie parser.

## Install
```node
npm install pretzel --save
```

### Example

```javascript
var pretzel = require('pretzel');

var cookieString = 'token=abc; name= pretzel; age = 20';

var parsed = pretzel(cookieString);

/*
  The value of parsed is an object
  {
    token: 'abc',
    name: 'pretzel',
    age: '20'
  }
*/
```