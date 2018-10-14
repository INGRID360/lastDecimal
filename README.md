# Last Decimal

A small library that increase or decrease the last decimal

## Installation

`npm install lastdecimal`  
`yarn add lastdecimal`

## Usage

```
var lastdecimal = require("lastdecimal")

var numDown = lastdecimal.lastdecimal(555.555, true);
var numUp = lastdecimal.lastdecimal(555.555, false);

console.log(numDown);
console.log(numUp);
```

## Todo

Setup automated build with Travis
Analyse code-coverage with Codecov
Add badges to your readme with Shields. Everyone loves badges 😎

## Tests

`npm test`

## Contributing

Create PR with description
