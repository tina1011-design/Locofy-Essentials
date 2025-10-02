import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import HighlightLeft1 from "../assets/Highlight-Left-1.svg";
import HighlightRight1 from "../assets/Highlight-Right-1.svg";
import {
  Width,
  Height,
  BoxShadow,
  Color,
  Padding,
  Border,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const ButtonInstall = () => {
  return (
    <Pressable style={styles.buttonInstall}>
      <View style={styles.baseLayout}>
        <View style={[styles.base, styles.basePosition]} />
        <LinearGradient
          style={[styles.surface, styles.basePosition]}
          locations={[0, 1]}
          colors={["#0da7fa", "#0c82dc"]}
        />
        <View style={[styles.highlightInstall, styles.highlightPosition]}>
          <HighlightLeft1
            style={[styles.highlightLeft1Icon, styles.highlightPosition]}
            width={NaN}
            height={NaN}
          />
          <Image
            style={[styles.highlightLeft2Icon, styles.basePosition]}
            contentFit="cover"
            source={require("../assets/Highlight-Left-22.png")}
          />
          <Text style={styles.install}>Install</Text>
        </View>
        <HighlightRight1
          style={styles.highlightRight1Icon}
          width={NaN}
          height={NaN}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    top: 0,
    position: "absolute",
  },
  highlightPosition: {
    width: Width.width_54_5,
    top: 0,
    position: "absolute",
  },
  buttonInstall: {
    height: Height.height_33_2,
    width: Width.width_61_2,
    boxShadow: BoxShadow.buttonShadow,
    elevation: 1,
    backgroundColor: Color.buttonInstallDepth,
    borderStyle: "solid",
    borderColor: Color.buttonInstallOutline,
    borderWidth: 0.6,
    flexDirection: "row",
    paddingHorizontal: Padding.padding_0,
    paddingTop: Padding.padding_0,
    paddingBottom: 4,
    borderRadius: Border.br_6,
  },
  baseLayout: {
    backgroundColor: Color.buttonInstallBackground,
    width: Width.width_60,
    height: Height.height_28,
    borderRadius: Border.br_6,
  },
  base: {
    display: "none",
    left: 0,
    backgroundColor: Color.buttonInstallBackground,
    width: Width.width_60,
    height: Height.height_28,
    borderRadius: Border.br_6,
  },
  surface: {
    width: 58,
    height: Height.height_26,
    backgroundColor: "transparent",
    left: 1,
    borderRadius: Border.br_6,
  },
  highlightInstall: {
    height: 25,
    left: 1,
  },
  highlightLeft1Icon: {
    height: Height.height_24_87,
    left: 0,
  },
  highlightLeft2Icon: {
    width: Width.width_51_55,
    height: Height.height_7_2,
    left: 0,
  },
  install: {
    top: 5,
    left: 9,
    fontSize: FontSize.fs_12,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.textWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: Width.width_42,
    height: Height.height_18,
    position: "absolute",
  },
  highlightRight1Icon: {
    top: 15,
    left: 22,
    width: Width.width_37_5,
    height: Height.height_11,
    position: "absolute",
  },
});

export default ButtonInstall;
