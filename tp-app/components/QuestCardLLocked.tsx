import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ValueIcon from "./ValueIcon";
import PopupAllowTracking from "../screens/PopupAllowTracking";
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

export type QuestCardLLockedType = {
  valueIconSize1?: string;
  valueIconShowIconCash1?: boolean;

  /** Variant props */
  property1?: "Default" | "alert";
};

const QuestCardLLocked = ({
  property1 = "Default",
  valueIconSize1,
  valueIconShowIconCash1,
}: QuestCardLLockedType) => {
  const isAlert = property1 === "alert";
  const [showAllowTrackingPopup, setShowAllowTrackingPopup] = React.useState(false);

  const handleUnlockPress = () => {
    setShowAllowTrackingPopup(true);
  };

  const handleClosePopup = () => {
    setShowAllowTrackingPopup(false);
  };
  
  return (
    <View style={[isAlert ? styles.questcardLLockedAlert : styles.questcardLLocked, styles.contentBorder]}>
      <View style={[isAlert ? styles.contentAlert : styles.content, styles.contentBorder]}>
        <View
          style={[styles.contentQuestsdetails, styles.upnextContentFlexBox]}
        >
          <View style={[styles.thumbnailBox, styles.upnextContentFlexBox]}>
            <ImageBackground
              style={[styles.contentIcon, styles.contentIconSpaceBlock]}
              resizeMode="cover"
              source={isAlert ? require("../assets/Content-cashback-alert.png") : require("../assets/Content1-locked.png")}
            >
              <View style={styles.cashbackIconContainer}>
                <Image
                  style={styles.imgCountdownIcon}
                  contentFit="cover"
                  source={require("../assets/img-lock.png")}
                />
              </View>
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
              </View>
            </View>
            <TouchableOpacity onPress={handleUnlockPress}>
              <Image
                style={styles.btnUnlockIcon}
                contentFit="cover"
                source={require("../assets/btn-unlock.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal
        visible={showAllowTrackingPopup}
        transparent={false}
        animationType="fade"
        onRequestClose={handleClosePopup}
      >
        <PopupAllowTracking onClose={handleClosePopup} />
      </Modal>
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
  questcardLLocked: {
    width: 361,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: "#A298AE",
    borderColor: Color.questCardOutline,
    borderWidth: 0.6,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
  },
  questcardLLockedAlert: {
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
    borderColor: "#DCD2DC",
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
  cashbackIconContainer: {
    position: "relative",
    width: 65,
    height: 67.6,
    justifyContent: "center",
    alignItems: "center",
  },
  imgCountdownIcon: {
    width: 65,
    height: 67.6,
    position: "absolute",
  },
  valueIconOverlay: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  cardInfo: {
    gap: 4,
  },
  titleWcountdown: {
    justifyContent: "center",
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
    color: "#13C70E",
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
  btnUnlockIcon: {
    width: 95,
    height: 30,
    alignSelf: "flex-start",
  },
});

export default QuestCardLLocked;


