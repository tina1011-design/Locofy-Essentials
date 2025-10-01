import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color, Height } from "../GlobalStyles";

export type ProgressBar1Type = {
  /** Variant props */
  property1?: string;
  /** Progress width percentage (0-100) */
  progressWidth?: number;
};

const ProgressBar1 = ({ property1 = "blue", progressWidth = 30 }: ProgressBar1Type) => {
  const progressStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    backgroundColor: Color.progressBarProgressOngoing,
    width: `${progressWidth}%`,
    height: Height.height_8,
  };

  return (
    <View style={styles.progressBar}>
      <View style={progressStyle} />
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
});

export default ProgressBar1;
