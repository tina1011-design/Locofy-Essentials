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

export type GameCardXSType = {
  valueIconValueIconFlex1?: number;
  valueIconValue1?: string;
  valueIconValueIconMarginTop?: string;
  valueIconValueIconFlex?: number;
  appIcon?: string;
  showCountdown?: boolean;
};

const GameCardXS = ({
  valueIconValueIconFlex1,
  valueIconValue1,
  valueIconValueIconMarginTop,
  valueIconValueIconFlex,
  appIcon,
  showCountdown = true,
}: GameCardXSType) => {
  const getAppIconSource = () => {
    if (appIcon === "appicon-designville") {
      return require("../assets/appicon-designville.png");
    } else if (appIcon === "appicon-mansiontale") {
      return require("../assets/appicon-mansiontale.png");
    }
    return require("../assets/appicon.png");
  };

  return (
    <View style={styles.gamecardXs}>
      <View style={styles.content}>
        <ImageBackground
          style={styles.appicon}
          resizeMode="cover"
          source={getAppIconSource()}
        >
          {showCountdown && (
            <View style={[styles.countdown, styles.cardInfoFlexBox]}>
              <MaterialCommunityIcons name="clock-time-five-outline" size={12} color="#fff" />
              <Text style={styles.timeValue}>00:04</Text>
            </View>
          )}
          <View style={[styles.boxCashback, styles.cardInfoFlexBox]}>
            <ValueIcon
              property1="cashback"
              value="2400"
              showIconCash
              valueIconMarginTop={valueIconValueIconMarginTop}
            />
          </View>
        </ImageBackground>
        <View style={[styles.cardInfo, styles.cardInfoFlexBox]}>
          <ValueIcon property1="coin" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardInfoFlexBox: {
    paddingVertical: Padding.padding_2,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  gamecardXs: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.gameCardOutline,
    paddingBottom: Padding.padding_8,
    minWidth: 72,
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
    alignItems: "flex-end",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    position: "relative",
  },
  countdown: {
    gap: Gap.gap_4,
    backgroundColor: "rgba(61, 0, 202, 0.8)",
    paddingHorizontal: 0,
    justifyContent: "center",
    width: Width.width_72,
  },
  iconTime: {
    width: 12,
    height: 12,
  },
  timeValue: {
    height: Height.height_18,
    width: 38,
    fontSize: FontSize.fs_12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textWhite,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  boxCashback: {
    width: 42,
    borderTopLeftRadius: Border.br_8,
    backgroundColor: "rgba(61, 0, 202, 0.8)",
    paddingHorizontal: 0,
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  cardInfo: {
    backgroundColor: Color.gameCardBackground,
    alignSelf: "stretch",
  },
});

export default GameCardXS;