export function formatAmountInput(text) {
  let cleaned = text.replace(/,/g, ".").replace(/[^0-9.]/g, "");

  // Handle starting dot (e.g., ".5" → "0.5")
  if (cleaned.startsWith(".")) {
    cleaned = "0" + cleaned;
  }

  // Handle empty input → "0"
  if (cleaned === "") {
    return "0";
  }

  // Split integer and decimal parts
  const [integerPartRaw, decimalPartRaw = ""] = cleaned.split(".");

  // Remove leading zeros from integer part but keep single zero if needed
  let integerPart = integerPartRaw.replace(/^0+/, "");
  if (integerPart === "") {
    integerPart = "0";
  }

  // Limit decimal part to 2 digits
  let decimalPart = decimalPartRaw.slice(0, 2);

  // Rebuild the cleaned number
  let result = integerPart;
  if (cleaned.includes(".")) {
    result += "." + decimalPart;
  }

  return result;
}

// Prepend a digit to the integer part of the amount, e.g. '0.77' + '7' => '7.77'
export function prependAmountInput(newDigit, currentAmount) {
  // Only allow single digit 0-9
  if (!/^[0-9]$/.test(newDigit)) {
    return currentAmount;
  }
  const parts = currentAmount.split(".");
  let integerPart = parts[0];
  const decimalPart = parts[1] ?? "";

  // If current amount is '0', just replace it
  if (integerPart === "0") {
    integerPart = newDigit;
  } else {
    integerPart = newDigit + integerPart;
  }

  let combined = integerPart;
  if (decimalPart !== "") {
    combined += "." + decimalPart;
  }

  return formatAmountInput(combined);
}
