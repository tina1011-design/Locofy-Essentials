import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ValueIcon from "./ValueIcon";
import {
  Padding,
  Color,
  BoxShadow,
  Border,
  MinWidth,
  Gap,
  FontSize,
  FontFamily,
  Width,
  Height,
} from "../GlobalStyles";

export type RewardCardLType = {
  valueIconSize1?: "M" | "L";
  valueIconShowIconCash1?: boolean;

  /** Variant props */
  property1?: string;
};

const RewardCardL = ({
  property1 = "Install",
  valueIconSize1 = "M",
  valueIconShowIconCash1,
}: RewardCardLType) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("BarEarupto" as never);
  };

  return (
    <TouchableOpacity style={styles.rewardcardL} onPress={handlePress}>
      <ImageBackground
        style={styles.contentIcon}
        resizeMode="cover"
        source={require("../assets/Content.png")}
      >
        <Image
          style={styles.gameBannerLIcon}
          contentFit="cover"
          source={require("../assets/GP03Big.jpg")}
        />
        <View style={styles.priceTag}>
          <Text style={styles.priceText}>$100</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  detailsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  valueSpaceBlock: {
    padding: Padding.padding_4,
    backgroundColor: Color.gameCardInfoBox,
  },
  rewardcardL: {
    width: 362,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    borderRadius: Border.br_11,
    backgroundColor: Color.gameCardDepth,
    borderStyle: "solid",
    borderColor: Color.questCardOutline,
    borderWidth: 1,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
    overflow: "hidden",
  },
  contentIcon: {
    borderRadius: Border.br_12,
    height: 213,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  gameBannerLIcon: {
    maxWidth: "100%",
    height: 213,
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#CFD6FF",
    borderStyle: "solid",
    borderRadius: 12,
  },
  cardInfo: {
    backgroundColor: Color.gameCardBackground,
    height: 56,
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_12,
    paddingVertical: Padding.padding_8,
    gap: Gap.gap_0,
    alignSelf: "stretch",
  },
  details: {
    gap: Gap.gap_1,
  },
  valueBox1: {
    width: 92,
    borderTopLeftRadius: Border.br_8,
    borderBottomLeftRadius: Border.br_8,
    alignItems: "flex-start",
  },
  earnupto: {
    fontSize: FontSize.fs_9,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textGameCardTitle,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  valueBox2: {
    width: Width.width_72,
    borderTopRightRadius: Border.br_8,
    borderBottomRightRadius: Border.br_8,
    height: Height.height_40,
  },
  buttonInstallImage: {
    width: 61,
    height: 33,
  },
  priceTag: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  priceText: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default RewardCardL;

