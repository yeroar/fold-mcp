import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import KeyboardButton from "./KeyboardButton";
import { IconBackspace } from "./generated-tokens/tokens";
import { LayerBackground, M4, M6 } from "./generated-tokens/tokens";

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "←"];
const NUM_COLUMNS = 3;
const PADDING = Number(M4);

/**
 * CustomKeyboard component
 * @param {Object} props
 * @param {function} props.onKeyPress - Callback called with the pressed key
 */
export default function CustomKeyboard({ onKeyPress }) {
  const screenWidth = Dimensions.get("window").width;
  const buttonWidth =
    (screenWidth - PADDING * 2 - (NUM_COLUMNS - 1) * 8) / NUM_COLUMNS;

  // Chunk KEYS into rows of 3, always 4 rows
  const rows = [];
  for (let i = 0; i < KEYS.length; i += NUM_COLUMNS) {
    rows.push(KEYS.slice(i, i + NUM_COLUMNS));
  }
  // Pad rows to always have 4 rows of 3
  while (rows.length < 4) {
    rows.push([]);
  }
  rows.forEach((row) => {
    while (row.length < NUM_COLUMNS) {
      row.push(null);
    }
  });

  return (
    <View style={styles.outer}>
      <View style={styles.keyboardBlock}>
        <View style={styles.container}>
          {rows.map((row, rowIdx) => (
            <View key={rowIdx} style={styles.row}>
              {row.map((key, idx) =>
                key ? (
                  <View
                    key={key + idx}
                    style={[styles.cell, { width: buttonWidth }]}
                  >
                    {key === "←" ? (
                      <KeyboardButton
                        label={
                          <Image
                            source={{ uri: IconBackspace }}
                            style={{ width: 24, height: 24 }}
                            resizeMode="contain"
                          />
                        }
                        onPress={() => onKeyPress(key)}
                      />
                    ) : (
                      <KeyboardButton
                        label={key}
                        onPress={() => onKeyPress(key)}
                      />
                    )}
                  </View>
                ) : (
                  <View
                    key={"empty" + idx}
                    style={[styles.cell, { width: buttonWidth }]}
                  />
                )
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: "100%",
    alignItems: "center",
    paddingLeft: Number(M4),
    paddingRight: Number(M4),
    paddingBottom: Number(M6),
    backgroundColor: LayerBackground,
  },
  keyboardBlock: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: LayerBackground,
    borderRadius: Number(M6),
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: LayerBackground,
    borderRadius: Number(M6),
  },
  cell: {
    margin: Number(M4) / 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
