import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import TitleWithIcon from "./TitleWithIcon";
import QuestCardM from "./QuestCardM";
import QuestCardLExtended from "./QuestCardLExtended";
import QuestCardLCashback from "./QuestCardLCashback";
import QuestCardLLocked from "./QuestCardLLocked";
import { Gap, FontFamily } from "../GlobalStyles";

type MilestonesType = {
  isFTUETesting?: boolean;
};

const Milestones = ({ isFTUETesting = false }: MilestonesType) => {
  return (
    <View style={styles.milestones}>
      <QuestCardLLocked property1="Default" valueIconSize1="M" valueIconShowIconCash1 />
      <QuestCardLCashback property1="Default" valueIconSize1="M" valueIconShowIconCash1 progressWidth={isFTUETesting ? 0 : undefined} />
      {/* Hide QuestCardLCashback in alert state in FTUE Testing mode */}
      {!isFTUETesting && (
        <QuestCardLCashback property1="alert" valueIconSize1="M" valueIconShowIconCash1 />
      )}
      <Text style={styles.conversionText}>
        Every 1 USD Rewarded will be converted to 1000 TC
      </Text>
      <View style={styles.titleContainer}>
        <TitleWithIcon 
          text="QUESTS"
          iconSource={require("../assets/icon-quest.png")}
          textWidth={58}
        />
      </View>
      <View style={styles.questCardsContainer}>
        {isFTUETesting ? (
          <>
            {/* FTUE Testing mode: Show 6 blue QuestCardM with zero progress */}
            <QuestCardM property1="blue" showProgressBar showIconCash progressWidth={0} coinValue="100" questTitle="Install Game" />
            <QuestCardM property1="blue" showProgressBar showIconCash progressWidth={0} coinValue="200" questTitle="Complete Level 20" />
            <QuestCardM property1="blue" showProgressBar showIconCash progressWidth={0} coinValue="300" questTitle="Complete Level 30" />
            <QuestCardM property1="blue" showProgressBar showIconCash progressWidth={0} coinValue="400" questTitle="Complete Level 40" />
            <QuestCardM property1="blue" showProgressBar showIconCash progressWidth={0} coinValue="500" questTitle="Complete Level 50" />
            <QuestCardM property1="blue" showProgressBar showIconCash progressWidth={0} coinValue="600" questTitle="Complete Level 60" />
          </>
        ) : (
          <>
            {/* Normal mode: Show all quest cards */}
            <QuestCardLExtended property1="Default" valueIconSize1="M" valueIconShowIconCash1 />
            <QuestCardLExtended property1="alert" valueIconSize1="M" valueIconShowIconCash1 />
            <QuestCardM property1="blue" showProgressBar showIconCash progressWidth={25} />
            <QuestCardM property1="alert" showProgressBar showIconCash progressWidth={75} />
            <QuestCardM property1="blue" showProgressBar showIconCash progressWidth={50} />
            <QuestCardM property1="completed" showProgressBar showIconCash progressWidth={100} />
            <QuestCardM property1="expired" showProgressBar showIconCash progressWidth={0} />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  milestones: {
    alignSelf: "stretch",
    alignItems: "center",
    gap: Gap.gap_5,
  },
  conversionText: {
    fontSize: 12,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: "#434EBF",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  titleContainer: {
    width: 361,
    alignSelf: "center",
  },
  questCardsContainer: {
    width: 361,
    gap: 12,
    alignItems: "center",
  },
});

export default Milestones;
