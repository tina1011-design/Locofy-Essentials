import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color, Height } from "../GlobalStyles";

export type ProgressBar1Type = {
  /** Variant props */
  property1?: string;
};

const ProgressBar1 = ({ property1 = "blue" }: ProgressBar1Type) => {
  return (
    <View style={styles.progressBar}>
      <View style={styles.progressBar2} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    alignSelf: "stretch",
    borderRadius: Border.br_4,
    backgroundColor: Color.progressBarBackground,
    borderStyle: "solid",
    borderColor: Color.progressBarOutline,
    borderWidth: 1,
    overflow: "hidden",
    height: Height.height_8,
  },
  progressBar2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.progressBarProgressOngoing,
    width: 56,
    height: Height.height_8,
  },
});

export default ProgressBar1;
