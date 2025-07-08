import React from "react";
import { View, StyleSheet } from "react-native";
import NavigationTopBar from "./components/NavigationTopBar";
import EnterAmount from "./components/EnterAmount";
import Button from "./components/Button";
import { LayerBackground, M4 } from "./components/generated-tokens/tokens";

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
      <EnterAmount amount={amount} showInput={true} readOnlyInput={true} showBottomContext={false} />
      <View style={styles.tokenButtonRow}>
        <Button
          type="brand"
          spacing="default"
          title="Confirm"
          style={{ width: "100%" }}
          onPress={() => {
            // TODO: handle confirm action
            console.log("Confirmed buy for amount:", amount);
          }}
        />
      </View>
      {/* Add more order details here if needed */}
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
    paddingHorizontal: Number(M4),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 32,
  },
});
