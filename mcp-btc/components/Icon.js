import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  FaceDefault,
  FaceSubtlest,
  ObjectBrandBoldDefault,
  IconBackspace,
} from "./generated-tokens/tokens";

/**
 * Reusable Icon component
 * @param {Object} props
 * @param {string} props.type - Icon type: 'chevron-back', 'chevron-right', 'info', 'backspace'
 * @param {number} props.size - Icon size (default: 24)
 * @param {string} props.color - Icon color (default: FaceDefault)
 * @param {Object} props.style - Additional styles
 */
export default function Icon({ type, size = 24, color = FaceDefault, style }) {
  const renderIcon = () => {
    switch (type) {
      case "chevron-back":
        return <Ionicons name="chevron-back" size={size} color={color} />;

      case "chevron-right":
        return <Text style={{ color: color, fontSize: size }}>{">"}</Text>;

      case "info":
        return (
          <View
            style={{
              backgroundColor: ObjectBrandBoldDefault,
              borderRadius: 8,
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: FaceDefault, fontSize: 16 }}>i</Text>
            </View>
          </View>
        );

      case "backspace":
        return (
          <Image
            source={{ uri: IconBackspace }}
            style={{ width: size, height: size }}
            resizeMode="contain"
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={[{ alignItems: "center", justifyContent: "center" }, style]}>
      {renderIcon()}
    </View>
  );
}
