import CustomKeyboard from "./components/CustomKeyboard";
import EnterAmount from "./components/EnterAmount";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  LayerBackground,
  M4,
  ObjectBrandBoldDefault,
} from "./components/generated-tokens/tokens";
import TokenButton from "./components/TokenButton";
import { formatAmountInput } from "./components/utils/formatAmountInput";

export default function App() {
  const [input, setInput] = useState("");

  // Pass key presses from custom keyboard to EnterAmount
  const handleCustomKeyPress = (key) => {
    setInput((prev) => {
      let text = prev;
      if (key === "←") {
        text = text.slice(0, -1);
      } else {
        text += key;
      }
      return formatAmountInput(text, key);
    });
  };
  const handleMaxPress = (value) => {
    setInput(formatAmountInput(value));
  };

  return (
    <View style={styles.container}>
      <View style={styles.amountWrapper}>
        <EnterAmount
          amount={input}
          onMaxPress={handleMaxPress}
          onCustomKeyPress={handleCustomKeyPress}
          onAmountChange={setInput}
        />
      </View>

      <View style={styles.keyboardAnchor}>
        <CustomKeyboard onKeyPress={handleCustomKeyPress} />
      </View>

      <View style={styles.tokenButtonRow}>
        <TokenButton style={{ width: "100%" }} />
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
  tokenButtonRow: {
    width: "100%",
    paddingHorizontal: Number(M4),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 32,
  },
});
