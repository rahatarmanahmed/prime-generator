# prime-generator [![Build Status](https://travis-ci.org/rahatarmanahmed/prime-generator.svg?branch=master)](https://travis-ci.org/rahatarmanahmed/prime-generator)

[![Greenkeeper badge](https://badges.greenkeeper.io/rahatarmanahmed/prime-generator.svg)](https://greenkeeper.io/)
An ES6 prime number generator

This is a port of the python implementation described in [Cooking with Python](http://www.macdevcenter.com/pub/a/python/excerpt/pythonckbk_chap1/index1.html?page=2). I don't make any guarantees about performance.

## Installing
`npm install prime-generator`

## Example usage
```js
var primes = require('prime-generator')

var P = primes()
for(var k=0;k<100;k++)
console.log(p.next().value)
```
