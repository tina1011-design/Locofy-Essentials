import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Height,
  Width,
  BoxShadow,
  Border,
  Padding,
  MinWidth,
  Gap,
} from "../GlobalStyles";

const EventCardMPlayEarn = () => {
  return (
    <View style={[styles.eventcardMPlayearn, styles.contentBorder]}>
      <View style={[styles.content, styles.contentBorder]}>
        <Image
          style={styles.eventBannerMIcon}
          contentFit="cover"
          source={require("../assets/Event-Banner-M.png")}
        />
        <View style={[styles.cardInfo, styles.cardFlexBox]}>
          <View style={[styles.cardTitle, styles.cardFlexBox]}>
            <Text style={[styles.earn, styles.earnTypo]}>Earn</Text>
            <Image
              style={styles.iconCash}
              contentFit="cover"
              source={require("../assets/icon-cash.png")}
            />
            <Text style={[styles.justByPlaying, styles.earnTypo]}>
              just by playing
            </Text>
          </View>
          <Image
            style={styles.buttonPlayearnIcon}
            contentFit="cover"
            source={require("../assets/Button-Play-Earn.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBorder: {
    borderStyle: "solid",
    overflow: "hidden",
  },
  cardFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  earnTypo: {
    display: "flex",
    textAlign: "left",
    color: Color.textGameCardTitle,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.fs_12,
    height: Height.height_18,
    alignItems: "center",
  },
  eventcardMPlayearn: {
    width: 362,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    borderRadius: Border.br_10,
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
    height: 176,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  eventBannerMIcon: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cardInfo: {
    backgroundColor: Color.gameCardBackground,
    height: 58,
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_12,
    paddingVertical: 13,
    gap: Gap.gap_0,
    alignSelf: "stretch",
  },
  cardTitle: {
    gap: Gap.gap_4,
  },
  earn: {
    width: 30,
  },
  iconCash: {
    width: 24,
    height: Height.height_24,
  },
  justByPlaying: {
    width: 91,
  },
  buttonPlayearnIcon: {
    width: 97,
    height: Height.height_40,
  },
});

export default EventCardMPlayEarn;
