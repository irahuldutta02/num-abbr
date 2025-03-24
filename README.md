# **Abbreviate Number Utility**

A lightweight utility to abbreviate numbers with customizable options for formatting, suffixes, and more.

---

## **Features**
- Abbreviates numbers with suffixes like `K`, `M`, `B`, etc.
- Customizable decimal places for precision.
- Supports custom suffixes.
- Option to append a `+` sign for large numbers.
- Compact formatting for numbers less than 1000.

---

## **Installation**

Install the package via npm:

```bash
npm install @irahuldutta02/num-abbr
```

---

## **Usage**

### **Basic Usage**
Import the function and use it to abbreviate numbers:

```typescript
import abbreviateNumber from "@irahuldutta02/num-abbr";

console.log(abbreviateNumber(2444)); // Output: "2.4K"
console.log(abbreviateNumber(1500000)); // Output: "1.5M"
console.log(abbreviateNumber(1234567890)); // Output: "1.2B"
```

---

### **Custom Options**

The function supports an optional `options` parameter for customization.

#### **Options**
| Option         | Type       | Default               | Description                                                                 |
|----------------|------------|-----------------------|-----------------------------------------------------------------------------|
| `decimalPlaces` | `number`   | `1`                   | Number of decimal places to include in the result.                          |
| `suffixes`      | `string[]` | `["", "K", "M", "B", "T"]` | Custom suffixes for the abbreviations.                                      |
| `compact`       | `boolean`  | `true`                | Whether to use compact formatting (e.g., `1.2K` vs `1200`).                 |
| `addPlusSign`   | `boolean`  | `false`               | Whether to append a `+` sign to the result (e.g., `2.4K+`).                 |

---

#### **Custom Decimal Places**
Specify the number of decimal places for precision:

```typescript
console.log(abbreviateNumber(2444, { decimalPlaces: 2 })); // Output: "2.44K"
console.log(abbreviateNumber(987654321, { decimalPlaces: 0 })); // Output: "988M"
```

---

#### **Custom Suffixes**
Provide your own suffixes for the abbreviations:

```typescript
console.log(abbreviateNumber(2444, { suffixes: ["", "k", "m", "b", "t"] })); // Output: "2.4k"
console.log(
  abbreviateNumber(987654321, {
    suffixes: ["", " Thousand", " Million", " Billion"],
  })
); // Output: "988 Million"
```

---

#### **Add a `+` Sign**
Append a `+` sign to the result for large numbers:

```typescript
console.log(abbreviateNumber(2444, { addPlusSign: true })); // Output: "2.4K+"
console.log(abbreviateNumber(1500000, { addPlusSign: true })); // Output: "1.5M+"
```

---

#### **Disable Compact Formatting**
Disable compact formatting for numbers less than 1000:

```typescript
console.log(abbreviateNumber(500, { compact: false })); // Output: "500"
console.log(abbreviateNumber(2000, { compact: false })); // Output: "2K"
```

---

## **Examples**

### **Default Behavior**
```typescript
console.log(abbreviateNumber(500)); // Output: "500"
console.log(abbreviateNumber(2444)); // Output: "2.4K"
console.log(abbreviateNumber(1500000)); // Output: "1.5M"
console.log(abbreviateNumber(1234567890)); // Output: "1.2B"
```

### **Custom Options**
```typescript
console.log(abbreviateNumber(2444, { decimalPlaces: 2, addPlusSign: true })); // Output: "2.44K+"
console.log(
  abbreviateNumber(987654321, {
    suffixes: ["", "k", "m", "b", "t"],
    addPlusSign: true,
  })
); // Output: "988m+"
```

---

## **API Reference**

### **`abbreviateNumber(num: number, options?: AbbreviateNumberOptions): string`**

#### **Parameters**
- `num` (`number`): The number to abbreviate.
- `options` (`AbbreviateNumberOptions`): Optional parameters to customize the output.

#### **Returns**
- A `string` representing the abbreviated number.

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## **Contributing**

Contributions are welcome! If you find a bug or have a feature request, feel free to open an issue or submit a pull request.

---

## **Author**

Created by [Rahul Dutta](https://github.com/irahuldutta02).

