import * as React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import BtnHavingfun from "../components/BtnHavingfun";
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

interface PopupCheckoutSuccessProps {
  onClose?: () => void;
  onNavigateToTransactionHistory?: () => void;
}

const PopupCheckoutSuccess: React.FC<PopupCheckoutSuccessProps> = ({ onClose, onNavigateToTransactionHistory }) => {
  const handleViewTransactionHistory = () => {
    if (onClose) {
      onClose();
    }
    if (onNavigateToTransactionHistory) {
      onNavigateToTransactionHistory();
    }
  };
  return (
    <ScrollView
      style={styles.popupCheckoutSuccess}
      contentContainerStyle={styles.popupCheckoutSuccessScrollViewContent}
    >
      <View style={[styles.gamecardL, styles.contentBorder]}>
        <View style={[styles.content, styles.contentBorder]}>
          <Image
            style={styles.bannerCheckoutSuccessIcon}
            contentFit="cover"
            source={require("../assets/banner-checkoutsuccess.png")}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.popupCheckoutSuccessTitle}>SUCCESS</Text>
            <Text style={[styles.youNeedTo, styles.closeTypo]}>
              An email will be sent out to xxx@gmail.com. The process may take a few minutes.
            </Text>
            <BtnHavingfun onPress={onClose} buttonText="Done" />
            <TouchableOpacity onPress={handleViewTransactionHistory} activeOpacity={0.8}>
              <Text style={styles.viewTransactionHistory}>VIEW TRANSACTION HISTORY &gt;&gt;</Text>
            </TouchableOpacity>
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
  popupCheckoutSuccessScrollViewContent: {
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
  popupCheckoutSuccess: {
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
  bannerCheckoutSuccessIcon: {
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
    gap: Gap.gap_16,
    alignSelf: "stretch",
  },
  youNeedTo: {
    color: "#656565",
  },
  close: {
    color: Color.textWhite,
  },
  popupCheckoutSuccessTitle: {
    color: "#343434",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.fs_24,
    textAlign: "center",
    alignSelf: "stretch",
  },
  viewTransactionHistory: {
    color: "#FF7B00",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.fs_16,
    textAlign: "center",
    alignSelf: "stretch",
  },
});

export default PopupCheckoutSuccess;

