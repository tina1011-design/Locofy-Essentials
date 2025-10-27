import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import {
  Border,
  Width,
  BoxShadow,
  Color,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

interface BtnIlldoitlaterProps {
  onPress?: () => void;
}

const BtnIlldoitlater: React.FC<BtnIlldoitlaterProps> = ({ onPress }) => {
  return (
    <View style={[styles.btnIlldoitlater, styles.contentBorder]}>
      <Pressable style={[styles.content, styles.contentBorder]} onPress={onPress}>
        <View style={styles.cardInfo}>
          <Text style={styles.illDoIt}>I'll do it later</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBorder: {
    overflow: "hidden",
    borderStyle: "solid",
    borderRadius: Border.br_16,
  },
  btnIlldoitlater: {
    width: Width.width_202,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: "#485969",
    borderColor: Color.questCardOutline,
    borderWidth: 1,
    justifyContent: "center",
    paddingBottom: Padding.padding_4,
    minWidth: 200,
    alignItems: "center",
  },
  content: {
    borderColor: "#8192A2",
    borderWidth: 2,
    alignSelf: "stretch",
  },
  cardInfo: {
    backgroundColor: "#748595",
    paddingHorizontal: Padding.padding_12,
    paddingVertical: Padding.padding_8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  illDoIt: {
    fontSize: FontSize.fs_16,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#F2F9FE",
    textAlign: "center",
    alignSelf: "stretch",
  },
});

export default BtnIlldoitlater;

