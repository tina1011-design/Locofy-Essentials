import * as React from "react";
import { StyleSheet, View } from "react-native";
import Title from "./Title";
import GameCardL from "./GameCardL";
import { Width } from "../GlobalStyles";

const Scroll = () => {
  return (
    <View style={styles.scroll}>
      <View style={styles.topPicks}>
        <Title text="Top Picks for you" />
        <View>
          <GameCardL
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
  },
});

export default Scroll;
