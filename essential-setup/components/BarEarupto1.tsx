import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import BarEarupto from "./BarEarupto";
import { Width, Height } from "../GlobalStyles";

const BarEarupto1 = () => {
  return (
    <View style={styles.barEarupto}>
      <Image
        style={styles.imgInfoIcon}
        contentFit="cover"
        source={require("../assets/img-info.png")}
      />
      <BarEarupto showIconCash />
    </View>
  );
};

const styles = StyleSheet.create({
  barEarupto: {
    flexDirection: "row",
  },
  imgInfoIcon: {
    width: Width.width_16,
    height: Height.height_16,
    zIndex: 1,
  },
});

export default BarEarupto1;
