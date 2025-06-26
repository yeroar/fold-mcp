import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

/**
 * MaxButton component
 * @param {Object} props
 * @param {function} props.onPress - The function to call when the button is pressed
 */
export default function MaxButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>MAX</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFD600", // Example yellow, update to token later
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 64,
    minHeight: 40,
  },
  label: {
    color: "#222", // Example dark text, update to token later
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
