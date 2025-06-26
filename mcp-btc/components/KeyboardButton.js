import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import {
  LayerBackground,
  LayerBackgroundPressed,
  FaceDefault,
  TypographyTitle03,
} from "./generated-tokens/tokens";

/**
 * KeyboardButton component
 * @param {Object} props
 * @param {string|React.ReactNode} props.label - The label to display on the button
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
      <View style={styles.labelContainer}>
        {typeof label === "string" ? (
          <Text style={styles.label}>{label}</Text>
        ) : (
          // If label is an icon, constrain its size
          React.cloneElement(label, { style: styles.icon })
        )}
      </View>
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
    height: 48, // Ensure all buttons have the same height
    minWidth: 48, // Optional: ensure square buttons
  },
  buttonPressed: {
    backgroundColor: LayerBackgroundPressed,
  },
  labelContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 20,
  },
  label: {
    color: FaceDefault,
    fontFamily: TypographyTitle03.fontFamily,
    fontWeight: TypographyTitle03.fontWeight,
    fontSize: Number(TypographyTitle03.fontSize),
    lineHeight: Number(TypographyTitle03.lineHeight),
    letterSpacing: Number(TypographyTitle03.letterSpacing),
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
