// theme.js
// Utility to parse and flatten color and typography tokens for React Native

import colorTokens from "../tokens/Theme/Token.json";
import typographyTokens from "../tokens/global.json";

// --- COLOR TOKENS ---
// Example: Get brand bold default and pressed colors
export const COLORS = {
  buttonBg: colorTokens.Object.brand.bold.default.value || "#FFD600",
  buttonBgPressed: colorTokens.Object.brand.bold.pressed.value || "#FFB300",
  textPrimary: colorTokens.Face.default.value || "#222222",
  // Add more as needed
};

// --- TYPOGRAPHY TOKENS ---
// Helper to resolve references like {fontFamilies.geist}
function resolveRef(ref, tokens) {
  if (!ref.startsWith("{")) return ref;
  const path = ref.replace(/[{}]/g, "").split(".");
  let value = tokens;
  for (const key of path) {
    value = value[key];
    if (!value) return ref;
    if (value.value) value = value.value;
  }
  return value;
}

// Example: Get Button 01 typography
const button01 = typographyTokens.Typography["Button 01"].value;

export const TYPOGRAPHY = {
  fontFamily: resolveRef(button01.fontFamily, typographyTokens),
  fontWeight: resolveRef(button01.fontWeight, typographyTokens),
  fontSize: parseInt(resolveRef(button01.fontSize, typographyTokens), 10),
  lineHeight: parseInt(resolveRef(button01.lineHeight, typographyTokens), 10),
  letterSpacing: parseFloat(
    resolveRef(button01.letterSpacing, typographyTokens)
  ),
  // Add more as needed
};
