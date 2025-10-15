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
      <View style={styles.content}>
        <ImageBackground
          style={styles.appicon}
          resizeMode="cover"
          source={require("../assets/appicon.png")}
        >
        </ImageBackground>
      </View>
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
    width: 72,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  content: {
    borderColor: Color.gameCardBackgroundOutline,
    width: Width.width_72,
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
  },
});

export default GameIconCard;
