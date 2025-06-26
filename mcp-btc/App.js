import CustomKeyboard from "./components/CustomKeyboard";
import AmountInputDisplay from "./components/AmountInputDisplay";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const handleKeyPress = (key) => {
    if (key === "←") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + key);
    }
  };
  return (
    <View style={styles.container}>
      <AmountInputDisplay amount={input} />
      <CustomKeyboard onKeyPress={handleKeyPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 32,
    marginBottom: 32,
    letterSpacing: 2,
  },
});
