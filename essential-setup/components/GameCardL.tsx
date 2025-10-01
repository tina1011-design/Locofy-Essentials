import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import ValueIcon from "./ValueIcon";
import Button1 from "./Button1";
import {
  Padding,
  Color,
  BoxShadow,
  Border,
  MinWidth,
  Gap,
  FontSize,
  FontFamily,
  Width,
  Height,
} from "../GlobalStyles";

export type GameCardLType = {
  valueIconSize1?: "M" | "L";
  valueIconShowIconCash1?: boolean;

  /** Variant props */
  property1?: string;
};

const GameCardL = ({
  property1 = "Install",
  valueIconSize1 = "M",
  valueIconShowIconCash1,
}: GameCardLType) => {
  return (
    <View style={styles.gamecardL}>
      <ImageBackground
        style={styles.contentIcon}
        resizeMode="cover"
        source={require("../assets/Content.png")}
      >
        <Image
          style={styles.gameBannerLIcon}
          contentFit="cover"
          source={require("../assets/Game-Banner-L.png")}
        />
        <View style={[styles.cardInfo, styles.detailsFlexBox]}>
          <View style={[styles.details, styles.detailsFlexBox]}>
            <View style={[styles.valueBox1, styles.valueSpaceBlock]}>
              <Text style={styles.earnupto}>Earn up to</Text>
              <ValueIcon
                property1="cash"
                size="M"
                value="2400"
                showIconCash
                iconCoin={require("../assets/icon-cash.png")}
              />
            </View>
            <View style={[styles.valueBox2, styles.valueSpaceBlock]}>
              <Text style={styles.earnupto}>Cashback</Text>
              <ValueIcon
                property1="cashback"
                size={valueIconSize1}
                value="2400"
                showIconCash={valueIconShowIconCash1}
                iconCoin={require("../assets/icon-cashback.png")}
              />
            </View>
          </View>
          <Button1 property1="Install" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  valueSpaceBlock: {
    padding: Padding.padding_4,
    backgroundColor: Color.gameCardInfoBox,
  },
  gamecardL: {
    width: 362,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    borderRadius: Border.br_11,
    backgroundColor: Color.gameCardDepth,
    borderStyle: "solid",
    borderColor: Color.questCardOutline,
    borderWidth: 1,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
    overflow: "hidden",
  },
  contentIcon: {
    borderRadius: Border.br_12,
    height: 248,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  gameBannerLIcon: {
    maxWidth: "100%",
    height: 192,
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cardInfo: {
    backgroundColor: Color.gameCardBackground,
    height: 56,
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_12,
    paddingVertical: Padding.padding_8,
    gap: Gap.gap_0,
    alignSelf: "stretch",
  },
  details: {
    gap: Gap.gap_1,
  },
  valueBox1: {
    width: 92,
    borderTopLeftRadius: Border.br_8,
    borderBottomLeftRadius: Border.br_8,
  },
  earnupto: {
    fontSize: FontSize.fs_9,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textGameCardTitle,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  valueBox2: {
    width: Width.width_72,
    borderTopRightRadius: Border.br_8,
    borderBottomRightRadius: Border.br_8,
    height: Height.height_40,
  },
});

export default GameCardL;
