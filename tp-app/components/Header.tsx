import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import HeaderBalance from "./HeaderBalance";
import { Width, Border } from "../GlobalStyles";

type HeaderType = {
  coinBalance?: number;
  cashBalance?: number;
};

const Header = ({ coinBalance = 1200, cashBalance = 5000 }: HeaderType) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerAvatarFrameIcon}
        contentFit="cover"
        source={require("../assets/Header-avatar-frame.png")}
      />
      <HeaderBalance 
        valueIconSize1="M" 
        valueIconShowIconCash1 
        coinBalance={coinBalance}
        cashBalance={cashBalance}
      />
      <View style={styles.headerRightPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Width.width_393,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 35,
    zIndex: 2,
    position: "absolute",
    top: 80,
    left: 0,
  },
  headerAvatarFrameIcon: {
    width: 44,
    borderRadius: Border.br_40,
    height: 44,
    borderWidth: 4,
    borderColor: "#434fbf",
    borderStyle: "solid",
  },
  headerRightPlaceholder: {
    width: 44,
    height: 44,
  },
});

export default Header;
