import CustomKeyboard from "./components/CustomKeyboard";
import EnterAmount from "./components/EnterAmount";
// import CenterTextContainer from "./components/CenterTextContainer";
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
  const handleMaxPress = (value) => {
    setInput(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.amountWrapper}>
        <EnterAmount amount={input} onMaxPress={handleMaxPress} />
      </View>
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
    flexDirection: "column",
    backgroundColor: LayerBackground,
    justifyContent: "flex-end", // or 'space-between' for spacing
    alignItems: "stretch",
    width: "100%",
  },
  amountWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: "100%", // Remove for stretch
  },
  keyboardAnchor: {
    // width: "100%", // Remove for stretch
    alignItems: "center",
  },
});
