import * as React from "react";
import { StyleSheet, View } from "react-native";
import TitleQuest from "./TitleQuest";
import QuestCardM from "./QuestCardM";
import { Gap } from "../GlobalStyles";

const Milestones = () => {
  return (
    <View style={styles.milestones}>
      <TitleQuest />
      <View style={styles.questCardsContainer}>
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
