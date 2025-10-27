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

interface BtnHavingfunProps {
  onPress?: () => void;
  buttonText?: string;
}

const BtnHavingfun: React.FC<BtnHavingfunProps> = ({ onPress, buttonText = "Having Fun!" }) => {
  return (
    <View style={[styles.btnHavingfun, styles.contentBorder]}>
      <Pressable style={[styles.content, styles.contentBorder]} onPress={onPress}>
        <View style={styles.cardInfo}>
          <Text style={styles.havingFun}>{buttonText}</Text>
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
  btnHavingfun: {
    width: 160,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: "#6042B8",
    borderColor: Color.questCardOutline,
    borderWidth: 1,
    justifyContent: "center",
    paddingBottom: Padding.padding_4,
    minWidth: 160,
    alignItems: "center",
  },
  content: {
    borderColor: "#9877F7",
    borderWidth: 2,
    alignSelf: "stretch",
  },
  cardInfo: {
    backgroundColor: "#8C67F7",
    paddingHorizontal: Padding.padding_12,
    paddingVertical: Padding.padding_8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  havingFun: {
    fontSize: FontSize.fs_16,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#FFFFFF",
    textAlign: "center",
    alignSelf: "stretch",
  },
});

export default BtnHavingfun;


