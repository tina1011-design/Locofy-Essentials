import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Height, FontSize, FontFamily, Color } from "../GlobalStyles";

export type TitleType = {
  text?: string;
};

const Title = ({ text = "Top Picks for you" }: TitleType) => {
  return (
    <View style={styles.title}>
      <Text style={styles.yourGames}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.padding_24,
    paddingVertical: Padding.padding_10,
  },
  yourGames: {
    height: Height.height_24,
    flex: 1,
    fontSize: FontSize.fs_16,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textWhite,
    textAlign: "left",
  },
});

export default Title;
