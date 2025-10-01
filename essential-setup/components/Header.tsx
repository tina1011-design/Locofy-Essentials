import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import HeaderBalance from "./HeaderBalance";
import { Width, Border } from "../GlobalStyles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerAvatarFrameIcon}
        contentFit="cover"
        source={require("../assets/Header-avatar-frame.png")}
      />
      <HeaderBalance valueIconSize1="M" valueIconShowIconCash1 />
      <Image
        style={styles.headerAvatarFrameIcon}
        contentFit="cover"
        source={require("../assets/Header-btn-allgame.png")}
      />
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
  },
  headerAvatarFrameIcon: {
    width: 44,
    borderRadius: Border.br_40,
    height: 44,
  },
});

export default Header;
