import CustomKeyboard from "./components/CustomKeyboard";
import EnterAmount from "./components/EnterAmount";
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
  const handleMaxPress = () => {
    setInput("MAX");
  };
  return (
    <View style={styles.container}>
      <EnterAmount amount={input} onMaxPress={handleMaxPress} />
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
