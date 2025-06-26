import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import KeyboardButton from "./KeyboardButton";

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "←"];
const NUM_COLUMNS = 3;
const PADDING = 16;

/**
 * CustomKeyboard component
 * @param {Object} props
 * @param {function} props.onKeyPress - Callback called with the pressed key
 */
export default function CustomKeyboard({ onKeyPress }) {
  const screenWidth = Dimensions.get("window").width;
  const buttonWidth =
    (screenWidth - PADDING * 2 - (NUM_COLUMNS - 1) * 8) / NUM_COLUMNS;

  return (
    <View style={styles.outer}>
      <View style={styles.keyboardBlock}>
        <View style={styles.container}>
          {KEYS.map((key, idx) => (
            <View key={key + idx} style={[styles.cell, { width: buttonWidth }]}>
              <KeyboardButton label={key} onPress={() => onKeyPress(key)} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: PADDING,
  },
  keyboardBlock: {
    alignSelf: "center",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  cell: {},
});
