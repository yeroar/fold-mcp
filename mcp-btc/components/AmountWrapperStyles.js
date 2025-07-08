// Shared styles for amount wrapper used in BuyScreen and PreviewBuyScreen
import { StyleSheet } from "react-native";
import { M4, M6 } from "./generated-tokens/tokens";

const AmountWrapperStyles = StyleSheet.create({
  amountWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Number(M4),
    paddingVertical: Number(M6), // Adjusted for better spacing
  },
});

export default AmountWrapperStyles;
