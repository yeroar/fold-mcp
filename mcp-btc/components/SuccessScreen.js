import React from "react";
import { View, StyleSheet } from "react-native";
import NavigationTopBar from "./components/NavigationTopBar";
import EnterAmount from "./components/EnterAmount";
import Button from "./components/Button";
import AmountWrapperStyles from "./components/AmountWrapperStyles";
import { LayerBackground, M4 } from "./components/generated-tokens/tokens";

export default function SuccessScreen({ navigation, route }) {
  const { amount } = route.params || {};
  return (
    <View style={styles.container}>
      <NavigationTopBar title="Success" leadingIcon={null} />
      <View style={AmountWrapperStyles.amountWrapper}>
        <EnterAmount
          amount={amount}
          showInput={true}
          readOnlyInput={true}
          showBottomContext={false}
          bottomContext={
            <Button
              type="default"
              spacing="compact"
              title="View details"
              style={{ alignSelf: "center" }}
              onPress={() => navigation.navigate("Receipt", { amount })}
            />
          }
        />
      </View>
      <View style={styles.tokenButtonRow}>
        <Button
          type="brand"
          spacing="default"
          title="Done"
          style={{ width: "100%" }}
          onPress={() => navigation.popToTop()}
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
