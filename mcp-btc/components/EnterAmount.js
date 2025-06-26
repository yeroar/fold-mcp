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

export default function EnterAmount({ amount = "0.00", onMaxPress }) {
  return (
    <View style={styles.container}>
      {/* Top context: fake calculation */}
      <View style={styles.topContextContainer}>
        <Text style={styles.topContextText}>{`~ 0.2BTC`}</Text>
      </View>
      {/* Input amount */}
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
      {/* Bottom context: Max button */}
      <View style={styles.bottomContextContainer}>
        <TouchableOpacity style={styles.maxButton} onPress={onMaxPress}>
          <Text style={styles.maxButtonText}>Max</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: LayerBackgroundPressed,
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
