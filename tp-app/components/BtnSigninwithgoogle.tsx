import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Border,
  BoxShadow,
  Color,
  Padding,
  Gap,
  Width,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

interface BtnSigninwithgoogleProps {
  onPress?: () => void;
}

const BtnSigninwithgoogle: React.FC<BtnSigninwithgoogleProps> = ({ onPress }) => {
  return (
    <View style={[styles.btnSigninwithgoogle, styles.contentBorder]}>
      <Pressable style={[styles.content, styles.contentBorder]} onPress={onPress}>
        <LinearGradient
          style={styles.cardInfo}
          locations={[0, 1]}
          colors={["#f99c47", "#f46e4a"]}
        >
          <MaterialCommunityIcons name="google" size={24} color="#ffffff" />
          <Text style={styles.signInWith}>Sign in with Google</Text>
        </LinearGradient>
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
  btnSigninwithgoogle: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: "#ABBFEB",
    borderColor: Color.questCardOutline,
    borderWidth: 1,
    paddingBottom: Padding.padding_4,
    minWidth: 280,
  },
  content: {
    width: 280,
    borderColor: Color.textWhite,
    borderWidth: 2,
  },
  cardInfo: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.padding_12,
    paddingVertical: Padding.padding_8,
    gap: Gap.gap_8,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  signInWith: {
    width: Width.width_158,
    fontSize: FontSize.fs_16,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    height: Height.height_24,
    justifyContent: "center",
  },
});

export default BtnSigninwithgoogle;

