import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
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

  /** Variant props */
  property1?: string;
};

const QuestCardM = ({
  property1 = "blue",
  showProgressBar = true,
  showIconCash,
}: QuestCardMType) => {
  return (
    <View style={[styles.questcardM, styles.contentBorder]}>
      <View style={[styles.content, styles.boxLayout]}>
        <View style={[styles.box, styles.boxFlexBox]}>
          <View style={[styles.rewardInfo, styles.infoFlexBox]}>
            <ValueIcon
              property1="coin"
              size="M"
              value="2400"
              showIconCash={showIconCash}
              iconCoin={require("../assets/icon-coin1.png")}
            />
          </View>
          <View style={[styles.cardInfo, styles.infoFlexBox]}>
            <Text style={styles.questTitle}>Quest Title</Text>
            <ProgressBar1 property1="blue" />
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
  questTitle: {
    fontSize: FontSize.fs_12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textQuestCardDefault,
    textAlign: "left",
    alignSelf: "stretch",
  },
});

export default QuestCardM;
