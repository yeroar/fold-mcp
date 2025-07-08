import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomKeyboard from "./components/CustomKeyboard";
import EnterAmount from "./components/EnterAmount";
import Button from "./components/Button";
import NavigationTopBar from "./components/NavigationTopBar";
import { LayerBackground, M4 } from "./components/generated-tokens/tokens";
import {
  formatAmountInput,
  prependAmountInput,
} from "./components/utils/formatAmountInput";
import AmountWrapperStyles from "./components/AmountWrapperStyles";

export default function BuyScreen({ navigation }) {
  const [input, setInput] = useState("");
  const cleaned = input.replace(/[^0-9.]/g, "");
  const parsedAmount = parseFloat(cleaned);
  const isPreviewDisabled = isNaN(parsedAmount) || parsedAmount < 10;

  const handleCustomKeyPress = (key) => {
    setInput((prev) => {
      let text = prev;
      if (key === "←") {
        text = text.slice(0, -1);
      } else if (/^[0-9]$/.test(key) && /^0\.\d{2}$/.test(text)) {
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
      <NavigationTopBar
        title="Buy bitcoin"
        leadingIcon={{
          iconType: "chevron-back",
          onPress: () => navigation.goBack?.(),
          accessibilityLabel: "Go back",
        }}
      />
      <View style={AmountWrapperStyles.amountWrapper}>
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
        <Button
          type="brand"
          spacing="default"
          title="Preview buy"
          style={{ width: "100%" }}
          disabled={isPreviewDisabled}
          onPress={() => {
            console.log("Navigating to PreviewBuy with amount:", input);
            navigation.navigate("PreviewBuy", { amount: input });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: LayerBackground,
    justifyContent: "flex-end",
    alignItems: "stretch",
    width: "100%",
  },
  keyboardAnchor: {
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
