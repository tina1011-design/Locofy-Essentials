import * as React from "react";
import { ScrollView, StyleSheet, View, Animated, Text } from "react-native";
import { Image } from "expo-image";
import CardValueProposition from "../components/CardValueProposition";
import BtnLetsgo from "../components/BtnLetsgo";
import { Color } from "../GlobalStyles";

interface PopupValuePropositionProps {
  onClose?: () => void;
  version?: 'profile' | 'quests' | 'games';
}

const PopupValueProposition: React.FC<PopupValuePropositionProps> = ({ onClose, version = 'profile' }) => {
  const row1CardOpacity = React.useRef(new Animated.Value(0)).current;
  const row1ArrowOpacity = React.useRef(new Animated.Value(0)).current;
  const row2CardOpacity = React.useRef(new Animated.Value(0)).current;
  const row2ArrowOpacity = React.useRef(new Animated.Value(0)).current;
  const row3Opacity = React.useRef(new Animated.Value(0)).current;
  const buttonOpacity = React.useRef(new Animated.Value(0)).current;

  const row1CardTranslateY = React.useRef(new Animated.Value(30)).current;
  const row1ArrowTranslateY = React.useRef(new Animated.Value(30)).current;
  const row2CardTranslateY = React.useRef(new Animated.Value(30)).current;
  const row2ArrowTranslateY = React.useRef(new Animated.Value(30)).current;
  const row3TranslateY = React.useRef(new Animated.Value(30)).current;
  const buttonTranslateY = React.useRef(new Animated.Value(30)).current;

  const getContent = () => {
    switch (version) {
      case 'quests':
        return {
          row1: {
            caption: (
              <View style={styles.captionMultiRow}>
                <View style={styles.captionWithLogo}>
                  <Text style={styles.captionText}>install via </Text>
                  <Image source={require("../assets/logo-Treasureplay-S.png")} style={styles.inlineLogo} contentFit="contain" />
                </View>
                <Text style={styles.captionText}>complete quests</Text>
              </View>
            ),
            captionWidth: undefined,
            captionHeight: undefined,
            image: require("../assets/ftue-questsfeed-1.png"),
          },
          row2: {
            caption: (
              <View style={styles.captionMultiRow}>
                <Text style={styles.captionText}>return to</Text>
                <View style={styles.captionWithIcon}>
                  <Text style={styles.captionText}>collect your </Text>
                  <Image source={require("../assets/icon-coin.png")} style={styles.inlineIcon} contentFit="contain" />
                </View>
              </View>
            ),
            captionWidth: undefined,
            captionHeight: undefined,
            image: require("../assets/ftue-questsfeed-2.png"),
          },
          row3: {
            caption: "get new quests, bigger rewards!",
            captionWidth: 200,
            captionHeight: undefined,
            image: require("../assets/ftue-questsfeed-3.png"),
          },
        };
      case 'games':
        return {
          row1: {
            caption: "install & play",
            captionWidth: undefined,
            captionHeight: undefined,
            image: require("../assets/ftue-gamesfeed-1.png"),
          },
          row2: {
            caption: "earn coins",
            captionWidth: undefined,
            captionHeight: undefined,
            image: require("../assets/ftue-gamesfeed-2.png"),
          },
          row3: {
            caption: "get rewards",
            captionWidth: undefined,
            captionHeight: undefined,
            image: require("../assets/ftue-gamesfeed-3.png"),
          },
        };
      case 'profile':
      default:
        return {
          row1: {
            caption: "INVITE YOUR FRIENDS",
            captionWidth: undefined,
            captionHeight: undefined,
            image: require("../assets/ftue-friends-1.png"),
          },
          row2: {
            caption: "They complete Quests.\nYou earn medals",
            captionWidth: 182,
            captionHeight: 32,
            image: require("../assets/ftue-friends-2.png"),
          },
          row3: {
            caption: "Unlock rewards\nwith your medals",
            captionWidth: 145,
            captionHeight: 32,
            image: require("../assets/ftue-friends-3.png"),
          },
        };
    }
  };

  const content = getContent();

  React.useEffect(() => {
    Animated.sequence([
      // Row 1 Card
      Animated.parallel([
        Animated.timing(row1CardOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(row1CardTranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      // Row 1 Arrow
      Animated.parallel([
        Animated.timing(row1ArrowOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(row1ArrowTranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      // Row 2 Card
      Animated.parallel([
        Animated.timing(row2CardOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(row2CardTranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      // Row 2 Arrow
      Animated.parallel([
        Animated.timing(row2ArrowOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(row2ArrowTranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      // Row 3
      Animated.parallel([
        Animated.timing(row3Opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(row3TranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      // Button
      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(buttonTranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <ScrollView
      style={styles.popupValueProposition}
      contentContainerStyle={styles.popupValuePropositionScrollViewContent}
    >
      <View style={styles.content}>
        <View style={[styles.row1, styles.rowFlexBox]}>
          <Animated.View
            style={{
              opacity: row1ArrowOpacity,
              transform: [{ translateY: row1ArrowTranslateY }],
            }}
          >
            <Image
              style={styles.arrowYellowIcon}
              contentFit="cover"
              source={require("../assets/arrow-yellow.png")}
            />
          </Animated.View>
          <Animated.View
            style={{
              opacity: row1CardOpacity,
              transform: [{ translateY: row1CardTranslateY }],
            }}
          >
            <CardValueProposition 
              caption={content.row1.caption}
              captionWidth={content.row1.captionWidth}
              captionHeight={content.row1.captionHeight}
              imgValueproposition={content.row1.image}
            />
          </Animated.View>
        </View>
        <View style={[styles.row2, styles.rowFlexBox]}>
          <Animated.View
            style={{
              opacity: row2CardOpacity,
              transform: [{ translateY: row2CardTranslateY }],
            }}
          >
            <CardValueProposition
              caption={content.row2.caption}
              captionWidth={content.row2.captionWidth}
              captionHeight={content.row2.captionHeight}
              imgValueproposition={content.row2.image}
            />
          </Animated.View>
          <Animated.View
            style={{
              opacity: row2ArrowOpacity,
              transform: [{ translateY: row2ArrowTranslateY }],
            }}
          >
            <Image
              style={[styles.arrowYellowIcon, styles.arrowFlipped]}
              contentFit="cover"
              source={require("../assets/arrow-yellow.png")}
            />
          </Animated.View>
        </View>
        <Animated.View 
          style={[
            styles.row3, 
            styles.rowFlexBox,
            {
              opacity: row3Opacity,
              transform: [{ translateY: row3TranslateY }],
            },
          ]}
        >
          <CardValueProposition
            caption={content.row3.caption}
            captionWidth={content.row3.captionWidth}
            captionHeight={content.row3.captionHeight}
            imgValueproposition={content.row3.image}
          />
        </Animated.View>
        <Animated.View
          style={{
            opacity: buttonOpacity,
            transform: [{ translateY: buttonTranslateY }],
          }}
        >
          <BtnLetsgo onPress={onClose} />
        </Animated.View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  popupValuePropositionScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 88,
    alignItems: "center",
    justifyContent: "center",
    height: 852,
  },
  rowFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    gap: 8,
  },
  popupValueProposition: {
    width: "100%",
    backgroundColor: "rgba(32, 20, 59, 0.5)",
    maxWidth: "100%",
    flex: 1,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    flex: 1,
  },
  row1: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  row2: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  row3: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  arrowYellowIcon: {
    height: 80,
    width: 80,
  },
  arrowFlipped: {
    transform: [{ scaleX: -1 }],
  },
  captionMultiRow: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  captionWithLogo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    overflow: "visible",
  },
  captionWithIcon: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    flexWrap: "wrap",
    overflow: "visible",
  },
  captionText: {
    fontSize: 16,
    fontFamily: "LuckiestGuy-Regular",
    color: "#FFFFFF",
    textAlign: "center",
  },
  inlineIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 2,
    marginBottom: -6,
  },
  inlineLogo: {
    width: 36,
    height: 36,
    marginHorizontal: 2,
    marginBottom: 3,
  },
});

export default PopupValueProposition;

