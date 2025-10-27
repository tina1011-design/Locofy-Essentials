import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType, Text } from "react-native";
import ValueIcon from "./ValueIcon";
import {
  Border,
  BoxShadow,
  Color,
  Padding,
  MinWidth,
  Width,
  Height,
} from "../GlobalStyles";

export type GameCardSType = {
  valueIconProperty1?: "coin" | "cash" | "cashback";
  valueIconValue1?: string;
  valueIconValueIconFlex?: number;
  appBannerVertical?: ImageSourcePropType;
  valueIconSize1?: string;
  valueIconShowIconCash?: boolean;
  valueIconValueIconFlex1?: number;
};

const GameCardS = ({
  valueIconProperty1 = "cash",
  valueIconValue1,
  valueIconValueIconFlex,
  appBannerVertical,
  valueIconSize1,
  valueIconShowIconCash,
  valueIconValueIconFlex1,
}: GameCardSType) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.gamecardS, styles.cardInfoFlexBox]}>
        <View style={[styles.content, styles.contentBorder]}>
          <Image
            style={styles.appbannerVerticalIcon}
            contentFit="cover"
            source={require("../assets/AppBanner_Vertical.png")}
          />
          <View style={[styles.cardInfo, styles.cardInfoFlexBox]}>
            <ValueIcon
              property1={valueIconProperty1}
              size="M"
              value="2400"
              showIconCash={valueIconShowIconCash}
              valueIconMarginTop="unset"
            />
            <View style={[styles.cashbackValue, styles.cardInfoFlexBox]}>
              <ValueIcon
                property1="cashback"
                size="S"
                value={valueIconValue1}
                showIconCash
                valueIconMarginTop="unset"
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.appName}>Merge Mayor - Match Puzzle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
  },
  cardInfoFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  contentBorder: {
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: Border.br_8,
    borderStyle: "solid",
  },
  gamecardS: {
    boxShadow: BoxShadow.gameCard,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.questCardOutline,
    paddingBottom: Padding.padding_8,
    minWidth: 148,
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: Border.br_8,
    borderStyle: "solid",
  },
  content: {
    borderColor: Color.gameCardBackgroundOutline,
    height: 240,
  },
  appbannerVerticalIcon: {
    width: 148,
    height: 208,
  },
  cardInfo: {
    alignSelf: "stretch",
    backgroundColor: Color.gameCardBackground,
    height: 32,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Padding.padding_8,
    paddingVertical: Padding.padding_2,
  },
  cashbackValue: {
    borderColor: "#D3D6FB",
    borderLeftWidth: 1,
    paddingLeft: Padding.padding_8,
    borderStyle: "solid",
    flexDirection: "row",
  },
  appName: {
    color: "#D3D6FB",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 12,
    textAlign: "left",
    alignSelf: "flex-start",
    width: 148,
  },
});

export default GameCardS;
