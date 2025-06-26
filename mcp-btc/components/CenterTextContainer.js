import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LayerBackgroundPressed, M4, M6 } from "./generated-tokens/tokens";

export default function CenterTextContainer({ text = "Centered Text" }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: LayerBackgroundPressed,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Number(M4),
    paddingVertical: Number(M6),
    borderRadius: 12,
    alignSelf: "center",
    borderColor: "red",
    borderWidth: 2,
  },
  text: {
    fontSize: 24,
    color: "#222",
    textAlign: "center",
  },
});
