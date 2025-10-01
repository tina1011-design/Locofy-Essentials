import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  Padding,
  LineHeight,
  FontFamily,
  Height,
} from "../GlobalStyles";

const BtnPlayNEarn = () => {
  return (
    <Pressable style={styles.btnPlaynearn}>
      <Text
        style={[styles.playEarn, styles.playEarnClr]}
      >{`PLAY & EARN  `}</Text>
      <View style={styles.currencyIcon}>
        <Image
          style={styles.iconCash}
          contentFit="cover"
          source={require("../assets/icon-cash1.png")}
        />
        <Text style={[styles.currencyValue, styles.playEarnClr]}>202</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  playEarnClr: {
    display: "flex",
    color: Color.textWhite,
    fontSize: FontSize.fs_24,
  },
  btnPlaynearn: {
    width: 295,
    height: 88,
    overflow: "hidden",
    paddingHorizontal: 42,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_24,
    alignItems: "center",
  },
  playEarn: {
    alignSelf: "stretch",
    lineHeight: LineHeight.lh_24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  currencyIcon: {
    flexDirection: "row",
    marginTop: -2,
    alignItems: "center",
  },
  iconCash: {
    width: 34,
    height: Height.height_34,
  },
  currencyValue: {
    width: 54,
    fontFamily: FontFamily.luckiestGuyRegular,
    textAlign: "left",
    alignItems: "flex-end",
    marginLeft: -4,
    height: Height.height_34,
  },
});

export default BtnPlayNEarn;
