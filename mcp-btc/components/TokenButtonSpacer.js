import React from "react";
import { View, StyleSheet } from "react-native";
import TokenButton from "./TokenButton";

export default function TokenButtonSpacer({ onPress }) {
  return (
    <View style={styles.spacer}>
      <TokenButton title="Preview buy" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  spacer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 16,
  },
});
