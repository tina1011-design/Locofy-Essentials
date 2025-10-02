import * as React from "react";
import { StyleSheet, View } from "react-native";
import Title from "./Title";
import GameCardLInstall from "./GameCardLInstall";
import GameCardLPlay from "./GameCardLPlay";
import ButtonInstall from "./ButtonInstall";
import ButtonPlay from "./ButtonPlay";
import { Width } from "../GlobalStyles";

const Scroll = () => {
  return (
    <View style={styles.scroll}>
      <View style={styles.topPicks}>
        <View style={styles.buttonsContainer}>
          <ButtonInstall />
          <ButtonPlay />
        </View>
        <Title text="Top Picks for you" />
        <View style={styles.gameCardsContainer}>
          <GameCardLPlay
            property1="Play"
            valueIconSize1="M"
            valueIconShowIconCash1
          />
          <GameCardLInstall
            property1="Install"
            valueIconSize1="M"
            valueIconShowIconCash1
          />
          <GameCardLInstall
            property1="Install"
            valueIconSize1="M"
            valueIconShowIconCash1
          />
          <GameCardLInstall
            property1="Install"
            valueIconSize1="M"
            valueIconShowIconCash1
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: Width.width_393,
    zIndex: 1,
  },
  topPicks: {
    alignSelf: "stretch",
    alignItems: "center",
    paddingTop: 120,
  },
  gameCardsContainer: {
    gap: 16,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
});

export default Scroll;
