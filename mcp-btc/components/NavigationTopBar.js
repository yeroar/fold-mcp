import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonIconOnly from "./ButtonIconOnly";
import {
  LayerBackground,
  FaceDefault,
  FontFamiliesGeist,
  ObjectBrandBoldDefault,
  ObjectBrandBoldSelected,
} from "./generated-tokens/tokens";

/**
 * NavigationTopBar component
 * @param {string} title - The title to display in the center
 * @param {object} leadingIcon - { iconType, onPress, ...ButtonIconOnly props }
 * @param {object} trailingIcon - { iconType, onPress, ...ButtonIconOnly props }
 * @param {object} style - Additional style for the bar
 * @param {object} titleStyle - Additional style for the title
 */
export default function NavigationTopBar({
  title = "",
  leadingIcon,
  trailingIcon,
  style,
  titleStyle,
}) {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={[styles.row, style]}>
        <View style={styles.side}>
          {leadingIcon ? (
            <ButtonIconOnly {...leadingIcon} />
          ) : (
            <View style={styles.iconPlaceholder} />
          )}
        </View>
        <View style={styles.center}>
          <Text style={[styles.title, titleStyle]} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View style={styles.side}>
          {trailingIcon ? (
            <ButtonIconOnly {...trailingIcon} />
          ) : (
            <View style={styles.iconPlaceholder} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const ICON_BUTTON_SIZE = 32;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: LayerBackground,
    flex: 0, // Prevent stretching
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 56, // Bar height (not SafeAreaView)
    backgroundColor: LayerBackground,
    paddingHorizontal: 8,
  },
  side: {
    width: ICON_BUTTON_SIZE + 8,
    alignItems: "center",
    justifyContent: "center",
  },
  iconPlaceholder: {
    width: ICON_BUTTON_SIZE,
    height: ICON_BUTTON_SIZE,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
  },
  title: {
    fontFamily: FontFamiliesGeist,
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
    fontSize: 18,
    lineHeight: 24,
    color: FaceDefault,
    textAlign: "center",
    maxWidth: 240,
  },
});
