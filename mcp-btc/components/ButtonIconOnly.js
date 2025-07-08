import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Icon from "./Icon";
import {
  ObjectBrandBoldDefault,
  ObjectBrandBoldPressed,
  ObjectDisabled,
  ObjectNeutralSubtleDefault,
  ObjectNeutralSubtlePressed,
} from "./generated-tokens/tokens";

/**
 * ButtonIconOnly component
 * @param {string} iconType - Icon type (see Icon component)
 * @param {function} onPress - Press handler
 * @param {number} size - Icon size (default: 24)
 * @param {string} color - Icon color (default: brand bold)
 * @param {boolean} disabled
 * @param {object} style - Additional style for button
 * @param {object} iconStyle - Additional style for icon
 * @param {string} accessibilityLabel
 */
export default function ButtonIconOnly({
  iconType,
  onPress,
  size = 24,
  color,
  disabled = false,
  style,
  iconStyle,
  accessibilityLabel,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);

  // Determine background color for pressed/disabled state
  const backgroundColor = disabled
    ? ObjectDisabled
    : pressed
      ? ObjectNeutralSubtlePressed
      : ObjectNeutralSubtleDefault;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={disabled ? undefined : onPress}
      activeOpacity={0.8}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Icon type={iconType} size={size} color={color} style={iconStyle} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // No border by default, add if needed
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
});
