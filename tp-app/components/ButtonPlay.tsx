import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import HighlightLeft11 from "../assets/Highlight-Left-11.svg";
import HighlightRight11 from "../assets/Highlight-Right-11.svg";
import {
  Color,
  Width,
  Height,
  Border,
  BoxShadow,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const ButtonPlay = () => {
  return (
    <View style={styles.buttonPlay}>
      <View style={[styles.baseParent, styles.baseLayout]}>
        <View style={[styles.base, styles.basePosition]} />
        <LinearGradient
          style={[styles.surface, styles.surfacePosition]}
          locations={[0, 1]}
          colors={["#21e917", "#0ebc05"]}
        />
        <View style={[styles.highlightLeft1Parent, styles.highlightLayout]}>
          <HighlightLeft11
            style={[styles.highlightLeft1Icon, styles.highlightIconPosition]}
            width={NaN}
          />
          <View style={[styles.highlightLeft2Parent, styles.playPosition]}>
            <Image
              style={[styles.highlightLeft2Icon, styles.highlightIconPosition]}
              contentFit="cover"
              source={require("../assets/Highlight-Left-23.png")}
            />
            <Text style={[styles.play, styles.playPosition]}>Play</Text>
          </View>
        </View>
        <HighlightRight11
          style={styles.highlightRight1Icon}
          width={NaN}
          height={NaN}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseLayout: {
    backgroundColor: Color.buttonPlayBackground,
    width: Width.width_60,
    height: Height.height_28,
  },
  basePosition: {
    top: 0,
    borderRadius: Border.br_6,
  },
  surfacePosition: {
    left: 1,
    position: "absolute",
  },
  highlightLayout: {
    width: Width.width_54_5,
    top: 0,
  },
  highlightIconPosition: {
    zIndex: 0,
    position: "absolute",
  },
  playPosition: {
    zIndex: 1,
    height: Height.height_18,
  },
  buttonPlay: {
    height: Height.height_33_2,
    width: Width.width_61_2,
    boxShadow: BoxShadow.buttonShadow,
    elevation: 1,
    backgroundColor: Color.buttonPlayDepth,
    borderStyle: "solid",
    borderColor: Color.buttonPlayOutline,
    borderWidth: 0.6,
    paddingHorizontal: Padding.padding_0,
    paddingTop: Padding.padding_0,
    paddingBottom: 4,
    flexDirection: "row",
    borderRadius: Border.br_6,
  },
  baseParent: {
    borderRadius: Border.br_6,
  },
  base: {
    display: "none",
    left: 0,
    position: "absolute",
    backgroundColor: Color.buttonPlayBackground,
    width: Width.width_60,
    height: Height.height_28,
  },
  surface: {
    width: 58,
    height: Height.height_26,
    backgroundColor: "transparent",
    top: 0,
    borderRadius: Border.br_6,
  },
  highlightLeft1Parent: {
    height: 25,
    paddingLeft: Padding.padding_15,
    paddingTop: Padding.padding_5,
    paddingRight: 12,
    paddingBottom: 1,
    left: 1,
    position: "absolute",
  },
  highlightLeft1Icon: {
    right: 0,
    bottom: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: Width.width_54_5,
    top: 0,
    left: 0,
  },
  highlightLeft2Parent: {
    width: 27,
    flexDirection: "row",
  },
  highlightLeft2Icon: {
    width: Width.width_51_55,
    top: -5,
    left: -15,
    height: Height.height_7_2,
  },
  play: {
    width: Width.width_30,
    fontSize: FontSize.fs_12,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.textWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  highlightRight1Icon: {
    top: 15,
    left: 22,
    width: Width.width_37_5,
    height: Height.height_11,
    position: "absolute",
  },
});

export default ButtonPlay;
