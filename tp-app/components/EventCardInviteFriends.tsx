import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import ValueIcon from "./ValueIcon";
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

type EventCardInviteFriendsType = {
  bannerImage?: string;
};

const EventCardInviteFriends = ({ bannerImage = "banner-invitefriends-1" }: EventCardInviteFriendsType) => {
  const bannerSource = bannerImage === "banner-invitefriends-2" 
    ? require("../assets/banner-invitefriends-2.png")
    : require("../assets/banner-invitefriends-1.png");

  return (
    <View style={[styles.eventcardInvitefriends, styles.contentBorder]}>
      <View style={[styles.content, styles.contentBorder]}>
        <Image
          style={styles.eventBannerMIcon}
          contentFit="cover"
          source={bannerSource}
        />
        {/* Overlay Text - Top Right */}
        <View style={styles.overlayText}>
          <View style={styles.textRow}>
            <Text style={styles.whiteText}>Win up to </Text>
            <ValueIcon property1="coin" size="M" value="10,000" showIconCash textColor="#F8D659" />
          </View>
          <Text style={styles.whiteText}>by inviting new friends!</Text>
        </View>
        {/* Button - Bottom Right */}
        <Image
          style={styles.btnInvite}
          contentFit="cover"
          source={require("../assets/btn-invite.png")}
        />
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
  eventcardInvitefriends: {
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
    position: "relative",
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
  overlayText: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(23, 9, 83, 0.5)",
    padding: 8,
    borderRadius: 8,
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  whiteText: {
    color: "#FFFFFF",
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.fs_12,
    fontWeight: "700",
  },
  btnInvite: {
    position: "absolute",
    bottom: 12,
    right: 12,
    width: 97,
    height: 40,
  },
});

export default EventCardInviteFriends;

