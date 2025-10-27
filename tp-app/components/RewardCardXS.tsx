import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
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
  rewardValue?: string;
};

const RewardCardXS = ({
  valueIconValueIconFlex1,
  valueIconValue1,
  valueIconValueIconMarginTop,
  valueIconValueIconFlex,
  state = "default",
  medalValue = "3",
  rewardValue = "2400",
}: RewardCardXSType) => {
  return (
    <View style={styles.container}>
      {state !== "ready-to-claim" && (
        <View style={styles.gameDataIcon}>
          <GameDataValueIcon 
            property1="medal"
            size="M"
            value={medalValue}
            showIconCash={true}
          />
        </View>
      )}
      {state === "ready-to-claim" && (
        <View style={styles.claimButtonContainer}>
          <View style={styles.claimButton}>
            <Text style={styles.claimButtonText}>Claim</Text>
          </View>
        </View>
      )}
      <View style={state === "completed" ? styles.rewardcardXsCompleted : state === "ready-to-claim" ? styles.rewardcardXsReady : styles.rewardcardXs}>
      <View style={state === "completed" ? styles.contentCompleted : state === "ready-to-claim" ? styles.contentReady : styles.content}>
        <View style={[state === "ready-to-claim" ? styles.cardInfoReady : styles.cardInfo, styles.cardInfoFlexBox]}>
          <View style={styles.valueIconContainer}>
            <Image
              style={styles.coinIcon}
              contentFit="cover"
              source={require("../assets/coin_thin.png")}
            />
            <View style={styles.coinValueContainer}>
              <ValueIcon property1="coin" size="M" showIconCash={false} value={rewardValue} />
            </View>
          </View>
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
    paddingBottom: 4,
    minWidth: 80,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 16,
  },
  rewardcardXsCompleted: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.gameCardOutline,
    paddingBottom: 4,
    minWidth: 80,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 16,
  },
  rewardcardXsReady: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: "#0AA90F",
    borderColor: "#1018B3",
    paddingBottom: 4,
    minWidth: 80,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 16,
  },
  content: {
    borderColor: "#ECF2FE",
    width: 80,
    height: 80,
    overflow: "hidden",
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 16,
    flexDirection: "column",
  },
  contentCompleted: {
    borderColor: "#ECF2FE",
    width: 80,
    height: 80,
    overflow: "hidden",
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 16,
    flexDirection: "column",
  },
  contentReady: {
    borderColor: "#27C61D",
    width: 80,
    height: 80,
    overflow: "hidden",
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 16,
    flexDirection: "column",
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
    flex: 1,
  },
  cardInfoReady: {
    backgroundColor: "#3DDC28",
    alignSelf: "stretch",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(34, 32, 104, 0.4)",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  successIcon: {
    width: 36,
    height: 36,
  },
  valueIconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: -4,
    width: "100%",
  },
  coinIcon: {
    width: 40,
    height: 40,
  },
  coinValueContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  claimButtonContainer: {
    marginBottom: -10,
    zIndex: 2,
    alignItems: "center",
  },
  claimButton: {
    backgroundColor: "#88FF29",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1810B3",
    borderStyle: "solid",
    width: 64,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  claimButtonText: {
    color: "#006A41",
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "bold",
  },
});

export default RewardCardXS;
