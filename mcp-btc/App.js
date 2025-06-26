import CustomKeyboard from "./components/CustomKeyboard";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { LayerBackground } from "./components/generated-tokens/tokens";

export default function App() {
  const [input, setInput] = useState("");
  const handleKeyPress = (key) => {
    if (key === "←") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + key);
    }
  };
  // Only render the keyboard for visual inspection, anchored to bottom center
  return (
    <View style={styles.container}>
      <View style={styles.keyboardAnchor}>
        <CustomKeyboard onKeyPress={handleKeyPress} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LayerBackground,
  },
  keyboardAnchor: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
