import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import NavigationBar from "../components/NavigationBar";
import { Color, FontFamily, FontSize, Padding, Height, Width } from "../GlobalStyles";

interface ProfileScreenProps {
  activeTab: 'games' | 'rewards' | 'profile';
  onTabPress: (tab: 'games' | 'rewards' | 'profile') => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.header}
        locations={[0, 0.48, 1]}
        colors={["#814dc9", "#7657d6", "#6763e2"]}
      >
        <Image
          style={styles.profileAvatar}
          contentFit="cover"
          source={require("../assets/Header-avatar-frame.png")}
        />
        <Text style={styles.profileName}>Player Name</Text>
        <Text style={styles.profileLevel}>Level 15</Text>
      </LinearGradient>
      
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Image
              style={styles.statIcon}
              contentFit="cover"
              source={require("../assets/icon-coin.png")}
            />
            <Text style={styles.statValue}>1,250</Text>
            <Text style={styles.statLabel}>Coins</Text>
          </View>
          
          <View style={styles.statCard}>
            <Image
              style={styles.statIcon}
              contentFit="cover"
              source={require("../assets/icon-cash.png")}
            />
            <Text style={styles.statValue}>$45.50</Text>
            <Text style={styles.statLabel}>Cash</Text>
          </View>
          
          <View style={styles.statCard}>
            <Image
              style={styles.statIcon}
              contentFit="cover"
              source={require("../assets/icon-star.svg")}
            />
            <Text style={styles.statValue}>23</Text>
            <Text style={styles.statLabel}>Achievements</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Statistics</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Games Played</Text>
            <Text style={styles.infoValue}>156</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Games Completed</Text>
            <Text style={styles.infoValue}>89</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Total Play Time</Text>
            <Text style={styles.infoValue}>24h 32m</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.settingsCard}>
            <Text style={styles.settingsLabel}>Notifications</Text>
            <Text style={styles.settingsValue}>Enabled</Text>
          </View>
          <View style={styles.settingsCard}>
            <Text style={styles.settingsLabel}>Sound Effects</Text>
            <Text style={styles.settingsValue}>Enabled</Text>
          </View>
          <View style={styles.settingsCard}>
            <Text style={styles.settingsLabel}>Music</Text>
            <Text style={styles.settingsValue}>Disabled</Text>
          </View>
        </View>
      </ScrollView>
      
      <NavigationBar activeTab={activeTab} onTabPress={onTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.layoutPageBackground,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: Padding.padding_16,
    alignItems: "center",
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  profileName: {
    fontSize: FontSize.fs_24,
    fontFamily: FontFamily.poppinsBold,
    color: Color.textWhite,
    marginBottom: 4,
  },
  profileLevel: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textWhite,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    paddingHorizontal: Padding.padding_16,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 100,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: Color.gameCardBackground,
    borderRadius: 12,
    padding: Padding.padding_16,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: Color.gameCardOutline,
  },
  statIcon: {
    width: 30,
    height: 30,
    marginBottom: 8,
  },
  statValue: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsBold,
    color: Color.textGameCardTitle,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textGameCardTitle,
    opacity: 0.7,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textGameCardTitle,
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: Color.gameCardBackground,
    borderRadius: 8,
    padding: Padding.padding_12,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.gameCardOutline,
  },
  infoLabel: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textGameCardTitle,
  },
  infoValue: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textGameCardTitle,
  },
  settingsCard: {
    backgroundColor: Color.gameCardBackground,
    borderRadius: 8,
    padding: Padding.padding_12,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.gameCardOutline,
  },
  settingsLabel: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textGameCardTitle,
  },
  settingsValue: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textQuestCardCashback,
  },
});

export default ProfileScreen;
