import * as React from "react";
import { Pressable, Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import SvgTextWithStroke from "./SvgTextWithStroke";
import {
  Color,
  FontSize,
  Padding,
  LineHeight,
  FontFamily,
  Height,
  Width,
} from "../GlobalStyles";

const BtnPlayNEarn = () => {
  return (
    <Pressable style={styles.btnPlaynearn}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require("../assets/btn_PlayNEarn_bg.png")}
      >
        <SvgTextWithStroke
          text="PLAY & EARN"
          fontSize={FontSize.fs_24}
          fontFamily={FontFamily.poppinsBold}
          fill={Color.textWhite}
          stroke="#000000"
          strokeWidth={2}
          width={200}
          height={30}
          textAnchor="middle"
        />
        <View style={styles.currencyIcon}>
          <Image
            style={styles.iconCash}
            contentFit="cover"
            source={require("../assets/icon-cash1.png")}
          />
          <SvgTextWithStroke
            text="2400"
            fontSize={FontSize.fs_24}
            fontFamily={FontFamily.luckiestGuyRegular}
            fill={Color.textWhite}
            stroke="#000000"
            strokeWidth={2}
            width={70}
            height={Height.height_34}
            y={5}
          />
        </View>
      </ImageBackground>
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
  },
  backgroundImage: {
    width: 295,
    height: 88,
    paddingHorizontal: 42,
    paddingLeft: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  currencyIcon: {
    flexDirection: "row",
    marginTop: -2,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCash: {
    width: 34,
    height: Height.height_34,
  },
});

export default BtnPlayNEarn;
