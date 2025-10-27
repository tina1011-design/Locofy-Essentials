import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import {
  Border,
  BoxShadow,
  Color,
  Padding,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

interface BtnLetsgoProps {
  onPress?: () => void;
}

const BtnLetsgo: React.FC<BtnLetsgoProps> = ({ onPress }) => {
  return (
    <View style={[styles.btnLetsgo, styles.letsGoFlexBox]}>
      <Pressable style={[styles.content, styles.contentBorder]} onPress={onPress}>
        <View style={styles.cardInfo}>
          <Text style={[styles.letsGo, styles.letsGoFlexBox]}>LET'S GO!</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  letsGoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentBorder: {
    overflow: "hidden",
    borderStyle: "solid",
    borderRadius: Border.br_12,
  },
  btnLetsgo: {
    width: 282,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: "#1FB5FF",
    borderColor: Color.questCardOutline,
    borderWidth: 1,
    paddingBottom: Padding.padding_4,
    minWidth: 200,
    overflow: "hidden",
    borderStyle: "solid",
    borderRadius: Border.br_12,
  },
  content: {
    borderColor: "#73E0F7",
    borderWidth: 2,
    alignSelf: "stretch",
  },
  cardInfo: {
    width: 280,
    height: Height.height_48,
    backgroundColor: Color.textWhite,
    paddingHorizontal: Padding.padding_12,
    paddingVertical: Padding.padding_8,
    alignItems: "center",
    justifyContent: "center",
  },
  letsGo: {
    fontSize: FontSize.fs_24,
    fontFamily: FontFamily.luckiestGuyRegular,
    color: "#5F53DF",
    textAlign: "center",
  },
});

export default BtnLetsgo;

