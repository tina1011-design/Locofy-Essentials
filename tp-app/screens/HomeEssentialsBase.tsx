import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Scroll from "../components/Scroll1";
import { Color } from "../GlobalStyles";

const HomeEssentialsBase = () => {
  return (
    <ScrollView
      style={styles.homeEssentialsBase}
      contentContainerStyle={styles.homeEssentialsBaseScrollViewContent}
    >
      <Header />
      <Scroll />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeEssentialsBaseScrollViewContent: {
    flexDirection: "column",
    paddingTop: 36,
    paddingBottom: 432,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 40,
    height: 852,
  },
  homeEssentialsBase: {
    width: "100%",
    backgroundColor: Color.layoutPageBackground,
    flex: 1,
    maxWidth: "100%",
  },
});

export default HomeEssentialsBase;
