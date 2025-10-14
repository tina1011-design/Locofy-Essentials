import * as React from "react";
import { StyleSheet, View } from "react-native";
import TitleWithIcon from "./TitleWithIcon";
import QuestCardM from "./QuestCardM";
import QuestCardLExtended from "./QuestCardLExtended";
import { Gap } from "../GlobalStyles";

const Milestones = () => {
  return (
    <View style={styles.milestones}>
      <TitleWithIcon 
        text="QUESTS"
        iconSource={require("../assets/icon-quest.png")}
        textWidth={58}
      />
      <View style={styles.questCardsContainer}>
        <QuestCardLExtended property1="Default" valueIconSize1="M" valueIconShowIconCash1 />
        <QuestCardLExtended property1="alert" valueIconSize1="M" valueIconShowIconCash1 />
        <QuestCardM property1="blue" showProgressBar showIconCash progressWidth={25} />
        <QuestCardM property1="alert" showProgressBar showIconCash progressWidth={75} />
        <QuestCardM property1="blue" showProgressBar showIconCash progressWidth={50} />
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
  questCardsContainer: {
    width: 361,
    gap: 12,
    alignItems: "center",
  },
});

export default Milestones;
