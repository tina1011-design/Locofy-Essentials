import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Iconstar from "../assets/icon-star.svg";
import {
  Gap,
  Width,
  Height,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

const Rating = () => {
  return (
    <View style={styles.rating}>
      <Iconstar style={styles.iconStar} width={NaN} height={NaN} />
      <Text style={styles.ratingValue}>4.6</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_2,
  },
  iconStar: {
    width: Width.width_16,
    height: Height.height_16,
  },
  ratingValue: {
    height: Height.height_24,
    width: Width.width_28,
    fontSize: FontSize.fs_16,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.othersRating,
    textAlign: "left",
  },
});

export default Rating;
