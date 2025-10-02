import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Width, Height, FontSize, FontFamily, Color } from "../GlobalStyles";

export type ValueIconType = {
  value?: string;
  showIconCash?: boolean;
  iconCoin?: ImageSourcePropType;

  /** Variant props */
  property1?: "coin" | "cash" | "cashback";
  size?: string;
};

const ValueIcon = ({
  property1 = "cash",
  size = "S",
  value = "2400",
  showIconCash = true,
  iconCoin,
}: ValueIconType) => {
  return (
    <View style={styles.root}>
      {!!showIconCash && (
        <Image style={styles.iconCoin} contentFit="cover" source={iconCoin} />
      )}
      <Text style={styles.separatorOne}>{value}</Text>
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
