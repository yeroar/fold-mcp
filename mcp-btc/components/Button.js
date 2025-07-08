import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import {
  ObjectBrandBoldDefault,
  ObjectBrandBoldPressed,
  ObjectBrandSubtleDefault,
  ObjectDisabled,
  FaceDefault,
  TypographyButton01,
  TypographyButton02,
} from "./generated-tokens/tokens";

/**
 * Button component (atomic structure: Root, Content, Label, Icon)
 * Supports: type ('brand'|'default'), spacing ('default'|'compact'), hasTrailingIcon, disabled, pressed
 */
export default function Button({
  type = "brand", // 'brand' (primary) or 'default' (chip)
  spacing = "default", // 'default' or 'compact'
  hasTrailingIcon = false,
  title = "Button",
  onPress,
  disabled = false,
  style,
  textStyle,
  trailingIcon,
  ...rest
}) {
  const isPrimary = type === "brand";
  const isCompact = spacing === "compact";
  const [pressed, setPressed] = React.useState(false);

  // --- Atomic: Root ---
  const getRootStyle = () => [
    isPrimary
      ? [styles.rootPrimary, isCompact && styles.rootPrimaryCompact]
      : [styles.rootDefault, isCompact && styles.rootDefaultCompact],
    { backgroundColor: getBackgroundColor() },
    style,
  ];

  // --- Atomic: Content ---
  const getContentStyle = () => [
    styles.content,
    hasTrailingIcon && styles.contentWithIcon,
  ];

  // --- Atomic: Label ---
  const getLabelStyle = () =>
    isPrimary ? styles.labelPrimary : styles.labelDefault;

  // --- Atomic: Icon ---
  const getTrailingIconStyle = () => styles.trailingIcon;

  function getBackgroundColor() {
    if (disabled) return ObjectDisabled;
    if (isPrimary && pressed) return ObjectBrandBoldPressed;
    if (isPrimary) return ObjectBrandBoldDefault;
    return ObjectBrandSubtleDefault;
  }

  return (
    <TouchableOpacity
      style={getRootStyle()}
      onPress={disabled ? undefined : onPress}
      activeOpacity={0.8}
      disabled={disabled}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      {...rest}
    >
      <View style={getContentStyle()}>
        <Text style={[getLabelStyle(), textStyle]}>{title}</Text>
        {hasTrailingIcon && trailingIcon ? (
          <View style={getTrailingIconStyle()}>{trailingIcon}</View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // --- Root ---
  rootPrimary: {
    borderRadius: 6,
    paddingHorizontal: 16,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: ObjectBrandBoldDefault,
  },
  rootPrimaryCompact: {
    height: 40,
    paddingHorizontal: 12,
  },
  rootDefault: {
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: ObjectBrandSubtleDefault,
  },
  rootDefaultCompact: {
    height: 28,
    paddingHorizontal: 8,
  },

  // --- Content ---
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contentWithIcon: {
    // Optionally add spacing if icon present
  },

  // --- Label ---
  labelPrimary: {
    color: FaceDefault,
    fontFamily: TypographyButton01.fontFamily,
    fontWeight:
      TypographyButton01.fontWeight === "Medium"
        ? "500"
        : TypographyButton01.fontWeight,
    fontSize: Number(TypographyButton01.fontSize),
    lineHeight: Number(TypographyButton01.lineHeight),
    textAlign: "center",
  },
  labelDefault: {
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

  // --- Icon ---
  trailingIcon: {
    marginLeft: 8,
  },
});
