import * as React from "react";
import { StyleSheet, View } from "react-native";
import TitleQuest from "./TitleQuest";
import QuestCardM from "./QuestCardM";
import { Gap } from "../GlobalStyles";

const Milestones = () => {
  return (
    <View style={styles.milestones}>
      <TitleQuest />
      <View style={styles.mquest}>
        <QuestCardM property1="blue" showProgressBar showIconCash />
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
  mquest: {
    width: 361,
  },
});

export default Milestones;
