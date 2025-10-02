import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import HighlightLeft11 from "../assets/Highlight-Left-11.svg";
import HighlightRight11 from "../assets/Highlight-Right-11.svg";
import {
  Border,
  Width,
  BoxShadow,
  Color,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type ButtonPlay1Type = {
  /** Variant props */
  property1?: string;
};

const ButtonPlay1 = ({ property1 = "Install" }: ButtonPlay1Type) => {
  return (
    <Pressable style={styles.buttonPlay}>
      <View style={[styles.base, styles.basePosition]} />
      <LinearGradient
        style={[styles.surface, styles.basePosition]}
        locations={[0, 1]}
        colors={["#21e917", "#0ebc05"]}
      />
      <HighlightLeft11
        style={styles.highlightLeft1Icon}
        width={NaN}
        height={NaN}
      />
      <HighlightRight11
        style={styles.highlightRight1Icon}
        width={NaN}
        height={NaN}
      />
      <Image
        style={styles.highlightLeft2Icon}
        contentFit="cover"
        source={require("../assets/Highlight-Left-21.png")}
      />
      <Text style={styles.play}>Play</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    top: 0,
    position: "absolute",
    borderRadius: Border.br_6,
  },
  buttonPlay: {
    width: Width.width_61_2,
    boxShadow: BoxShadow.buttonShadow,
    elevation: 1,
    backgroundColor: Color.buttonPlayDepth,
    borderStyle: "solid",
    borderColor: Color.buttonPlayOutline,
    borderWidth: 0.6,
    height: Height.height_33_2,
    borderRadius: Border.br_6,
  },
  base: {
    width: "98.04%",
    right: "1.96%",
    left: "0%",
    backgroundColor: Color.buttonPlayBackground,
    height: Height.height_28,
  },
  surface: {
    width: "94.77%",
    right: "3.59%",
    left: "1.63%",
    height: Height.height_26,
    backgroundColor: "transparent",
  },
  highlightLeft1Icon: {
    width: Width.width_54_5,
    height: Height.height_24_87,
  },
  highlightRight1Icon: {
    width: Width.width_37_5,
    height: Height.height_11,
  },
  highlightLeft2Icon: {
    width: Width.width_51_55,
    height: Height.height_7_2,
  },
  play: {
    marginLeft: -14.6,
    top: 5,
    left: "50%",
    fontSize: FontSize.fs_12,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.textWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: Width.width_30,
    height: Height.height_18,
    position: "absolute",
  },
});

export default ButtonPlay1;
