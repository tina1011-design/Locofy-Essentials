import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import {
  Color,
  Width,
  Border,
  BoxShadow,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type Button1Type = {
  highlightLeft1?: React.ReactNode;
  highlightRight1?: React.ReactNode;
  highlightLeft2?: ImageSourcePropType;
  install?: string;

  /** Variant props */
  property1?: "Install" | "Play";
};

const getButton1Style = (styleKey: string) => {
  switch (styleKey) {
    case "Play":
      return {
        backgroundColor: Color.buttonPlayDepth,
      };
  }
};
const getBaseStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Play":
      return {
        backgroundColor: Color.buttonPlayBackground,
      };
  }
};
const getInstallTextStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Play":
      return {
        marginLeft: -14.6,
        width: Width.width_30,
      };
  }
};
const Button1 = ({
  property1 = "Install",
  highlightLeft1,
  highlightRight1,
  highlightLeft2,
  install,
}: Button1Type) => {
  const variantKey = `${property1}`;

  return (
    <Pressable style={[styles.root, getButton1Style(variantKey)]}>
      <View
        style={[styles.base, styles.basePosition, getBaseStyle(variantKey)]}
      />
      <LinearGradient
        style={[styles.surface, styles.basePosition]}
        locations={[0, 1]}
        colors={["#0da7fa", "#0c82dc"]}
      />
      {highlightLeft1}
      {highlightRight1}
      <Image
        style={styles.highlightLeft2Icon}
        contentFit="cover"
        source={highlightLeft2}
      />
      <Text style={[styles.install, getInstallTextStyle(variantKey)]}>
        {install}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    top: 0,
    position: "absolute",
    borderRadius: Border.br_6,
  },
  root: {
    width: Width.width_61_2,
    boxShadow: BoxShadow.buttonShadow,
    elevation: 1,
    backgroundColor: Color.buttonInstallDepth,
    borderStyle: "solid",
    borderColor: Color.buttonInstallOutline,
    borderWidth: 0.6,
    height: Height.height_33_2,
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
  highlightLeft2Icon: {
    width: Width.width_51_55,
    height: Height.height_7_2,
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
