import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize } from "../GlobalStyles";

interface PopupAllowTrackingProps {
  onClose?: () => void;
}

const PopupAllowTracking: React.FC<PopupAllowTrackingProps> = ({ onClose }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/allowtracking-bg.png")}
      resizeMode="cover"
    >
      <View style={styles.panelWrapper}>
        <Image
          style={styles.titleImage}
          contentFit="cover"
          source={require("../assets/allowtracking-title.png")}
        />
        <View style={styles.panelContainer}>
          <Image
            style={styles.panelBackground}
            contentFit="contain"
            source={require("../assets/allowtracking-panel.png")}
          />
        <View style={styles.contentContainer}>
          <Image
            style={styles.coinStackImage}
            contentFit="contain"
            source={require("../assets/allowtracking-coinstack.png")}
          />
          <Text style={styles.descriptionText}>
            Enable tracking so we can reward you for every minute you play on games inside Treasure Play.
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              style={styles.allowButton}
              contentFit="contain"
              source={require("../assets/btn-allow.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} activeOpacity={0.8}>
            <Text style={styles.declineText}>
              I don't want to get play time rewards
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  panelWrapper: {
    alignItems: "center",
    marginTop: 300,
  },
  titleImage: {
    width: 240,
    height: 102,
    zIndex: 2,
    marginTop: 40,
    marginBottom: -80,
  },
  panelContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  panelBackground: {
    width: 360,
    height: 500,
  },
  contentContainer: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: 40,
    paddingTop: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  coinStackImage: {
    width: 140,
    height: 105,
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#976234",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  allowButton: {
    width: 240,
    height: 60,
  },
  declineText: {
    fontSize: 12,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: "#B98649",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default PopupAllowTracking;

