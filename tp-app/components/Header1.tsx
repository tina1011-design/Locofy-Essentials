import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TagGenre from "./TagGenre";
import Rating from "./Rating";
import {
  Width,
  Color,
  Padding,
  Gap,
  Height,
  Border,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const Header1 = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("Button1" as never);
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerContents}>
        <View style={styles.headerTitle}>
          <View style={styles.wrapperAppIcon}>
            <Image
              style={styles.appIcon}
              contentFit="cover"
              source={require("../assets/app-icon.png")}
            />
          </View>
          <View style={styles.gameInfo}>
            <Text style={styles.gameName}>Game Name</Text>
            <View style={styles.gameGenre}>
              <TagGenre property1="Simulation" simulation="Simulation" />
              <TagGenre property1="Action" simulation="Action" />
              <Rating />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            style={styles.btnBackIcon}
            contentFit="cover"
            source={require("../assets/btn-back.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Width.width_393,
    backgroundColor: Color.layoutHeaderBackground,
    height: 160,
    alignItems: "flex-end",
    paddingHorizontal: Padding.padding_24,
    paddingBottom: Padding.padding_16,
    zIndex: 3,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
  },
  headerContents: {
    flex: 1,
    gap: Gap.gap_4,
    alignItems: "center",
    flexDirection: "row",
  },
  headerTitle: {
    gap: Gap.gap_16,
    flexDirection: "row",
  },
  wrapperAppIcon: {
    height: Height.height_80,
    width: Width.width_72,
    borderRadius: Border.br_8,
    minWidth: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  appIcon: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    position: "absolute",
    left: 0,
    top: 3,
    transform: [
      {
        scale: 1.139,
      },
    ],
  },
  gameInfo: {
    width: 225,
    gap: 7,
  },
  gameName: {
    alignSelf: "stretch",
    fontSize: FontSize.fs_16,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textWhite,
    textAlign: "left",
  },
  gameGenre: {
    gap: Gap.gap_8,
    alignItems: "center",
    flexDirection: "row",
  },
  btnBackIcon: {
    width: 34,
    borderRadius: Border.br_80,
    height: Height.height_34,
  },
});

export default Header1;
