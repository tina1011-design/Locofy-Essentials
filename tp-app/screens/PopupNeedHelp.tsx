import * as React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import BtnDisappointed from "../components/BtnDisappointed";
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

interface PopupNeedHelpProps {
  onClose?: () => void;
}

const PopupNeedHelp: React.FC<PopupNeedHelpProps> = ({ onClose }) => {
  return (
    <ScrollView
      style={styles.popupNeedHelp}
      contentContainerStyle={styles.popupNeedHelpScrollViewContent}
    >
      <View style={[styles.gamecardL, styles.contentBorder]}>
        <View style={[styles.content, styles.contentBorder]}>
          <Image
            style={styles.bannerRateusIcon}
            contentFit="cover"
            source={require("../assets/banner-needhelp.png")}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.rateUsTitle}>NEED HELP?</Text>
            <Text style={[styles.youNeedTo, styles.closeTypo]}>
              Please email to{" "}
              <Text style={styles.emailText}>help@treasureplay.com</Text>
              {"\n"}Our team will get back to you as soon as possible
            </Text>
            <View style={styles.buttonRow}>
              <BtnDisappointed buttonText="OK" onPress={onClose} />
            </View>
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
  popupNeedHelpScrollViewContent: {
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
  popupNeedHelp: {
    width: Width.width_393,
    backgroundColor: "rgba(32, 20, 59, 0.5)",
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
  bannerRateusIcon: {
    height: 180,
    maxWidth: "100%",
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cardInfo: {
    backgroundColor: Color.textWhite,
    alignItems: "center",
    paddingHorizontal: Padding.padding_16,
    paddingTop: Padding.padding_8,
    paddingBottom: Padding.padding_16,
    gap: 8,
    alignSelf: "stretch",
  },
  youNeedTo: {
    color: "#656565",
  },
  emailText: {
    color: "#343434",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  close: {
    color: Color.textWhite,
  },
  rateUsTitle: {
    color: "#343434",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.fs_24,
    textAlign: "center",
    alignSelf: "stretch",
  },
  ratingDividerIcon: {
    width: 207,
    height: 48,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default PopupNeedHelp;


