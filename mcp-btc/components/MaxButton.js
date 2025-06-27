import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  ObjectBrandSubtleDefault,
  FaceDefault,
  FontFamiliesGeist,
  TypographyButton02,
} from "./generated-tokens/tokens";

/**
 * MaxButton component
 * @param {Object} props
 * @param {function} props.onPress - The function to call when the button is pressed
 */
export default function MaxButton({ onPress, label }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label || "MAX"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: ObjectBrandSubtleDefault,
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: FaceDefault,
    fontFamily: TypographyButton02.fontFamily,
    fontWeight:
      TypographyButton02.fontWeight === "Medium"
        ? "500"
        : TypographyButton02.fontWeight,
    fontSize: Number(TypographyButton02.fontSize),
    lineHeight: Number(TypographyButton02.lineHeight),
    textAlign: "center",
  },
});
