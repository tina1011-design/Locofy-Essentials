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

export type QuestCardMInviteType = {
  showProgressBar?: boolean;
  showIconCash?: boolean;
  progressWidth?: number;

  /** Variant props */
  property1?: "blue" | "alert";
};

const QuestCardMInvite = ({
  property1 = "blue",
  showProgressBar = true,
  showIconCash,
  progressWidth = 30,
}: QuestCardMInviteType) => {
  const isAlert = property1 === "alert";
  
  const cardStyles = {
    backgroundColor: isAlert ? Color.questCardAlertDepth : Color.questCardDefaultDepth,
    borderColor: Color.questCardOutline,
  };
  
  const contentStyles = {
    borderColor: isAlert ? Color.questCardAlertBackgroundOutline : Color.questCardDefaultBackgroundOutline,
  };
  
  const boxStyles = {
    backgroundColor: isAlert ? Color.questCardAlertBackground : Color.questCardDefaultBackground,
  };
  
  const rewardInfoStyles = {
    backgroundColor: isAlert ? Color.questCardAlertValueBox : Color.questCardDefaultValueBox,
  };
  
  const titleStyles = {
    color: isAlert ? Color.textQuestCardAlert : Color.textQuestCardDefault,
  };

  return (
    <View style={[styles.questcardMInvite, styles.contentBorder, cardStyles]}>
      <View style={[styles.content, styles.boxLayout, contentStyles]}>
        <View style={[styles.box, styles.boxFlexBox, boxStyles]}>
          <View style={[styles.rewardInfo, styles.infoFlexBox, rewardInfoStyles]}>
            <ValueIcon
              property1="coin"
              size="M"
              value="2400"
              showIconCash={showIconCash}
              iconCoin={require("../assets/icon-coin1.png")}
            />
          </View>
          <View style={[styles.cardInfo, styles.infoFlexBox]}>
            <View style={styles.titleContainer}>
              {isAlert && (
                <MaterialCommunityIcons name="clock-time-five-outline" size={16} color="#C33232" />
              )}
              <Text style={[styles.questTitle, titleStyles]}>Invite Your 1st Friend</Text>
              <Image
                style={styles.inviteIcon}
                contentFit="cover"
                source={require("../assets/img-acceptedinvites.png")}
              />
              <Text style={styles.progressValue}>0/1</Text>
              {isAlert && (
                <View style={styles.timeContainer}>
                  <MaterialCommunityIcons name="timer-sand-complete" size={16} color="#C33232" />
                  <Text style={styles.timeValue}>00:15</Text>
                </View>
              )}
            </View>
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
  questcardMInvite: {
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
  inviteIcon: {
    width: 20,
    height: 20,
    marginLeft: 4,
  },
  progressValue: {
    fontSize: FontSize.fs_12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textQuestCardDefault,
    marginLeft: 4,
  },
});

export default QuestCardMInvite;
