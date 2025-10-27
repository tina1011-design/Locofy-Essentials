import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
  property1?: "Default" | "alert";
};

const QuestCardLExtended = ({
  property1 = "Default",
  valueIconSize1,
  valueIconShowIconCash1,
}: QuestCardLExtendedType) => {
  const isAlert = property1 === "alert";
  
  return (
    <View style={[isAlert ? styles.questcardLExtendedAlert : styles.questcardLExtended, styles.contentBorder]}>
      <View style={[isAlert ? styles.contentAlert : styles.content, styles.contentBorder]}>
        <View
          style={[styles.contentQuestsdetails, styles.upnextContentFlexBox]}
        >
          <View style={[styles.thumbnailBox, styles.upnextContentFlexBox]}>
            <ImageBackground
              style={[styles.contentIcon, styles.contentIconSpaceBlock]}
              resizeMode="cover"
              source={isAlert ? require("../assets/Content1-alert.png") : require("../assets/Content1.png")}
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
                valueIconMarginTop={-12}
              />
            </ImageBackground>
          </View>
          <View style={[styles.cardInfo, styles.cardSpaceBlock]}>
            <View style={styles.titleWcountdown}>
              <View style={styles.upToParent}>
                <View style={[styles.upToRow, styles.upnextContentFlexBox, isAlert && styles.rowWithTimer]}>
                  <View style={[styles.upToRowContent, styles.upnextContentFlexBox]}>
                    <Text style={[isAlert ? styles.upToAlert : styles.upTo, styles.upToFlexBox]}>Up to</Text>
                    <ValueIcon
                      property1="cash"
                      size={valueIconSize1}
                      value="2400"
                      showIconCash={valueIconShowIconCash1}
                      valueIconMarginTop="unset"
                    />
                    <Text style={[isAlert ? styles.byPlayingAlert : styles.byPlaying, styles.upToFlexBox]}>
                      by playing!
                    </Text>
                  </View>
                  {isAlert && (
                    <View style={styles.timeContainer}>
                      <MaterialCommunityIcons name="timer-sand-complete" size={16} color="#C33232" />
                      <Text style={styles.timeValue}>00:15</Text>
                    </View>
                  )}
                </View>
                <View style={styles.titleAndTimeContainer}>
                  <Text style={isAlert ? styles.playFor5Alert : styles.playFor5}>Play for 5 minutes</Text>
                </View>
              </View>
            </View>
            <ProgressBar1 property1="Default" />
          </View>
        </View>
        <View style={[styles.contentUpnext, styles.upnextContentFlexBox]}>
          <View style={[styles.titleUpnext, styles.upnextContentFlexBox]}>
            <View
              style={[isAlert ? styles.titleUpnextInnerAlert : styles.titleUpnextInner, styles.contentIconSpaceBlock]}
            >
              <View style={[styles.upNextWrapper, styles.upnextContentFlexBox]}>
                <Text style={[isAlert ? styles.upNextAlert : styles.upNext, styles.upToFlexBox]}>Up next</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardSpaceBlock}>
            <View style={styles.questtitle}>
              <Text style={[isAlert ? styles.playFor30Alert : styles.playFor30, styles.upToFlexBox]}>
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
    paddingVertical: 0,
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
    backgroundColor: "#9947FF",
    borderColor: Color.questCardOutline,
    borderWidth: 0.6,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
  },
  questcardLExtendedAlert: {
    width: 361,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: "#C33232",
    borderColor: "#1018B3",
    borderWidth: 0.6,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
  },
  content: {
    borderColor: "#FCAFFF",
    borderWidth: 2,
    overflow: "hidden",
    gap: Gap.gap_2,
    alignSelf: "stretch",
  },
  contentAlert: {
    borderColor: Color.questCardAlertBackgroundOutline,
    borderWidth: 2,
    overflow: "hidden",
    gap: Gap.gap_2,
    alignSelf: "stretch",
  },
  contentQuestsdetails: {
    justifyContent: "space-between",
    gap: Gap.gap_0,
    height: 72,
    backgroundColor: "white",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  thumbnailBox: {
    height: 72,
  },
  contentIcon: {
    height: 72,
  },
  imgCountdownIcon: {
    width: 50,
    height: 52,
  },
  cardInfo: {
    gap: Gap.gap_8,
  },
  titleWcountdown: {
    height: 36,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  titleAndTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  timeValue: {
    fontSize: FontSize.fs_12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#C33232",
    textAlign: "right",
  },
  upToParent: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
  },
  upToRow: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
  },
  rowWithTimer: {
    justifyContent: "space-between",
  },
  upToRowContent: {
    gap: Gap.gap_4,
    flex: 1,
  },
  upTo: {
    width: 35,
    color: Color.textQuestCardDefault,
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: Height.height_18,
  },
  upToAlert: {
    width: 35,
    color: "#C33232",
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: Height.height_18,
  },
  byPlaying: {
    width: 75,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsBold,
    color: Color.textQuestCardCashback,
    display: "flex",
    height: Height.height_18,
  },
  byPlayingAlert: {
    width: 75,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsBold,
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
  playFor5Alert: {
    textAlign: "left",
    fontSize: FontSize.fs_12,
    color: "#C33232",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  contentUpnext: {
    height: 36,
    backgroundColor: "white",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  titleUpnext: {
    height: 36,
  },
  titleUpnextInner: {
    backgroundColor: "#FF7EF7",
    height: 36,
  },
  titleUpnextInnerAlert: {
    backgroundColor: "#FF8297",
    height: 36,
  },
  upNextWrapper: {
    justifyContent: "center",
  },
  upNext: {
    width: 49,
    color: "#AB30CB",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    display: "flex",
    height: Height.height_18,
  },
  upNextAlert: {
    width: 49,
    color: "#C33232",
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
  playFor30Alert: {
    width: 129,
    color: "#C33232",
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: Height.height_18,
  },
});

export default QuestCardLExtended;
