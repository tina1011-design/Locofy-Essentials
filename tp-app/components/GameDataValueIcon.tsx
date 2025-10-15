import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import SvgTextWithStroke from "./SvgTextWithStroke";
import { Width, Height, FontSize, FontFamily, Color } from "../GlobalStyles";

export type GameDataValueIconType = {
  value?: string;
  showIconCash?: boolean;

  /** Variant props */
  property1?: "invite" | "medal";
  size?: string;

  /** Style props */
  valueIconMarginTop?: number | string;
};

const getValueIconContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "cash-L":
      return {
        justifyContent: "center" as const,
      };
  }
};
const getIconCoinStyle = (styleKey: string) => {
  switch (styleKey) {
    case "invite-S":
      return {
        width: 24,
        height: 24,
      };
    case "invite-M":
      return {
        width: 30,
        height: 30,
      };
    case "invite-L":
      return {
        width: 42,
        height: 42,
      };
    case "medal-S":
      return {
        width: 24,
        height: 24,
      };
    case "medal-M":
      return {
        width: 30,
        height: 30,
      };
    case "medal-L":
      return {
        width: 42,
        height: 42,
      };
  }
};
const getText5Style = (styleKey: string) => {
  switch (styleKey) {
    case "cash-L":
      return {
        height: Height.height_28,
        width: 59,
        fontSize: FontSize.fs_24,
      };
  }
};
const getTextContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "invite-S":
    case "medal-S":
      return {
        minHeight: 35,
      };
    case "invite-M":
    case "medal-M":
      return {
        width: 44,
        height: 24,
      };
    case "invite-L":
    case "medal-L":
      return {
        minHeight: 40,
      };
  }
};
const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GameDataValueIcon = ({
  property1 = "invite",
  size = "S",
  value = "2400",
  showIconCash = true,
  valueIconMarginTop,
}: GameDataValueIconType) => {
  const variantKey = [property1, size].join("-");

  const valueIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", valueIconMarginTop),
    };
  }, [valueIconMarginTop]);

  return (
    <View
      style={[
        styles.root,
        getValueIconContainerStyle(variantKey),
        valueIconStyle,
      ]}
    >
      {!!showIconCash && (
        <Image
          style={[styles.iconCoin, getIconCoinStyle(variantKey)]}
          contentFit="cover"
          source={
            property1 === "invite" 
              ? require("../assets/img-acceptedinvites.png")
              : require("../assets/img-medalsearned.png")
          }
        />
      )}
      <View style={[styles.textContainer, getTextContainerStyle(variantKey)]}>
        <SvgTextWithStroke
          text={value}
          fontSize={size === "S" ? FontSize.fs_12 : size === "M" ? FontSize.fs_16 : FontSize.fs_24}
          fontFamily={FontFamily.luckiestGuyRegular}
          fill="#757575"
          stroke="none"
          strokeWidth={0}
          width={size === "S" ? 30 : size === "M" ? Width.width_41 : 59}
          height={size === "S" ? Height.height_16 : size === "M" ? Height.height_20 : Height.height_28}
          x={size === "S" ? 12 : size === "M" ? 16 : 20}
          y={size === "S" ? 2 : size === "M" ? 3 : 4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCoin: {
    width: Width.width_20,
    height: Height.height_20,
    marginRight: -15,
    zIndex: 2,
  },
  textContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#766155",
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 50,
    flex: 0,
    position: "relative",
    zIndex: 1,
  },
});

export default GameDataValueIcon;
