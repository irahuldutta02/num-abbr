const abbreviateNumber = require("./index");

console.log(abbreviateNumber(500)); // Output: 500
console.log(abbreviateNumber(2000)); // Output: 2K
console.log(abbreviateNumber(1500000)); // Output: 1.5M
console.log(abbreviateNumber(1234567890)); // Output: 1.2B
