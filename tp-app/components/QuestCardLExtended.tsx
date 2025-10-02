import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import ValueIcon from "./ValueIcon";
import ProgressBar1 from "./ProgressBar1";
import {
  Border,
  Padding,
  Width,
  Height,
  FontSize,
  BoxShadow,
  Color,
  MinWidth,
  Gap,
  FontFamily,
} from "../GlobalStyles";

export type QuestCardLExtendedType = {
  valueIconSize1?: string;
  valueIconShowIconCash1?: boolean;

  /** Variant props */
  property1?: string;
};

const QuestCardLExtended = ({
  property1 = "Default",
  valueIconSize1,
  valueIconShowIconCash1,
}: QuestCardLExtendedType) => {
  return (
    <View style={[styles.questcardLExtended, styles.contentBorder]}>
      <View style={[styles.content, styles.contentBorder]}>
        <View
          style={[styles.contentQuestsdetails, styles.upnextContentFlexBox]}
        >
          <View style={[styles.thumbnailBox, styles.upnextContentFlexBox]}>
            <ImageBackground
              style={[styles.contentIcon, styles.contentIconSpaceBlock]}
              resizeMode="cover"
              source={require("../assets/Content1.png")}
            >
              <Image
                style={styles.imgCountdownIcon}
                contentFit="cover"
                source={require("../assets/img-countdown.png")}
              />
              <ValueIcon
                property1="coin"
                size="M"
                value="2400"
                showIconCash
                iconCoin={require("../assets/icon-coin.png")}
                valueIconMarginTop={-12}
              />
            </ImageBackground>
          </View>
          <View style={[styles.cardInfo, styles.cardSpaceBlock]}>
            <View style={styles.titleWcountdown}>
              <View style={[styles.upToParent, styles.upnextContentFlexBox]}>
                <Text style={[styles.upTo, styles.upToFlexBox]}>Up to</Text>
                <ValueIcon
                  property1="cash"
                  size={valueIconSize1}
                  value="2400"
                  showIconCash={valueIconShowIconCash1}
                  iconCoin={require("../assets/icon-cash.png")}
                  valueIconMarginTop="unset"
                />
                <Text style={[styles.byPlaying, styles.upToFlexBox]}>
                  by playing!
                </Text>
              </View>
              <Text style={styles.playFor5}>Play for 5 minutes</Text>
            </View>
            <ProgressBar1 property1="Default" />
          </View>
        </View>
        <View style={[styles.contentUpnext, styles.upnextContentFlexBox]}>
          <View style={[styles.titleUpnext, styles.upnextContentFlexBox]}>
            <View
              style={[styles.titleUpnextInner, styles.contentIconSpaceBlock]}
            >
              <View style={[styles.upNextWrapper, styles.upnextContentFlexBox]}>
                <Text style={[styles.upNext, styles.upToFlexBox]}>Up next</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardSpaceBlock}>
            <View style={styles.questtitle}>
              <Text style={[styles.playFor30, styles.upToFlexBox]}>
                Play for 30 minutes
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_10,
  },
  upnextContentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  contentIconSpaceBlock: {
    paddingVertical: Padding.padding_6,
    paddingHorizontal: Padding.padding_4,
    width: Width.width_72,
    justifyContent: "center",
    alignItems: "center",
  },
  cardSpaceBlock: {
    paddingVertical: Padding.padding_0,
    paddingHorizontal: Padding.padding_12,
    flex: 1,
    justifyContent: "center",
  },
  upToFlexBox: {
    alignItems: "flex-end",
    display: "flex",
    height: Height.height_18,
    textAlign: "left",
    fontSize: FontSize.fs_12,
  },
  questcardLExtended: {
    width: 361,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: Color.questCardPlayTimeDepth,
    borderColor: Color.questCardOutline,
    borderWidth: 0.6,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
  },
  content: {
    borderColor: Color.questCardPlayTimeBackgroundOutline,
    borderWidth: 2,
    overflow: "hidden",
    gap: Gap.gap_2,
    alignSelf: "stretch",
  },
  contentQuestsdetails: {
    justifyContent: "space-between",
    gap: Gap.gap_0,
    height: Height.height_72,
    backgroundColor: Color.questCardPlayTimeBackground,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  thumbnailBox: {
    height: Height.height_72,
  },
  contentIcon: {
    height: Height.height_72,
  },
  imgCountdownIcon: {
    width: 50,
    height: 52,
  },
  cardInfo: {
    gap: Gap.gap_8,
  },
  titleWcountdown: {
    height: Height.height_36,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  upToParent: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
  },
  upTo: {
    width: 35,
    color: Color.textQuestCardDefault,
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: Height.height_18,
  },
  byPlaying: {
    width: 75,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.textQuestCardCashback,
    display: "flex",
    height: Height.height_18,
  },
  playFor5: {
    textAlign: "left",
    fontSize: FontSize.fs_12,
    color: Color.textQuestCardDefault,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  contentUpnext: {
    height: Height.height_36,
    backgroundColor: Color.questCardPlayTimeBackground,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  titleUpnext: {
    height: Height.height_36,
  },
  titleUpnextInner: {
    backgroundColor: Color.questCardPlayTimeTitleBox,
    height: Height.height_36,
  },
  upNextWrapper: {
    justifyContent: "center",
  },
  upNext: {
    width: 49,
    color: Color.textQuestCardTitleUpNext,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    display: "flex",
    height: Height.height_18,
  },
  questtitle: {
    width: 264,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  playFor30: {
    width: 129,
    color: Color.textQuestCardDefault,
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: Height.height_18,
  },
});

export default QuestCardLExtended;
