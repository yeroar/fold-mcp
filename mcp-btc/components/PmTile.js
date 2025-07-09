import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "./Icon";
import {
  M4,
  ObjectNeutralDefaultDefault,
  ObjectBrandBoldDefault,
  IconForwards,
} from "./generated-tokens/tokens";

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
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title || "Add a payment method"}
    >
      <View style={styles.innerRow}>
        <View
          style={[
            styles.iconSlot,
            empty && { backgroundColor: ObjectBrandBoldDefault },
            isSelected && { backgroundColor: ObjectNeutralDefaultDefault },
          ]}
        >
          {icon ? (
            React.cloneElement(icon, { style: styles.icon })
          ) : (
            <Icon
              type="custom"
              size={16}
              color="#454F59"
              source={IconForwards}
              style={styles.icon}
            />
          )}
        </View>
        <View style={styles.textCol}>
          <Text style={styles.title}>{title || "Add a payment method"}</Text>
        </View>
        <View style={styles.chevronSlot}>
          <Icon
            type="custom"
            size={12}
            source={IconForwards}
            style={styles.icon}
          />
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

  innerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  iconSlot: {
    backgroundColor: ObjectNeutralDefaultDefault,
    borderRadius: 12,
    padding: 10,
    marginRight: M4,
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
  icon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
  },
});
