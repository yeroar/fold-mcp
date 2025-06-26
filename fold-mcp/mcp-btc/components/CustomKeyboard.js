import { StyleSheet } from "react-native";
import { M4, M6 } from "../constants/spacing";
import { LayerBackground } from "../constants/colors";

const styles = StyleSheet.create({
  outer: {
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: Number(M4),
    paddingRight: Number(M4),
    paddingBottom: Number(M6) * 2,
    backgroundColor: LayerBackground,
  },
});

export default styles;