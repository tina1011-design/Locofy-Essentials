import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import HighlightLeft1 from "../assets/Highlight-Left-1.svg";
import HighlightRight1 from "../assets/Highlight-Right-1.svg";
import {
  Border,
  BoxShadow,
  Color,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type Button1Type = {
  /** Variant props */
  property1?: string;
};

const Button1 = ({ property1 = "Install" }: Button1Type) => {
  return (
    <Pressable style={styles.button}>
      <View style={[styles.base, styles.basePosition]} />
      <LinearGradient
        style={[styles.surface, styles.basePosition]}
        locations={[0, 1]}
        colors={["#0da7fa", "#0c82dc"]}
      />
      <HighlightLeft1
        style={styles.highlightLeft1Icon}
        width={55}
        height={25}
      />
      <HighlightRight1
        style={styles.highlightRight1Icon}
        width={38}
        height={NaN}
      />
      <Image
        style={styles.highlightLeft2Icon}
        contentFit="cover"
        source={require("../assets/Highlight-Left-2.png")}
      />
      <Text style={styles.install}>Install</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    top: 0,
    position: "absolute",
    borderRadius: Border.br_6,
  },
  button: {
    width: 61,
    boxShadow: BoxShadow.buttonShadow,
    elevation: 1,
    backgroundColor: Color.buttonInstallDepth,
    borderStyle: "solid",
    borderColor: Color.buttonInstallOutline,
    borderWidth: 0.6,
    height: 33,
    overflow: "hidden",
    borderRadius: Border.br_6,
  },
  base: {
    width: "98.04%",
    right: "1.96%",
    left: "0%",
    backgroundColor: Color.buttonInstallBackground,
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
    width: 55,
    height: 25,
  },
  highlightRight1Icon: {
    width: 38,
    height: Height.height_11,
  },
  highlightLeft2Icon: {
    width: 52,
    height: 7,
  },
  install: {
    marginLeft: -20.6,
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
    width: 42,
    height: Height.height_18,
    position: "absolute",
  },
});

export default Button1;
