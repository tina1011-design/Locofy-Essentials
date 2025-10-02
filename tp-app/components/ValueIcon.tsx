import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Width, Height, FontSize, FontFamily, Color } from "../GlobalStyles";

export type ValueIconType = {
  value?: string;
  showIconCash?: boolean;

  /** Variant props */
  property1?: "coin" | "cash" | "cashback";
  size?: string;

  /** Style props */
  valueIconMarginTop?: number | string;
};

const getValueIconContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "cash-L":
      return {
        justifyContent: null,
      };
  }
};
const getIconCoinStyle = (styleKey: string) => {
  switch (styleKey) {
    case "cash-L":
      return {
        width: Width.width_28,
        height: Height.height_28,
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
const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ValueIcon = ({
  property1 = "cash",
  size = "S",
  value = "2400",
  showIconCash = true,
  valueIconMarginTop,
}: ValueIconType) => {
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
            property1 === "cash" 
              ? require("../assets/icon-cash.png")
              : property1 === "cashback"
              ? require("../assets/icon-cashback.png")
              : require("../assets/icon-coin.png")
          }
        />
      )}
      <Text style={[styles.separatorOne, getText5Style(variantKey)]}>
        {value}
      </Text>
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
  },
  separatorOne: {
    width: Width.width_41,
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.luckiestGuyRegular,
    color: Color.textWhite,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    marginLeft: -4,
    height: Height.height_20,
  },
});

export default ValueIcon;
