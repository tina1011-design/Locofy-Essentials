import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  Padding,
  Width,
  Height,
  Color,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

interface NavigationBarProps {
  activeTab?: 'games' | 'rewards' | 'profile';
  onTabPress?: (tab: 'games' | 'rewards' | 'profile') => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  activeTab = 'games',
  onTabPress,
}) => {
  const handleTabPress = (tab: 'games' | 'rewards' | 'profile') => {
    if (onTabPress) {
      onTabPress(tab);
    }
  };

  const getTabStyle = (tab: 'games' | 'rewards' | 'profile') => {
    const isActive = activeTab === tab;
    return isActive ? styles.activeTab : styles.defaultTab;
  };

  const getTabGradient = (tab: 'games' | 'rewards' | 'profile', isPressed: boolean = false) => {
    const isActive = activeTab === tab;
    
    if (isActive) {
      if (isPressed) {
        return ["#9a4fc7", "#7a4bb8", "#5a3ba0"]; // Darker focus colors when pressed
      }
      return ["#bb65fe", "#8d6afa", "#796df7"]; // Focus colors
    }
    
    if (isPressed) {
      return ["#6b3a9a", "#5a2d8a", "#4a1f7a"]; // Darker default colors when pressed
    }
    return ["#814dc9", "#7657d6", "#6763e2"]; // Default colors
  };

  const getTabBorderStyle = (tab: 'games' | 'rewards' | 'profile') => {
    const isActive = activeTab === tab;
    if (isActive) {
      return {
        borderColor: Color.colorPlum,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        overflow: "hidden" as const,
      };
    }
    return {
      borderColor: Color.colorViolet,
      borderTopWidth: 2,
    };
  };
  return (
    <View style={styles.navigationBar}>
      <Pressable 
        onPress={() => handleTabPress('games')}
        style={({ pressed }) => [
          styles.pressableTab,
          pressed && styles.pressedTab
        ]}
      >
        {({ pressed }) => (
          <LinearGradient
            style={[styles.tabSpaceBlock, getTabBorderStyle('games')]}
            locations={[0, 0.48, 1]}
            colors={getTabGradient('games', pressed)}
          >
            <Image
              style={styles.navigationIcon}
              contentFit="cover"
              source={require("../assets/tab-games.png")}
            />
            <Text style={[styles.games, styles.gamesTypo]}>Games</Text>
          </LinearGradient>
        )}
      </Pressable>
      
      <Pressable 
        onPress={() => handleTabPress('rewards')}
        style={({ pressed }) => [
          styles.pressableTab,
          pressed && styles.pressedTab
        ]}
      >
        {({ pressed }) => (
          <LinearGradient
            style={[styles.tabSpaceBlock, getTabBorderStyle('rewards')]}
            locations={[0, 0.48, 1]}
            colors={getTabGradient('rewards', pressed)}
          >
            <Image
              style={styles.navigationIcon}
              contentFit="cover"
              source={require("../assets/tab-rewards.png")}
            />
            <Text style={[styles.rewards, styles.gamesTypo]}>Rewards</Text>
          </LinearGradient>
        )}
      </Pressable>
      
      <Pressable 
        onPress={() => handleTabPress('profile')}
        style={({ pressed }) => [
          styles.pressableTab,
          pressed && styles.pressedTab
        ]}
      >
        {({ pressed }) => (
          <LinearGradient
            style={[styles.tabSpaceBlock, getTabBorderStyle('profile')]}
            locations={[0, 0.48, 1]}
            colors={getTabGradient('profile', pressed)}
          >
            <Image
              style={styles.navigationIcon}
              contentFit="cover"
              source={require("../assets/tab-profile.png")}
            />
            <Text style={[styles.profile, styles.gamesTypo]}>Profile</Text>
          </LinearGradient>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tabSpaceBlock: {
    backgroundColor: "transparent",
    paddingVertical: Padding.padding_6,
    paddingHorizontal: Padding.padding_25,
    justifyContent: "center",
    borderStyle: "solid",
    flex: 1,
    height: Height.height_80,
    alignItems: "center",
  },
  gamesTypo: {
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    color: Color.textWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.fs_11,
    height: Height.height_17,
    justifyContent: "center",
  },
  navigationBar: {
    width: "100%",
    flexDirection: "row",
    zIndex: 1,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  pressableTab: {
    flex: 1,
  },
  defaultTab: {
    borderColor: Color.colorViolet,
    borderTopWidth: 2,
  },
  activeTab: {
    borderColor: Color.colorPlum,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    overflow: "hidden",
  },
  navigationIcon: {
    height: Height.height_44,
    width: Width.width_44,
  },
  games: {
    width: Width.width_44,
  },
  rewards: {
    width: 53,
  },
  profile: {
    width: 39,
  },
});

export default NavigationBar;
