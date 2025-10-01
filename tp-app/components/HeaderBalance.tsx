import * as React from "react";
import { StyleSheet, View } from "react-native";
import ValueIcon from "./ValueIcon";
import { Border, Color, Padding, Gap } from "../GlobalStyles";

export type HeaderBalanceType = {
  valueIconSize1?: "M" | "L";
  valueIconShowIconCash1?: boolean;
};

const HeaderBalance = ({
  valueIconSize1 = "M",
  valueIconShowIconCash1,
}: HeaderBalanceType) => {
  return (
    <View style={styles.headerBalance}>
      <ValueIcon
        property1="coin"
        size="M"
        value="2400"
        showIconCash
        iconCoin={require("../assets/icon-coin.png")}
      />
      <ValueIcon
        property1="cash"
        size={valueIconSize1}
        value="2400"
        showIconCash={valueIconShowIconCash1}
        iconCoin={require("../assets/icon-cash.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerBalance: {
    width: 197,
    borderRadius: Border.br_40,
    backgroundColor: Color.layoutHeaderBackground,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_2,
    paddingVertical: Padding.padding_8,
    gap: Gap.gap_16,
  },
});

export default HeaderBalance;
