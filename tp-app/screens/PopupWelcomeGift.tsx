import * as React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import ValueIcon from "../components/ValueIcon";
import {
  FontFamily,
  FontSize,
  Width,
  Color,
  BoxShadow,
  Border,
  Padding,
  MinWidth,
  Gap,
} from "../GlobalStyles";

interface PopupWelcomeGiftProps {
  onClose?: () => void;
  coinValue?: number;
}

const PopupWelcomeGift: React.FC<PopupWelcomeGiftProps> = ({ onClose, coinValue = 1000 }) => {
  return (
    <ScrollView
      style={styles.popupWelcomeGift}
      contentContainerStyle={styles.popupWelcomeGiftScrollViewContent}
    >
      <View style={[styles.gamecardL, styles.contentBorder]}>
        <View style={[styles.content, styles.contentBorder]}>
          <Image
            style={styles.bannerWelcomeGiftIcon}
            contentFit="cover"
            source={require("../assets/banner-welcomegift.png")}
          />
          <View style={styles.cardInfo}>
            <View style={styles.valueIconContainer}>
              <ValueIcon 
                property1="coin" 
                size="L" 
                value={coinValue.toString()}
                showIconCoin={true}
              />
            </View>
            <Text style={[styles.youNeedTo, styles.closeTypo]}>
              Here's a Welcome Treasure - Enjoy!
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onClose} activeOpacity={0.8}>
        <Text style={[styles.close, styles.closeTypo]}>CLOSE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  popupWelcomeGiftScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 188,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    height: 852,
  },
  contentBorder: {
    borderStyle: "solid",
    overflow: "hidden",
  },
  closeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.fs_16,
    alignSelf: "stretch",
  },
  popupWelcomeGift: {
    width: Width.width_393,
    backgroundColor: Color.colorDarkslateblue,
    flex: 1,
    maxWidth: 393,
  },
  gamecardL: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    borderRadius: Border.br_11,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.questCardOutline,
    borderWidth: 1,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
    overflow: "hidden",
  },
  content: {
    width: 360,
    borderRadius: Border.br_12,
    borderColor: "#CFD6FF",
    borderWidth: 2,
    overflow: "hidden",
  },
  bannerWelcomeGiftIcon: {
    height: 240,
    maxWidth: "100%",
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cardInfo: {
    backgroundColor: Color.textWhite,
    alignItems: "center",
    paddingHorizontal: Padding.padding_16,
    paddingTop: 24,
    paddingBottom: 24,
    gap: Gap.gap_16,
    alignSelf: "stretch",
  },
  youNeedTo: {
    color: "#656565",
  },
  close: {
    color: Color.textWhite,
  },
  valueIconContainer: {
    backgroundColor: "#434FBF",
    paddingHorizontal: Padding.padding_16,
    paddingVertical: 8,
    borderRadius: 40,
    alignItems: "center",
    alignSelf: "center",
  },
});

export default PopupWelcomeGift;

