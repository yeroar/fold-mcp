// Shared styles for amount wrapper used in BuyScreen and PreviewBuyScreen
import { StyleSheet } from "react-native";
import { M4 } from "./generated-tokens/tokens";

const AmountWrapperStyles = StyleSheet.create({
  amountWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Number(M4),
  },
});

export default AmountWrapperStyles;
