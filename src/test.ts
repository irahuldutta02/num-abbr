import abbreviateNumber from "./index.js";

// Default behavior
console.log(abbreviateNumber(500)); // Output: "500"
console.log(abbreviateNumber(2444)); // Output: "2.4K"

// Add "+" sign
console.log(abbreviateNumber(2444, { addPlusSign: true })); // Output: "2.4K+"
console.log(abbreviateNumber(1500000, { addPlusSign: true })); // Output: "1.5M+"

// Custom decimal places and "+" sign
console.log(abbreviateNumber(2444, { decimalPlaces: 2, addPlusSign: true })); // Output: "2.44K+"

// Custom suffixes and "+" sign
console.log(
  abbreviateNumber(987654321, {
    suffixes: ["", "k", "m", "b", "t"],
    addPlusSign: true,
  })
); // Output: "988m+"

// Disable compact formatting
console.log(abbreviateNumber(500, { compact: false, addPlusSign: true })); // Output: "500"
