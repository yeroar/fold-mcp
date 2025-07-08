import "react-native-gesture-handler";
import React from "react";
import CustomKeyboard from "./components/CustomKeyboard";
import EnterAmount from "./components/EnterAmount";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  LayerBackground,
  M4,
  ObjectBrandBoldDefault,
  ObjectDisabled,
} from "./components/generated-tokens/tokens";
import Button from "./components/Button";
import {
  formatAmountInput,
  prependAmountInput,
} from "./components/utils/formatAmountInput";
import NavigationTopBar from "./components/NavigationTopBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PreviewBuyScreen from "./PreviewBuyScreen";
import LoadingScreen from "./components/LoadingScreen";
import SuccessScreen from "./SuccessScreen";

const Stack = createStackNavigator();

function BuyScreen({ navigation }) {
  const [input, setInput] = React.useState("");

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
      <NavigationTopBar
        title="Buy bitcoin"
        leadingIcon={{
          iconType: "chevron-back",
          onPress: () => {
            // handle back
            navigation.goBack?.();
          },
          accessibilityLabel: "Go back",
        }}
      />
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
        <Button
          type="brand"
          spacing="default"
          title="Preview buy"
          style={{ width: "100%" }}
          disabled={isPreviewDisabled}
          onPress={() => navigation.navigate("PreviewBuy", { amount: input })}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// Main app entry point
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Buy" component={BuyScreen} />
        <Stack.Screen name="PreviewBuy" component={PreviewBuyScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: LayerBackground, // Use LayerBackground, not ObjectBrandBoldDefault
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
