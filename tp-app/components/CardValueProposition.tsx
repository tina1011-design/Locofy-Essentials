import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

export type CardValuePropositionType = {
  imgValueproposition?: ImageSourcePropType;
  caption?: string | React.ReactNode;
  captionWidth?: number | string;
  captionHeight?: number | string;
};

const CardValueProposition = ({
  imgValueproposition,
  caption = "INVITE YOUR FRIENDS",
  captionWidth,
  captionHeight,
}: CardValuePropositionType) => {
  return (
    <View style={styles.cardValueProposition}>
      <View style={styles.imageContainer}>
        <View style={styles.darkBox} />
        <Image
          style={styles.imgValueproposition}
          contentFit="cover"
          source={imgValueproposition}
        />
      </View>
      <Text 
        style={[
          styles.caption, 
          captionWidth && { width: captionWidth },
          captionHeight && { height: captionHeight }
        ]}
      >
        {caption}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardValueProposition: {
    alignItems: "center",
    gap: 0,
  },
  imageContainer: {
    width: 158,
    height: 158,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  darkBox: {
    position: "absolute",
    width: 126,
    height: 126,
    borderRadius: 16,
    backgroundColor: "rgba(4, 2, 31, 0.7)",
    zIndex: 1,
  },
  imgValueproposition: {
    width: 158,
    height: 158,
    position: "absolute",
    zIndex: 2,
  },
  caption: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.luckiestGuyRegular,
    color: Color.textWhite,
    textAlign: "center",
  },
});

export default CardValueProposition;

