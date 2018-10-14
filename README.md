# Last Decimal

A small library that increase or decrease the last decimal  
https://www.npmjs.com/package/lastdecimal

## Installation

`npm install lastdecimal`  
`yarn add lastdecimal`

## Usage

`lastdecimal(value: number, bool: boolean)`

---

**value**: Any number with decimals

`0.4211` = OK!  
`5152.31290` = OK!  
`123` = NOT OK!

---

**bool**: true / false

`true`= increase last decimal with 1  
`false`= decrease last decimal with 1

---

### Examples

```
var lastdecimal = require("lastdecimal")

var numDown = lastdecimal.lastdecimal(555.555, true);
var numUp = lastdecimal.lastdecimal(555.555, false);

console.log(numDown); // Should return 555.554
console.log(numUp); // Should return 555.556
```

## Todo

Setup automated build with Travis  
Analyse code-coverage with Codecov  
Add badges to your readme with Shields. Everyone loves badges 😎

## Tests

`npm test`

## Contributing

Create PR with description

## Author

[Mathias](https://twitter.com/mathiiias123)  
[INGRID Ventures](https://ingridx.com)
