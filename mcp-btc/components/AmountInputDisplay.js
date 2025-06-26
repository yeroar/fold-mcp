import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * AmountInputDisplay component
 * @param {Object} props
 * @param {string} props.amount - The current input amount
 */
export default function AmountInputDisplay({ amount }) {
  // Fake calculation: just multiply by 2 for demonstration
  const fakeCalculation = amount ? (parseFloat(amount) * 2).toString() : "0";

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Amount</Text>
      <Text style={styles.amount}>{amount || "0"}</Text>
      <View style={styles.divider} />
      <Text style={styles.calcLabel}>Fake Calculation</Text>
      <Text style={styles.calcValue}>{fakeCalculation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF", // Figma background
    borderRadius: 16, // Figma border radius
    paddingVertical: 24,
    paddingHorizontal: 24,
    alignItems: "center",
    marginBottom: 32,
    marginTop: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 12, // Figma font size
    color: "#A0A0A0", // Figma color
    marginBottom: 2,
    fontWeight: "500",
    letterSpacing: 0.5,
    fontFamily: "System",
  },
  amount: {
    fontSize: 36, // Figma font size
    fontWeight: "700", // Figma font weight
    color: "#222222", // Figma color
    marginBottom: 12,
    letterSpacing: 1,
    fontFamily: "System",
  },
  divider: {
    width: "60%",
    height: 1,
    backgroundColor: "#E5E5E5", // Figma divider color
    marginVertical: 8,
    borderRadius: 1,
  },
  calcLabel: {
    fontSize: 12, // Figma font size
    color: "#A0A0A0", // Figma color
    marginBottom: 2,
    fontWeight: "400",
    fontFamily: "System",
  },
  calcValue: {
    fontSize: 18, // Figma font size
    color: "#007AFF", // Figma accent color
    fontWeight: "700",
    letterSpacing: 0.5,
    fontFamily: "System",
  },
});
