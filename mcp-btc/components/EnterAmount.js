import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LayerBackground, M4, M6 } from "./generated-tokens/tokens";

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
    alignItems: "center",
    backgroundColor: LayerBackground,
    paddingTop: Number(M6),
    paddingBottom: Number(M6),
    paddingHorizontal: Number(M4),
  },
  topContextContainer: {
    marginBottom: Number(M4),
    alignItems: "center",
  },
  topContextText: {
    color: "#888",
    fontSize: 16,
  },
  amountContainer: {
    marginBottom: Number(M4),
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
    backgroundColor: "#eee",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  maxButtonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
  },
});
