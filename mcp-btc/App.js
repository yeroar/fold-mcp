import CustomKeyboard from "./components/CustomKeyboard";
import EnterAmount from "./components/EnterAmount";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  LayerBackground,
  M4,
  ObjectBrandBoldDefault,
  ObjectDisabled,
} from "./components/generated-tokens/tokens";
import TokenButton from "./components/TokenButton";
import {
  formatAmountInput,
  prependAmountInput,
} from "./components/utils/formatAmountInput";

export default function App() {
  const [input, setInput] = useState("");

  // Calculate if the preview button should be disabled (empty or < $10.00)
  const cleaned = input.replace(/[^0-9.]/g, "");
  const parsedAmount = parseFloat(cleaned);
  const isPreviewDisabled = isNaN(parsedAmount) || parsedAmount < 10;

  // Pass key presses from custom keyboard to EnterAmount
  const handleCustomKeyPress = (key) => {
    setInput((prev) => {
      let text = prev;
      if (key === "←") {
        text = text.slice(0, -1);
      } else if (/^[0-9]$/.test(key) && /^0\.\d{2}$/.test(text)) {
        // Prepend digit if current is '0.N' or '0.NN'
        text = prependAmountInput(key, text);
      } else {
        text += key;
        text = formatAmountInput(text);
      }
      return text;
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
        <TokenButton
          style={{
            width: "100%",
            backgroundColor: isPreviewDisabled
              ? ObjectDisabled
              : ObjectBrandBoldDefault,
          }}
          disabled={isPreviewDisabled}
        />
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
