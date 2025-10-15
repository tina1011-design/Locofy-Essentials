import * as React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import ValueIcon from "./ValueIcon";
import GameDataValueIcon from "./GameDataValueIcon";
import {
  Padding,
  BoxShadow,
  Color,
  Border,
  Width,
  Gap,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type RewardCardXSType = {
  valueIconValueIconFlex1?: number;
  valueIconValue1?: string;
  valueIconValueIconMarginTop?: string;
  valueIconValueIconFlex?: number;
  state?: "default" | "completed" | "ready-to-claim";
  medalValue?: string;
};

const RewardCardXS = ({
  valueIconValueIconFlex1,
  valueIconValue1,
  valueIconValueIconMarginTop,
  valueIconValueIconFlex,
  state = "default",
  medalValue = "3",
}: RewardCardXSType) => {
  return (
    <View style={styles.container}>
      <View style={styles.gameDataIcon}>
        <GameDataValueIcon 
          property1="medal"
          size="M"
          value={medalValue}
          showIconCash={true}
        />
      </View>
      <View style={state === "completed" ? styles.rewardcardXsCompleted : state === "ready-to-claim" ? styles.rewardcardXsReady : styles.rewardcardXs}>
      <View style={state === "completed" ? styles.contentCompleted : state === "ready-to-claim" ? styles.contentReady : styles.content}>
        <ImageBackground
          style={styles.appicon}
          resizeMode="cover"
          source={require("../assets/appicon.png")}
        >
        </ImageBackground>
        <View style={[state === "ready-to-claim" ? styles.cardInfoReady : styles.cardInfo, styles.cardInfoFlexBox]}>
          <ValueIcon property1="coin" />
        </View>
      </View>
      {state === "completed" && (
        <View style={styles.overlay}>
          <Image
            style={styles.successIcon}
            resizeMode="cover"
            source={require("../assets/img-success.png")}
          />
        </View>
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 8,
  },
  gameDataIcon: {
    marginBottom: -10,
    zIndex: 2,
  },
  cardInfoFlexBox: {
    paddingVertical: Padding.padding_2,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rewardcardXs: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.gameCardOutline,
    paddingBottom: Padding.padding_8,
    minWidth: 80,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  rewardcardXsCompleted: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.gameCardOutline,
    paddingBottom: Padding.padding_8,
    minWidth: 80,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  rewardcardXsReady: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: "#23BF17",
    borderColor: "#1018B3",
    paddingBottom: Padding.padding_8,
    minWidth: 80,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  content: {
    borderColor: "#ECF2FE",
    width: 80,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  contentCompleted: {
    borderColor: "#ECF2FE",
    width: 80,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  contentReady: {
    borderColor: "#56EA25",
    width: 80,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8,
  },
  appicon: {
    width: 80,
    height: 80,
    gap: 30,
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  cardInfo: {
    backgroundColor: "#ffffff",
    alignSelf: "stretch",
  },
  cardInfoReady: {
    backgroundColor: "#88FF2A",
    alignSelf: "stretch",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(34, 32, 104, 0.4)",
    borderRadius: Border.br_8,
    justifyContent: "center",
    alignItems: "center",
  },
  successIcon: {
    width: 24,
    height: 24,
    marginTop: -20,
  },
});

export default RewardCardXS;
