import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  LayerBackground,
  M4,
  M6,
  ObjectBrandSubtleDefault,
  FaceDefault,
  FontFamiliesGeist,
  LayerBackgroundPressed,
} from "./generated-tokens/tokens";

export default function EnterAmount({
  amount = "0.00",
  maxValue = 1000,
  onMaxPress,
}) {
  // Parse amount as float, divide by 105.345, and format to 4 decimals
  let btc = 0;
  const parsed = parseFloat(amount.replace(/[^\d.]/g, ""));
  if (!isNaN(parsed)) {
    btc = parsed / 105345;
  }
  const btcDisplay = `~ ${btc.toFixed(4)}BTC`;
  // Format max value for display
  const formattedMax = Number(maxValue).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <View style={styles.container}>
      {/* Top context: fake calculation */}
      <View style={styles.topContextContainer}>
        <Text style={styles.topContextText}>{btcDisplay}</Text>
      </View>
      {/* Input amount */}
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
      {/* Bottom context: Max button */}
      <View style={styles.bottomContextContainer}>
        <TouchableOpacity
          style={styles.maxButton}
          onPress={() => onMaxPress(formattedMax)}
        >
          <Text style={styles.maxButtonText}>{`Max: $${formattedMax}`}</Text>
        </TouchableOpacity>
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
    color: "#888",
    fontSize: 16,
  },
  amountContainer: {
    marginBottom: Number(M6),
    alignItems: "center",
  },
  amountText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
  },
  bottomContextContainer: {
    alignItems: "center",
  },
  maxButton: {
    backgroundColor: ObjectBrandSubtleDefault,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  maxButtonText: {
    color: FaceDefault,
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FontFamiliesGeist,
  },
});
