import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  Width,
  Padding,
  Height,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

const TitleQuest = () => {
  return (
    <View style={[styles.titleQuests, styles.titleQuestsFlexBox]}>
      <View style={styles.titleQuestsFlexBox}>
        <Image
          style={styles.iconQuest}
          contentFit="cover"
          source={require("../assets/icon-quest.png")}
        />
        <Text style={styles.quests}>QUESTS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleQuestsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  titleQuests: {
    width: Width.width_393,
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_4,
  },
  iconQuest: {
    width: Width.width_20,
    height: Height.height_20,
  },
  quests: {
    height: Height.height_16,
    width: 58,
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.luckiestGuyRegular,
    color: Color.textWhite,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    marginLeft: -4,
  },
});

export default TitleQuest;
