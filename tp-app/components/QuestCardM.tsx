import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ValueIcon from "./ValueIcon";
import ProgressBar1 from "./ProgressBar1";
import {
  Border,
  Height,
  BoxShadow,
  Color,
  Padding,
  MinWidth,
  Gap,
  Width,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type QuestCardMType = {
  showProgressBar?: boolean;
  showIconCash?: boolean;
  progressWidth?: number;

  /** Variant props */
  property1?: "blue" | "alert" | "completed" | "expired";
};

const QuestCardM = ({
  property1 = "blue",
  showProgressBar = true,
  showIconCash,
  progressWidth = 30,
}: QuestCardMType) => {
  const isAlert = property1 === "alert";
  const isCompleted = property1 === "completed";
  const isExpired = property1 === "expired";
  
  const getBackgroundColor = () => {
    if (isAlert) return Color.questCardAlertDepth;
    if (isCompleted) return "#8C8CD9"; // Light purple for completed
    if (isExpired) return "#5453AB"; // Purple for expired
    return Color.questCardDefaultDepth;
  };
  
  const getBorderColor = () => {
    if (isCompleted) return "#A3B4DF";
    if (isExpired) return "#6775B0";
    return isAlert ? Color.questCardAlertBackgroundOutline : Color.questCardDefaultBackgroundOutline;
  };
  
  const getBoxBackgroundColor = () => {
    if (isAlert) return Color.questCardAlertBackground;
    if (isCompleted) return "#97A8DA";
    if (isExpired) return "#5D6DA8";
    return Color.questCardDefaultBackground;
  };
  
  const getValueBoxColor = () => {
    if (isAlert) return Color.questCardAlertValueBox;
    if (isCompleted) return "#97A8DA";
    if (isExpired) return "#5D6DA8";
    return Color.questCardDefaultValueBox;
  };
  
  const getTextColor = () => {
    if (isAlert) return Color.textQuestCardAlert;
    if (isCompleted) return "#716796";
    if (isExpired) return "#392F67";
    return Color.textQuestCardDefault;
  };
  
  const cardStyles = {
    backgroundColor: getBackgroundColor(),
    borderColor: Color.questCardOutline,
  };
  
  const contentStyles = {
    borderColor: getBorderColor(),
  };
  
  const boxStyles = {
    backgroundColor: getBoxBackgroundColor(),
  };
  
  const rewardInfoStyles = {
    backgroundColor: getValueBoxColor(),
  };
  
  const titleStyles = {
    color: getTextColor(),
  };

  return (
    <View style={[styles.questcardM, styles.contentBorder, cardStyles]}>
      <View style={[styles.content, styles.boxLayout, contentStyles]}>
        <View style={[styles.box, styles.boxFlexBox, boxStyles]}>
          <View style={[styles.rewardInfo, styles.infoFlexBox, rewardInfoStyles, (isExpired || isCompleted) && { opacity: 0.3 }]}>
            <ValueIcon
              property1="coin"
              size="M"
              value="2400"
              showIconCash={showIconCash}
            />
          </View>
          <View style={[styles.cardInfo, styles.infoFlexBox]}>
            <View style={styles.titleContainer}>
              {isAlert && (
                <MaterialCommunityIcons name="clock-time-five-outline" size={16} color="#C33232" />
              )}
              {isExpired && (
                <MaterialCommunityIcons name="cancel" size={16} color="#392F67" />
              )}
              <Text style={[styles.questTitle, titleStyles]}>Quest Title</Text>
              {isAlert && (
                <View style={styles.timeContainer}>
                  <MaterialCommunityIcons name="timer-sand-complete" size={16} color="#C33232" />
                  <Text style={styles.timeValue}>00:15</Text>
                </View>
              )}
              {isExpired && (
                <Text style={styles.expiredText}>Expired</Text>
              )}
              {isCompleted && (
                <Image
                  style={styles.completedIcon}
                  contentFit="cover"
                  source={require("../assets/img-success.png")}
                />
              )}
            </View>
            {!isCompleted && !isExpired && (
              <ProgressBar1 property1="blue" progressWidth={progressWidth} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBorder: {
    overflow: "hidden",
    borderStyle: "solid",
    borderRadius: Border.br_10,
  },
  boxLayout: {
    height: Height.height_60,
    alignSelf: "stretch",
  },
  boxFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  infoFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  questcardM: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: Color.questCardDefaultDepth,
    borderColor: Color.questCardOutline,
    borderWidth: 0.6,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
    alignSelf: "stretch",
  },
  content: {
    borderColor: Color.questCardDefaultBackgroundOutline,
    borderWidth: 2,
    overflow: "hidden",
    borderStyle: "solid",
    borderRadius: Border.br_10,
  },
  box: {
    backgroundColor: Color.questCardDefaultBackground,
    justifyContent: "space-between",
    gap: Gap.gap_0,
    height: Height.height_60,
    alignSelf: "stretch",
  },
  rewardInfo: {
    width: Width.width_72,
    backgroundColor: Color.questCardDefaultValueBox,
    paddingHorizontal: Padding.padding_4,
    paddingVertical: Padding.padding_6,
    alignItems: "center",
    flexDirection: "row",
  },
  cardInfo: {
    flex: 1,
    paddingHorizontal: Padding.padding_12,
    paddingVertical: Padding.padding_8,
    gap: Gap.gap_8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_4,
  },
  timeContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  expiredText: {
    fontSize: FontSize.fs_12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#392F67",
    textAlign: "right",
    marginLeft: "auto",
  },
  completedIcon: {
    width: 24,
    height: 24,
    marginLeft: "auto",
  },
  timeValue: {
    fontSize: FontSize.fs_12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#C33232",
    textAlign: "right",
  },
  questTitle: {
    fontSize: FontSize.fs_12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textQuestCardDefault,
    textAlign: "left",
    flex: 1,
  },
});

export default QuestCardM;
