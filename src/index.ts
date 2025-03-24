/**
 * Options for customizing the abbreviateNumber function.
 */
interface AbbreviateNumberOptions {
  decimalPlaces?: number; // Number of decimal places to include in the result
  suffixes?: string[]; // Custom suffixes for the abbreviations
  compact?: boolean; // Whether to use compact formatting (e.g., 1.2K vs 1200)
  addPlusSign?: boolean; // Whether to append a "+" sign to the result
}

/**
 * Abbreviates a number by adding suffixes like K, M, B, etc., with customization options.
 * @param num - The number to abbreviate
 * @param options - Optional parameters to customize the output
 * @returns A string representing the abbreviated number
 */
function abbreviateNumber(
  num: number,
  options: AbbreviateNumberOptions = {}
): string {
  const {
    decimalPlaces = 1, // Default to 1 decimal place
    suffixes = ["", "K", "M", "B", "T"], // Default suffixes
    compact = true, // Default to compact formatting
    addPlusSign = false, // Default to no "+" sign
  } = options;

  // If the number is less than 1000 and compact is true, return the number as-is
  if (num < 1000 && compact) return num.toString();

  // Determine the order of magnitude (e.g., thousands, millions, billions)
  const order = Math.floor(Math.log10(num) / 3);
  const unit = suffixes[order] || ""; // Use the appropriate suffix or an empty string
  const scaled = num / Math.pow(10, order * 3); // Scale the number down

  // Format the number with the specified number of decimal places
  const formatted = scaled.toFixed(decimalPlaces).replace(/\.0+$/, ""); // Remove trailing ".0"

  // Append "+" sign if addPlusSign is true
  const result = `${formatted}${unit}`;
  return addPlusSign ? `${result}+` : result;
}

export default abbreviateNumber;
