import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icontime from "../assets/icon-time.svg";
import ValueIcon from "./ValueIcon";
import {
  Padding,
  BoxShadow,
  Color,
  Border,
  Width,
  Gap,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type GameIconCardType = {
  valueIconValueIconFlex1?: number;
  valueIconValue1?: string;
  valueIconValueIconMarginTop?: string;
  valueIconValueIconFlex?: number;
};

const GameIconCard = ({
  valueIconValueIconFlex1,
  valueIconValue1,
  valueIconValueIconMarginTop,
  valueIconValueIconFlex,
}: GameIconCardType) => {
  return (
    <View style={styles.gameIconCard}>
      <ImageBackground
        style={styles.appicon}
        resizeMode="cover"
        source={require("../assets/appicon.png")}
      >
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  gameIconCard: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.gameCardOutline,
    paddingBottom: Padding.padding_8,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  appicon: {
    width: 72,
    height: 72,
    gap: 30,
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignSelf: "stretch",
    borderRadius: Border.br_8,
    overflow: "hidden",
    borderWidth: 1.4,
    borderColor: "#fff",
    borderStyle: "solid",
  },
});

export default GameIconCard;
