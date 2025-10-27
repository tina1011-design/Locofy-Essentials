import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { Image } from "expo-image";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in animation for logo
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      // Wait 1 second after fade in completes, then call onFinish
      setTimeout(() => {
        onFinish();
      }, 1000);
    });
  }, []);

  return (
    <View style={styles.splashScreen}>
      <Image
        style={styles.backgroundImage}
        contentFit="cover"
        source={require("../assets/splash.png")}
      />
      <Animated.View style={[styles.logoContainer, { opacity: logoOpacity }]}>
        <Image
          style={styles.logo}
          contentFit="contain"
          source={require("../assets/logo-Treasureplay.png")}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;

