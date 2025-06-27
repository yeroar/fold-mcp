import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  ObjectBrandBoldDefault,
  FaceDefault,
  FontFamiliesGeist,
  M3,
  M0,
  TypographyButton01,
} from "./generated-tokens/tokens";

export default function TokenButton({
  title = "Preview buy",
  onPress,
  style,
  textStyle,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: ObjectBrandBoldDefault,
    borderRadius: 6,
    paddingHorizontal: Number(M3),
    height: Number(M8),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: FaceDefault,
    fontFamily: TypographyButton01.fontFamily,
    fontWeight:
      TypographyButton01.fontWeight === "Medium"
        ? "500"
        : TypographyButton01.fontWeight,
    fontSize: Number(TypographyButton01.fontSize),
    lineHeight: Number(TypographyButton01.lineHeight),
    textAlign: "left",
    includeFontPadding: false,
  },
});
