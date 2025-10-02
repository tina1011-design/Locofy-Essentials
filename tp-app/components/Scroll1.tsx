import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Title from "./Title";
import GameCardLInstall from "./GameCardLInstall";
import GameCardLPlay from "./GameCardLPlay";
import GameCardS from "./GameCardS";
import GameCardXS from "./GameCardXS";
import EventCardMPlayEarn from "./EventCardMPlayEarn";
import { Width } from "../GlobalStyles";

const Scroll = () => {
  return (
    <View style={styles.scroll}>
      <View style={styles.topPicks}>
        <Title text="Your Games" />
        <View style={styles.gameCardXSContainer}>
          <GameCardXS />
          <GameCardXS />
          <GameCardXS />
        </View>
        <Title text="Top Picks for you" />
        <View style={styles.gameCardsContainer}>
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
        <Title text="Play and Earn" />
        <EventCardMPlayEarn />
        <Title text="4x Puzzle" />
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContainer}
          style={styles.horizontalScrollView}
        >
          <GameCardS
            valueIconProperty1="cash"
            valueIconValue1="2400"
            valueIconSize1="M"
            valueIconShowIconCash
          />
          <GameCardS
            valueIconProperty1="cash"
            valueIconValue1="1800"
            valueIconSize1="M"
            valueIconShowIconCash
          />
          <GameCardS
            valueIconProperty1="cash"
            valueIconValue1="3200"
            valueIconSize1="M"
            valueIconShowIconCash
          />
          <GameCardS
            valueIconProperty1="cash"
            valueIconValue1="1500"
            valueIconSize1="M"
            valueIconShowIconCash
          />
          <GameCardS
            valueIconProperty1="cash"
            valueIconValue1="2800"
            valueIconSize1="M"
            valueIconShowIconCash
          />
        </ScrollView>
        <Title text="Featured Quest" />
        <GameCardLPlay
          property1="Play"
          valueIconSize1="M"
          valueIconShowIconCash1
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
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
  horizontalScrollView: {
    width: "100%",
  },
  horizontalScrollContainer: {
    gap: 12,
    paddingLeft: 16,
    paddingRight: 0,
    alignItems: "center",
  },
  gameCardXSContainer: {
    flexDirection: "row",
    gap: 12,
    paddingLeft: 16,
    alignItems: "center",
    alignSelf: "flex-start",
  },
});

export default Scroll;
