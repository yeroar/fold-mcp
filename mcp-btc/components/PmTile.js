import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "./Icon";

// Props: isSelected (bool), onPress (function), empty (bool), icon (ReactNode), title (string)
export default function PmTile({
  isSelected = false,
  onPress,
  empty = true,
  icon,
  title,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        isSelected && styles.selected,
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title || "Add a payment method"}
    >
      <View style={styles.innerRow}>
        <View style={styles.iconSlot}>
          {icon ? icon : <Icon type="chevron-back" size={20} color="#454F59" />}
        </View>
        <View style={styles.textCol}>
          <Text style={styles.title}>{title || "Add a payment method"}</Text>
        </View>
        <View style={styles.chevronSlot}>
          <Icon type="chevron-back" size={20} color="#454F59" />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f5efd6",
    shadowColor: "#c2c2c2",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 7,
    elevation: 2,
    margin: 0,
    padding: 0,
    width: "100%",
  },
  pressed: {
    opacity: 0.85,
  },
  selected: {
    borderColor: "#ffdd33",
    borderWidth: 2,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
  },
  iconSlot: {
    backgroundColor: "#ffdd33",
    borderRadius: 12,
    padding: 10,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textCol: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "Geist-Medium",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#22272b",
  },
  chevronSlot: {
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
