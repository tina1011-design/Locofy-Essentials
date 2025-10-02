import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import Icontime from "../assets/icon-time.svg";
import Iconhourglass from "../assets/icon-hourglass.svg";
import ValueIcon from "./ValueIcon";
import ButtonPlay1 from "./ButtonPlay1";
import {
  Gap,
  Color,
  FontFamily,
  FontSize,
  Height,
  Width,
  BoxShadow,
  Border,
  Padding,
  MinWidth,
} from "../GlobalStyles";

export type GameCardLPlayType = {
  highlightLeft1?: ImageSourcePropType;
  highlightLeft2?: ImageSourcePropType;
  property11?: "Install" | "Play";
  highlightRight1?: ImageSourcePropType;
  install?: string;
  size?: string;
  valueIconMarginTop?: string;
};

const GameCardLPlay = memo(
  ({
    highlightLeft1,
    highlightLeft2,
    property11 = "Install",
    highlightRight1,
    install,
    size,
    valueIconMarginTop,
  }: GameCardLPlayType) => {
    return (
      <View style={[styles.gamecardLPlay, styles.contentBorder]}>
        <View style={[styles.content, styles.contentBorder]}>
          <ImageBackground
            style={styles.gameBannerLIcon}
            resizeMode="cover"
            source={require("../assets/Game-Banner-L.png")}
          >
            <View style={[styles.questTitlecountdown, styles.cardInfoFlexBox]}>
              <View style={[styles.questtitle, styles.detailsFlexBox]}>
                <Icontime style={styles.iconTime} width={NaN} height={NaN} />
                <Text style={[styles.questTitle, styles.daysTypo]}>
                  Quest Title
                </Text>
              </View>
              <View style={[styles.questtitle, styles.detailsFlexBox]}>
                <Iconhourglass
                  style={styles.iconTime}
                  width={NaN}
                  height={NaN}
                />
                <Text style={[styles.days, styles.daysTypo]}>6 days</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={[styles.cardInfo, styles.cardInfoFlexBox]}>
            <View style={[styles.details, styles.detailsFlexBox]}>
              <View style={styles.valueBox1}>
                <ValueIcon
                  property1="coin"
                  size={size}
                  value="2400"
                  showIconCash
                  valueIconMarginTop={valueIconMarginTop}
                />
              </View>
            </View>
            <ButtonPlay1 property1="Play" />
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  contentBorder: {
    borderStyle: "solid",
    overflow: "hidden",
  },
  cardInfoFlexBox: {
    gap: Gap.gap_0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  detailsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  daysTypo: {
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.textWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.fs_12,
    height: Height.height_18,
  },
  gamecardLPlay: {
    width: Width.width_362,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    borderRadius: Border.br_11,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.gameCardOutline,
    borderWidth: 1,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
    overflow: "hidden",
  },
  content: {
    borderRadius: Border.br_12,
    borderColor: Color.gameCardBackgroundOutline,
    borderWidth: 2,
    height: Height.height_248,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  gameBannerLIcon: {
    height: Height.height_192,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  questTitlecountdown: {
    position: "absolute",
    marginLeft: -180,
    top: 156,
    left: "50%",
    backgroundColor: Color.overlayPurpleOverlay,
    width: 360,
    height: Height.height_36,
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_2,
  },
  questtitle: {
    gap: Gap.gap_4,
  },
  iconTime: {
    width: Width.width_12,
    height: Height.height_12,
  },
  questTitle: {
    width: 68,
  },
  days: {
    width: Width.width_44,
  },
  cardInfo: {
    backgroundColor: Color.gameCardBackground,
    height: Height.height_56,
    paddingHorizontal: Padding.padding_12,
    paddingVertical: Padding.padding_8,
    alignSelf: "stretch",
  },
  details: {
    height: Height.height_40,
  },
  valueBox1: {
    width: Width.width_92,
    borderRadius: Border.br_8,
    backgroundColor: Color.gameCardInfoBox,
    justifyContent: "center",
    padding: Padding.padding_4,
    height: Height.height_40,
  },
});

export default GameCardLPlay;
