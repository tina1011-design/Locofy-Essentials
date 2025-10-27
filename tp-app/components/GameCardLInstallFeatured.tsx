import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
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

export type GameCardLInstallFeaturedType = {
  valueIconSize1?: "M" | "L";
  valueIconShowIconCash1?: boolean;

  /** Variant props */
  property1?: string;
};

const GameCardLInstallFeatured = ({
  property1 = "Install",
  valueIconSize1 = "M",
  valueIconShowIconCash1,
}: GameCardLInstallFeaturedType) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("BarEarupto" as never);
  };

  return (
    <TouchableOpacity style={styles.gamecardL} onPress={handlePress}>
      <ImageBackground
        style={styles.contentIcon}
        resizeMode="cover"
        source={require("../assets/Content.png")}
      >
        <Image
          style={styles.gameBannerLIcon}
          contentFit="cover"
          source={require("../assets/Game-Banner-L.png")}
        />
        <View style={styles.featuredTag}>
          <Text style={styles.featuredText}>FEATURED!</Text>
        </View>
        <View style={styles.purpleBar}>
          <Ionicons name="trophy" size={16} color="white" />
          <Text style={styles.questTitle}>Make a Purchase</Text>
          <View style={styles.timeContainer}>
            <Ionicons name="time" size={16} color="white" />
            <Text style={styles.timeText}>6 days</Text>
          </View>
        </View>
        <View style={[styles.cardInfo, styles.detailsFlexBox]}>
          <View style={[styles.details, styles.detailsFlexBox]}>
            <View style={[styles.valueBox1, styles.valueSpaceBlock]}>
              <Text style={styles.earnupto}>Quest Reward</Text>
              <ValueIcon
                property1="coin"
                size="M"
                value="2400"
                showIconCash
              />
            </View>
          </View>
          <Image
            style={styles.buttonInstallImage}
            contentFit="cover"
            source={require("../assets/Button-Install.png")}
          />
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
    backgroundColor: "#ECA150",
  },
  gamecardL: {
    width: 362,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    borderRadius: Border.br_11,
    backgroundColor: "#E97F39",
    borderStyle: "solid",
    borderColor: Color.questCardOutline,
    borderWidth: 1,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
    overflow: "hidden",
  },
  contentIcon: {
    borderRadius: Border.br_12,
    height: 248,
    alignSelf: "stretch",
    overflow: "hidden",
    borderColor: "#FFF193",
    borderWidth: 1,
    borderStyle: "solid",
  },
  gameBannerLIcon: {
    maxWidth: "100%",
    height: 192,
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cardInfo: {
    backgroundColor: "#F4C765",
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
    borderRadius: Border.br_8,
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
  purpleBar: {
    position: "absolute",
    top: 156,
    left: 0,
    width: 360,
    height: 36,
    backgroundColor: "rgba(61, 0, 202, 0.8)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  questTitle: {
    fontSize: FontSize.fs_12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textWhite,
    textAlign: "left",
    flex: 1,
    marginLeft: 8,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  timeText: {
    fontSize: FontSize.fs_12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textWhite,
    textAlign: "left",
  },
  featuredTag: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#E82A2A",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderStyle: "solid",
  },
  featuredText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "LuckiestGuy-Regular",
    color: "#FFFB00",
    textAlign: "center",
    textShadowColor: "#9B1B20",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0,
  },
});

export default GameCardLInstallFeatured;
