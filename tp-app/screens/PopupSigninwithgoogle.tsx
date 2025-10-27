import * as React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import BtnSigninwithgoogle from "../components/BtnSigninwithgoogle";
import BtnIlldoitlater from "../components/BtnIlldoitlater";
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

interface PopupSigninwithgoogleProps {
  onClose?: () => void;
}

const PopupSigninwithgoogle: React.FC<PopupSigninwithgoogleProps> = ({ onClose }) => {
  return (
    <ScrollView
      style={styles.popupSigninwithgoogle}
      contentContainerStyle={styles.popupSigninwithgoogleScrollViewContent}
    >
      <View style={[styles.gamecardL, styles.contentBorder]}>
        <View style={[styles.content, styles.contentBorder]}>
          <Image
            style={styles.bannerSigninwithgoogleIcon}
            contentFit="cover"
            source={require("../assets/Banner-signinwithgoogle.png")}
          />
          <View style={styles.cardInfo}>
            <Text style={[styles.youNeedTo, styles.closeTypo]}>
              You need to sync your account to be able to redeem a Gift Card to
              you email
            </Text>
            <BtnSigninwithgoogle />
            <BtnIlldoitlater onPress={onClose} />
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
  popupSigninwithgoogleScrollViewContent: {
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
  popupSigninwithgoogle: {
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
  bannerSigninwithgoogleIcon: {
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
    paddingTop: Padding.padding_8,
    paddingBottom: Padding.padding_16,
    gap: Gap.gap_16,
    alignSelf: "stretch",
  },
  youNeedTo: {
    color: "#656565",
  },
  close: {
    color: Color.textWhite,
  },
});

export default PopupSigninwithgoogle;

