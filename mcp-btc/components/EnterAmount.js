import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {
  LayerBackground,
  M4,
  M6,
  ObjectBrandSubtleDefault,
  FaceDefault,
  FontFamiliesGeist,
  LayerBackgroundPressed,
  TypographyBalance01,
  FaceDisabled,
  FaceSubtlest,
  TypographyBody02,
} from "./generated-tokens/tokens";
import { formatAmountInput } from "./utils/formatAmountInput";
import MaxButton from "./MaxButton";

export default function EnterAmount({
  amount = "0.00",
  maxValue = 1000,
  onMaxPress,
  onAmountChange,
}) {
  // Parse amount as float, divide by 105.345, and format to 4 decimals
  let btc = 0;
  const parsed = parseFloat(amount.replace(/[^\d.]/g, ""));
  if (!isNaN(parsed)) {
    btc = parsed / 105345;
  }
  const btcDisplay = `~ ${btc.toFixed(7)}BTC`;
  // Format max value for display
  const formattedMax = Number(maxValue)
    .toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,/g, "."); // always use dot as decimal
  // Handler for input changes (enforce 2 decimals, shift if more)
  const handleChange = (text) => {
    if (onAmountChange) onAmountChange(formatAmountInput(text));
  };
  return (
    <View style={styles.container}>
      {/* Top context: fake calculation */}
      <View style={styles.topContextContainer}>
        <Text style={styles.topContextText}>{btcDisplay}</Text>
      </View>
      {/* Input amount */}
      <View style={styles.amountContainer}>
        <TextInput
          style={styles.amountText}
          value={`$${amount.length === 0 ? "0" : amount}`}
          onChangeText={(text) => {
            // remove any leading $ if user edits it
            const cleaned = text.replace(/^\$/, "");
            handleChange(cleaned);
          }}
          keyboardType="numeric"
          maxLength={12}
          accessibilityLabel="Amount input"
          textAlign="center"
        />
      </View>
      {/* Bottom context: Max button */}
      <View style={styles.bottomContextContainer}>
        <MaxButton
          onPress={() => onMaxPress(formattedMax)}
          label={`Max: $${formattedMax}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: LayerBackground,
    alignItems: "flex-start	",
    justifyContent: "center",
    paddingHorizontal: Number(M4),
    paddingVertical: Number(M6),
    borderRadius: 12, // Optional for pill/modal look
  },
  topContextContainer: {
    marginBottom: Number(M6),
    alignItems: "center",
  },
  topContextText: {
    fontFamily: TypographyBody02.fontFamily,
    fontWeight:
      TypographyBody02.fontWeight === "Regular"
        ? "400"
        : TypographyBody02.fontWeight,
    fontSize: Number(TypographyBody02.fontSize),
    lineHeight: Number(TypographyBody02.lineHeight),
    color: FaceSubtlest,
  },
  amountContainer: {
    marginBottom: Number(M4),
    alignItems: "center",
  },
  amountText: {
    fontFamily: TypographyBalance01.fontFamily,
    fontWeight:
      TypographyBalance01.fontWeight === "Light"
        ? "300"
        : TypographyBalance01.fontWeight,
    fontSize: Number(TypographyBalance01.fontSize),
    lineHeight: Number(TypographyBalance01.lineHeight),
    color: FaceDefault,
  },
  bottomContextContainer: {
    alignItems: "center",
  },
});
