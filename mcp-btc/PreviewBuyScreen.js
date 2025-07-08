import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavigationTopBar from "./components/NavigationTopBar";
import Button from "./components/Button";
import AmountWrapperStyles from "./components/AmountWrapperStyles";
import { LayerBackground } from "./components/generated-tokens/tokens";

export default function PreviewBuyScreen({ navigation, route }) {
  // Get the amount passed from navigation
  const { amount } = route.params || {};

  return (
    <View style={styles.container}>
      <NavigationTopBar
        title="Order Preview"
        leadingIcon={{
          iconType: "chevron-back",
          onPress: () => navigation.goBack?.(),
          accessibilityLabel: "Go back",
        }}
      />
      <View style={AmountWrapperStyles.amountWrapper}>
        <Text style={styles.label}>Amount to Buy:</Text>
        <Text style={styles.amount}>{amount || "$0.00"}</Text>
        {/* Add more order details here if needed */}
      </View>
      <View style={styles.tokenButtonRow}>
        <Button
          type="brand"
          spacing="default"
          title="Confirm Buy"
          style={{ width: "100%" }}
          onPress={() => {
            // TODO: handle confirm action
            console.log("Confirmed buy for amount:", amount);
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
  tokenButtonRow: {
    width: "100%",
    paddingHorizontal: 16, // fallback if M4 not available
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 32,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2e7d32",
  },
});
