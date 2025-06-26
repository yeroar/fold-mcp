import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  LayerBackground,
  LayerBackgroundPressed,
  FaceDefault,
} from "./generated-tokens/tokens";

/**
 * KeyboardButton component
 * @param {Object} props
 * @param {string} props.label - The label to display on the button
 * @param {function} props.onPress - The function to call when the button is pressed
 */
export default function KeyboardButton({ label, onPress }) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <TouchableOpacity
      style={[styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      activeOpacity={0.85}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: LayerBackground,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 0,
  },
  buttonPressed: {
    backgroundColor: LayerBackgroundPressed,
  },
  label: {
    color: FaceDefault,
    // ...keep typography from your theme or tokens as needed
  },
});
