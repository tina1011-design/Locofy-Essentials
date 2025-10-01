import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Color,
  Width,
  Border,
  Padding,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type TagGenreType = {
  simulation?: string;

  /** Variant props */
  property1?: "Simulation" | "Action";
};

const getTagGenreContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Action":
      return {
        backgroundColor: Color.tagAction,
      };
  }
};
const getSimulationTextStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Action":
      return {
        width: Width.width_32,
      };
  }
};
const TagGenre = ({ property1 = "Simulation", simulation }: TagGenreType) => {
  const variantKey = `${property1}`;

  return (
    <View style={[styles.root, getTagGenreContainerStyle(variantKey)]}>
      <Text style={[styles.simulation, getSimulationTextStyle(variantKey)]}>
        {simulation}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: Width.width_72,
    borderRadius: Border.br_6,
    backgroundColor: Color.tagSimulation,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_8,
    paddingVertical: Padding.padding_2,
  },
  simulation: {
    height: Height.height_14,
    width: 52,
    fontSize: FontSize.fs_9,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textWhite,
    textAlign: "left",
  },
});

export default TagGenre;
