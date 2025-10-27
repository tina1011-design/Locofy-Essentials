import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import ValueIcon from "./ValueIcon";
import {
  Border,
  Color,
  Height,
  Padding,
  Gap,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type BarEaruptoType = {
  showIconCash?: boolean;
  onPress?: () => void;
};

const BarEarupto = ({ showIconCash, onPress }: BarEaruptoType) => {
  return (
    <TouchableOpacity style={styles.valueBox} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.earnUpTo}>Earn Up To :</Text>
      <ValueIcon
        property1="cash"
        size="L"
        value="2400"
        showIconCash={showIconCash}
        iconCoin={require("../assets/icon-cash1.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  valueBox: {
    width: 187,
    borderRadius: Border.br_16,
    backgroundColor: Color.dialogBackground,
    height: Height.height_40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_8,
    gap: Gap.gap_4,
    zIndex: 0,
    marginLeft: -8,
  },
  earnUpTo: {
    flex: 1,
    fontSize: FontSize.fs_12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textWhite,
    textAlign: "left",
  },
});

export default BarEarupto;
