function abbreviateNumber(num) {
  if (num < 1000) return num.toString();

  const units = ["", "K", "M", "B", "T"];
  const order = Math.floor(Math.log10(num) / 3);
  const unit = units[order];
  const scaled = num / Math.pow(10, order * 3);

  return scaled.toFixed(1).replace(/\.0$/, "") + unit;
}

module.exports = abbreviateNumber;
