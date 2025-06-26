import CustomKeyboard from "./components/CustomKeyboard";
// import EnterAmount from "./components/EnterAmount";
import CenterTextContainer from "./components/CenterTextContainer";
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
      <View style={styles.amountWrapper}>
        {/* <EnterAmount amount={input} onMaxPress={handleMaxPress} /> */}
        <CenterTextContainer text="Centered Text" />
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
    backgroundColor: LayerBackground,
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  keyboardAnchor: {
    width: "100%",
    alignItems: "center",
  },
});
