import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Dimensions,
  findNodeHandle,
} from "react-native";
import NavigationTopBar from "./components/NavigationTopBar";
import EnterAmount from "./components/EnterAmount";
import Button from "./components/Button";
import PmTile from "./components/PmTile";
import PMsheet from "./components/PMsheet";
import {
  LayerBackground,
  M4,
  ObjectBrandBoldDefault,
} from "./components/generated-tokens/tokens";
import LoadingScreen from "./components/LoadingScreen";
import MaskedView from "@react-native-masked-view/masked-view";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import Receipt from "./components/Receipt";
import AmountWrapperStyles from "./components/AmountWrapperStyles";

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
  const { amount } = route.params || {};
  const [pmSheetVisible, setPmSheetVisible] = useState(false);
  const [selectedPm, setSelectedPm] = useState(null);
  const [confirmDisabled, setConfirmDisabled] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [buttonLayout, setButtonLayout] = useState(null);
  const revealRadius = useSharedValue(0);
  const screen = Dimensions.get("window");

  const handleSelectPm = (pm) => {
    setSelectedPm(pm);
    setPmSheetVisible(false);
  };

  const handleConfirm = () => {
    setConfirmDisabled(true);
    setReveal(true);
    // Calculate max radius from button center to farthest corner
    if (!buttonLayout) return;
    const { x, y, width, height } = buttonLayout;
    const cx = x + width / 2;
    const cy = y + height / 2;
    const distances = [
      Math.hypot(cx, cy),
      Math.hypot(screen.width - cx, cy),
      Math.hypot(cx, screen.height - cy),
      Math.hypot(screen.width - cx, screen.height - cy),
    ];
    const finalRadius = Math.max(...distances);
    revealRadius.value = 0;
    revealRadius.value = withTiming(finalRadius, { duration: 1000 }, () => {
      runOnJS(navigation.replace)("Loading");
    });
  };

  const animatedMaskStyle = useAnimatedStyle(() => {
    if (!buttonLayout) return { width: 0, height: 0, borderRadius: 0 };
    const { x, y, width, height } = buttonLayout;
    const cx = x + width / 2;
    const cy = y + height / 2;
    return {
      position: "absolute",
      left: cx - revealRadius.value,
      top: cy - revealRadius.value,
      width: revealRadius.value * 2,
      height: revealRadius.value * 2,
      borderRadius: revealRadius.value,
      backgroundColor: "#FFD600",
    };
  });

  return (
    <View style={styles.container}>
      {reveal && buttonLayout ? (
        <MaskedView
          style={StyleSheet.absoluteFill}
          maskElement={<Animated.View style={animatedMaskStyle} />}
        >
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: ObjectBrandBoldDefault },
            ]}
          />
        </MaskedView>
      ) : null}
      <View style={{ flex: 1, opacity: reveal ? 0 : 1 }}>
        <NavigationTopBar
          title="Order Preview"
          leadingIcon={{
            iconType: "chevron-back",
            onPress: () => navigation.goBack?.(),
            accessibilityLabel: "Go back",
          }}
        />
        <View style={AmountWrapperStyles.amountWrapper}>
          <EnterAmount
            amount={amount}
            showInput={true}
            readOnlyInput={true}
            showBottomContext={false}
            style={AmountWrapperStyles.amountWrapper}
          />
        </View>
        <View style={styles.infoWrapper}>
          <PmTile
            isSelected={!!selectedPm}
            empty={!selectedPm}
            icon={selectedPm ? selectedPm.icon : undefined}
            title={selectedPm ? selectedPm.title : undefined}
            onPress={() => setPmSheetVisible(true)}
          />
          <Receipt
            amount={amount}
            paymentMethod={selectedPm ? selectedPm.title : undefined}
          />
        </View>
        <View style={styles.tokenButtonRow}>
          <Button
            type="brand"
            spacing="default"
            title="Confirm"
            style={{ width: "100%" }}
            disabled={!selectedPm || confirmDisabled}
            onPress={handleConfirm}
            onLayout={(e) => setButtonLayout(e.nativeEvent.layout)}
          />
        </View>
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
  },
  tokenButtonRow: {
    width: "100%",
    paddingHorizontal: Number(M4),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 32,
  },
  infoWrapper: {
    // Remove flex: 1 so it doesn't stretch and hide content
    flex: 1,
    paddingHorizontal: Number(M4),
    alignItems: "start",
    justifyContent: "center",
    marginBottom: 40,
  },
});
