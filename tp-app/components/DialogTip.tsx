import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import BtnContactSupport from "./BtnContactSupport";
import {
  FontFamily,
  Color,
  FontSize,
  Padding,
  Gap,
  Height,
  Width,
} from "../GlobalStyles";

const DialogTip = () => {
  return (
    <View style={[styles.dialogTip, styles.dialogFlexBox]}>
      <View style={styles.dialogTxt}>
        <View style={styles.diologTipTxt}>
          <Text style={styles.importantTipFor}>
            Important Tip for Completing Quests
          </Text>
          <Text
            style={[styles.downloadYourGames, styles.downloadYourGamesTypo]}
          >
            Download your games via Treasure Play to make sure quests count!
          </Text>
        </View>
        <View style={styles.dialogAdprovider}>
          <View style={[styles.dialogAdproviderTxt, styles.dialogFlexBox]}>
            <Image
              style={styles.image36Icon}
              contentFit="cover"
              source={require("../assets/image-36.png")}
            />
            <Text
              style={[styles.questsAreProvided, styles.downloadYourGamesTypo]}
            >
              Quests are provided by ayeT-Studios and may take longer to
              validate.
            </Text>
          </View>
          <BtnContactSupport />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dialogFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  downloadYourGamesTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.textWhite,
    fontSize: FontSize.fs_12,
  },
  dialogTip: {
    backgroundColor: Color.colorSlateblue,
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_12,
  },
  dialogTxt: {
    gap: Gap.gap_8,
    flex: 1,
  },
  diologTipTxt: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
  },
  importantTipFor: {
    width: 227,
    height: Height.height_18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.textWhite,
    fontSize: FontSize.fs_12,
  },
  downloadYourGames: {
    alignSelf: "stretch",
  },
  dialogAdprovider: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: Gap.gap_8,
    alignSelf: "stretch",
  },
  dialogAdproviderTxt: {
    gap: Gap.gap_8,
  },
  image36Icon: {
    width: Width.width_28,
    height: Height.height_28,
  },
  questsAreProvided: {
    flex: 1,
  },
});

export default DialogTip;
