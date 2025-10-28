import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated } from "react-native";
import { Image } from "expo-image";
import Svg, { Path, G, Circle, Text as SvgText } from "react-native-svg";
import {
  FontFamily,
  FontSize,
  Width,
  Color,
  BoxShadow,
  Border,
  Padding,
  MinWidth,
  Gap,
} from "../GlobalStyles";

interface PopupLuckyDrawWheelProps {
  onClose?: () => void;
}

interface WheelSegment {
  id: number;
  value: string;
  icon: string; // 'coin' or 'cash'
  color: string;
}

const PopupLuckyDrawWheel: React.FC<PopupLuckyDrawWheelProps> = ({ onClose }) => {
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [resultVisible, setResultVisible] = React.useState(false);
  const [selectedSegment, setSelectedSegment] = React.useState<WheelSegment | null>(null);
  const spinValue = React.useRef(new Animated.Value(0)).current;

  const wheelSegments: WheelSegment[] = [
    { id: 1, value: "100", icon: "coin", color: "#FFD700" },
    { id: 2, value: "50", icon: "cash", color: "#FF6B9D" },
    { id: 3, value: "200", icon: "coin", color: "#4ECDC4" },
    { id: 4, value: "10", icon: "cash", color: "#95E1D3" },
    { id: 5, value: "500", icon: "coin", color: "#F38181" },
    { id: 6, value: "25", icon: "cash", color: "#AA96DA" },
    { id: 7, value: "300", icon: "coin", color: "#FCBAD3" },
    { id: 8, value: "75", icon: "cash", color: "#A8D8EA" },
  ];

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResultVisible(false);

    // Random segment selection (0-7)
    const randomIndex = Math.floor(Math.random() * 8);
    const selectedSeg = wheelSegments[randomIndex];
    setSelectedSegment(selectedSeg);

    // Calculate rotation: multiple full rotations + angle to land on selected segment
    const segmentAngle = 360 / 8; // 45 degrees per segment
    const targetAngle = 360 * 5 + (randomIndex * segmentAngle) + (segmentAngle / 2); // 5 full rotations + target

    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: targetAngle,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => {
      setIsSpinning(false);
      setResultVisible(true);
    });
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const getIconSource = (icon: string) => {
    return icon === "coin" 
      ? require("../assets/icon-coin.png")
      : require("../assets/icon-cash.png");
  };

  return (
    <View style={styles.container}>
      <View style={[styles.popupCard, styles.contentBorder]}>
        <View style={[styles.content, styles.contentBorder]}>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>LUCKY DRAW WHEEL</Text>
            
            <View style={styles.wheelContainer}>
              {/* Pointer at top */}
              <View style={styles.pointer}>
                <View style={styles.pointerTriangle} />
              </View>

              {/* Wheel */}
              <Animated.View 
                style={[
                  styles.wheel,
                  { transform: [{ rotate: spin }] }
                ]}
              >
                <Svg width="300" height="300" viewBox="0 0 300 300">
                  <G transform="translate(150, 150)">
                    {wheelSegments.map((segment, index) => {
                      const angle = (360 / 8) * index;
                      const startAngle = angle - 22.5;
                      const endAngle = angle + 22.5;
                      
                      const startRad = (startAngle * Math.PI) / 180;
                      const endRad = (endAngle * Math.PI) / 180;
                      
                      const x1 = 140 * Math.cos(startRad);
                      const y1 = 140 * Math.sin(startRad);
                      const x2 = 140 * Math.cos(endRad);
                      const y2 = 140 * Math.sin(endRad);
                      
                      const path = `M 0 0 L ${x1} ${y1} A 140 140 0 0 1 ${x2} ${y2} Z`;
                      
                      return (
                        <G key={segment.id}>
                          <Path
                            d={path}
                            fill={segment.color}
                            stroke="#FFFFFF"
                            strokeWidth="3"
                          />
                        </G>
                      );
                    })}
                    
                    {/* Center circle */}
                    <Circle r="30" fill="#FFFFFF" stroke="#8897D9" strokeWidth="4" />
                  </G>
                </Svg>
                
                {/* Segment values overlaid */}
                <View style={styles.segmentLabelsContainer}>
                  {wheelSegments.map((segment, index) => {
                    const angle = (360 / 8) * index;
                    const rad = (angle * Math.PI) / 180;
                    const radius = 95;
                    const x = radius * Math.cos(rad - Math.PI / 2);
                    const y = radius * Math.sin(rad - Math.PI / 2);
                    
                    return (
                      <View
                        key={segment.id}
                        style={[
                          styles.segmentLabel,
                          {
                            transform: [
                              { translateX: x },
                              { translateY: y },
                              { rotate: `${angle}deg` }
                            ],
                          },
                        ]}
                      >
                        <Image
                          style={styles.segmentIcon}
                          contentFit="contain"
                          source={getIconSource(segment.icon)}
                        />
                        <Text style={styles.segmentText}>{segment.value}</Text>
                      </View>
                    );
                  })}
                </View>
              </Animated.View>
            </View>

            {/* Result Display */}
            {resultVisible && selectedSegment && (
              <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>You Won!</Text>
                <View style={styles.resultValue}>
                  <Image
                    style={styles.resultIcon}
                    contentFit="contain"
                    source={getIconSource(selectedSegment.icon)}
                  />
                  <Text style={styles.resultText}>{selectedSegment.value}</Text>
                </View>
              </View>
            )}

            {/* Spin Button */}
            <TouchableOpacity 
              style={[styles.spinButton, isSpinning && styles.spinButtonDisabled]}
              onPress={handleSpin}
              disabled={isSpinning}
              activeOpacity={0.8}
            >
              <Text style={styles.spinButtonText}>
                {isSpinning ? "SPINNING..." : "SPIN"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <TouchableOpacity onPress={onClose} activeOpacity={0.8}>
        <Text style={styles.closeText}>CLOSE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 100,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  contentBorder: {
    borderStyle: "solid",
    overflow: "hidden",
  },
  popupCard: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    borderRadius: Border.br_11,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.questCardOutline,
    borderWidth: 1,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
    overflow: "hidden",
  },
  content: {
    width: 360,
    borderRadius: Border.br_12,
    borderColor: "#CFD6FF",
    borderWidth: 2,
    overflow: "hidden",
  },
  cardInfo: {
    backgroundColor: Color.textWhite,
    alignItems: "center",
    paddingHorizontal: Padding.padding_16,
    paddingTop: Padding.padding_16,
    paddingBottom: Padding.padding_16,
    gap: Gap.gap_16,
    alignSelf: "stretch",
  },
  title: {
    color: "#8897D9",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.fs_24,
    textAlign: "center",
    alignSelf: "stretch",
  },
  wheelContainer: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  pointer: {
    position: "absolute",
    top: -10,
    zIndex: 10,
    alignItems: "center",
  },
  pointerTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#FF3B3B",
  },
  wheel: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  segmentLabelsContainer: {
    position: "absolute",
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  segmentLabel: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  segmentIcon: {
    width: 24,
    height: 24,
  },
  segmentText: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#FFFFFF",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  resultContainer: {
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#F0F4FF",
    borderRadius: Border.br_8,
    width: "100%",
  },
  resultTitle: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#8897D9",
  },
  resultValue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  resultIcon: {
    width: 32,
    height: 32,
  },
  resultText: {
    fontSize: FontSize.fs_24,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#8897D9",
  },
  spinButton: {
    backgroundColor: "#8897D9",
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: Border.br_8,
    minWidth: 200,
    alignItems: "center",
  },
  spinButtonDisabled: {
    backgroundColor: "#B0B8D8",
  },
  spinButtonText: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.textWhite,
  },
  closeText: {
    color: Color.textWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: 14,
  },
});

export default PopupLuckyDrawWheel;

