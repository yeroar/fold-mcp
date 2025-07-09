import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  LayerBackground,
  ObjectBrandBoldDefault,
  BorderElevated,
  FaceDefault,
  FaceSubtlest,
  M4,
  M5,
  M6,
  IconBank,
  IconDebitCard,
} from "./generated-tokens/tokens";
import Icon from "./Icon";

function Grabber() {
  return <View style={styles.grabber} />;
}

function PmSheetRow({ icon, title, subtitle, subsubtitle, onPress }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconWrap}>{icon}</View>
      <View style={styles.rowTextWrap}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowSubtitle}>{subtitle}</Text>
        {subsubtitle ? (
          <Text style={styles.rowSubsubtitle}>{subsubtitle}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const paymentMethods = [
  {
    key: "bank",
    icon: (
      <View
        style={{
          backgroundColor: "#f7f2de",
          borderRadius: 12,
          padding: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon type="custom" size={20} source={IconBank} />
      </View>
    ),
    title: "Bank account",
    subtitle: "Fund your purchase via ACH",
    subsubtitle: "Deposit fee waved",
  },
  {
    key: "card",
    icon: (
      <View
        style={{
          backgroundColor: "#f7f2de",
          borderRadius: 12,
          padding: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon type="custom" size={20} source={IconDebitCard} />
      </View>
    ),
    title: "Debit card",
    subtitle: "Link your debit card",
    subsubtitle: "n.n% deposit fee ($n.nn min)",
  },
];

export default function PMsheet({ onSelect }) {
  return (
    <View style={styles.sheet}>
      <Grabber />
      <Text style={styles.title}>Add payment method</Text>
      <View style={styles.tableWrap}>
        {paymentMethods.map((pm) => (
          <React.Fragment key={pm.key}>
            <PmSheetRow
              icon={pm.icon}
              title={pm.title}
              subtitle={pm.subtitle}
              subsubtitle={pm.subsubtitle}
              onPress={() => onSelect && onSelect(pm)}
            />
            {pm.key === "bank" && <View style={styles.divider} />}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: LayerBackground,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 16,
    paddingBottom: 48,
    paddingHorizontal: 16,
    alignItems: "center",
    width: "100%",
  },
  grabber: {
    width: 80,
    height: 5,
    borderRadius: 10,
    backgroundColor: ObjectBrandBoldDefault,
    marginBottom: 12,
    marginTop: 0,
  },
  title: {
    fontFamily: "Geist-SemiBold",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24,
    color: FaceDefault,
    textAlign: "center",
    marginBottom: 24,
    width: "100%",
  },
  tableWrap: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BorderElevated,
    width: "100%",
    padding: 0,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Number(M4),
    paddingVertical: Number(M6),
    width: "100%",
    backgroundColor: "#fff",
  },
  iconWrap: {
    backgroundColor: "#f7f2de",
    borderRadius: 12,
    padding: 10,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  rowTextWrap: {
    flex: 1,
    justifyContent: "center",
  },
  rowTitle: {
    fontFamily: "Geist-Medium",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: FaceDefault,
    marginBottom: 0,
  },
  rowSubtitle: {
    fontFamily: "Geist-Regular",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    color: FaceSubtlest,
    marginBottom: 0,
  },
  rowSubsubtitle: {
    fontFamily: "Geist-Regular",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    color: FaceSubtlest,
    marginBottom: 0,
  },
  divider: {
    height: 1,
    backgroundColor: "#e4e4e5",
    width: "100%",
    marginVertical: 0,
  },
});
