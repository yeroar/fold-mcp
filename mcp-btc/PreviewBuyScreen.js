import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
import NavigationTopBar from "./components/NavigationTopBar";
import EnterAmount from "./components/EnterAmount";
import Button from "./components/Button";
import PmTile from "./components/PmTile";
import PMsheet from "./components/PMsheet";
import { LayerBackground, M4 } from "./components/generated-tokens/tokens";

const paymentMethods = [
  {
    key: "bank",
    icon: (
      <View
        style={{
          backgroundColor: "#f7f2de",
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/522/522554.png"
          style={{ width: 20, height: 20 }}
          alt="bank"
        />
      </View>
    ),
    title: "Bank account",
    subtitle: "Fund your purchase via ACH",
  },
  {
    key: "card",
    icon: (
      <View
        style={{
          backgroundColor: "#f7f2de",
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/5343/5343102.png"
          style={{ width: 20, height: 20 }}
          alt="card"
        />
      </View>
    ),
    title: "Debit card",
    subtitle: "Link your debit card",
  },
];

export default function PreviewBuyScreen({ navigation, route }) {
  // Get the amount passed from navigation
  const { amount } = route.params || {};
  const [pmSheetVisible, setPmSheetVisible] = useState(false);
  const [selectedPm, setSelectedPm] = useState(null);

  const handleSelectPm = (pm) => {
    setSelectedPm(pm);
    setPmSheetVisible(false);
  };

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
      <EnterAmount
        amount={amount}
        showInput={true}
        readOnlyInput={true}
        showBottomContext={false}
      />
      <View style={styles.pmTileRow}>
        <PmTile
          isSelected={!!selectedPm}
          empty={!selectedPm}
          icon={selectedPm ? selectedPm.icon : undefined}
          title={selectedPm ? selectedPm.title : undefined}
          onPress={() => setPmSheetVisible(true)}
        />
      </View>
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
      <Modal
        visible={pmSheetVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPmSheetVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          <View
            style={{ flex: 1 }}
            onTouchEnd={() => setPmSheetVisible(false)}
          />
          <PMsheet onSelect={handleSelectPm} />
        </View>
      </Modal>
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
  pmTileRow: {
    width: "100%",
    paddingHorizontal: Number(M4),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 32,
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
