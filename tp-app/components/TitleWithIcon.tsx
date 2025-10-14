import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import SvgTextWithStroke from "./SvgTextWithStroke";
import {
  Width,
  Padding,
  Height,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

interface TitleWithIconProps {
  text: string;
  iconSource: any;
  textWidth?: number;
}

const TitleWithIcon: React.FC<TitleWithIconProps> = ({ 
  text, 
  iconSource, 
  textWidth = 58 
}) => {
  return (
    <View style={[styles.titleWithIcon, styles.titleWithIconFlexBox]}>
      <View style={styles.titleWithIconFlexBox}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={iconSource}
        />
        <SvgTextWithStroke
          text={text}
          fontSize={FontSize.fs_16}
          fontFamily={FontFamily.luckiestGuyRegular}
          fill={Color.textWhite}
          stroke="#000000"
          strokeWidth={2}
          width={textWidth}
          height={Height.height_16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleWithIconFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  titleWithIcon: {
    width: Width.width_393,
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_4,
  },
  icon: {
    width: Width.width_20,
    height: Height.height_20,
  },
});

export default TitleWithIcon;
