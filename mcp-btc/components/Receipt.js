import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  LayerBackground,
  BorderElevated,
  FaceSubtlest,
  FaceDefault,
  M4,
  M6,
} from "./generated-tokens/tokens";

export default function Receipt({
  exchangeRate = "$100,000.00",
  amount = "$99.00",
  fees = "+ $1.00",
}) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.lineItem}>
          <Text style={styles.label}>Exchange rate</Text>
          <Text style={styles.value}>{exchangeRate}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.lineItem}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.value}>{amount}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.lineItem}>
          <Text style={styles.label}>Fees</Text>
          <Text style={styles.value}>{fees}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: LayerBackground,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BorderElevated,
    width: "100%",
    marginTop: Number(M6),
    marginBottom: Number(M6),
    alignSelf: "center",
  },
  inner: {
    paddingHorizontal: Number(M4),
    paddingVertical: Number(M6),
  },
  lineItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 0,
    width: "100%",
  },
  label: {
    color: FaceSubtlest,
    fontFamily: "Geist",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
    textAlign: "left",
  },
  value: {
    color: FaceDefault,
    fontFamily: "Geist",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "right",
    flexShrink: 0,
    marginLeft: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#1d21250f",
    width: "100%",
    marginVertical: Number(M4),
  },
});
