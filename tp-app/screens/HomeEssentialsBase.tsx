import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Scroll from "../components/Scroll1";
import { Color } from "../GlobalStyles";

const HomeEssentialsBase = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.homeEssentialsBase}
        contentContainerStyle={styles.homeEssentialsBaseScrollViewContent}
      >
        <Scroll />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.layoutPageBackground,
  },
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
