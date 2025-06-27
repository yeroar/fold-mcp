// Utility to format amount input with decimal shifting and dot enforcement
export function formatAmountInput(text, key) {
  let cleaned = text.replace(/,/g, ".");
  cleaned = cleaned.replace(/[^0-9.]/g, "");
  const firstDot = cleaned.indexOf(".");
  if (firstDot !== -1) {
    cleaned = cleaned.slice(0, firstDot + 1) + cleaned.slice(firstDot + 1).replace(/\./g, "");
  }
  const parts = cleaned.split(".");
  if (parts.length === 2 && parts[1].length > 2 && key !== "←") {
    const allDigits = parts[0] + parts[1];
    const newDot = allDigits.length - 2;
    cleaned = allDigits.slice(0, newDot) + "." + allDigits.slice(newDot);
  }
  return cleaned;
}
