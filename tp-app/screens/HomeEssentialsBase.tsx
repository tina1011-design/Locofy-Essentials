import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Scroll from "../components/Scroll1";
import NavigationBar from "../components/NavigationBar";
import RewardsScreen from "./RewardsScreen";
import ProfileScreen from "./ProfileScreen";
import { Color } from "../GlobalStyles";

const HomeEssentialsBase = () => {
  const [activeTab, setActiveTab] = React.useState<'games' | 'rewards' | 'profile'>('games');

  const handleTabPress = (tab: 'games' | 'rewards' | 'profile') => {
    setActiveTab(tab);
    console.log(`Switched to ${tab} tab`);
  };

  const renderCurrentScreen = () => {
    switch (activeTab) {
      case 'rewards':
        return <RewardsScreen activeTab={activeTab} onTabPress={handleTabPress} />;
      case 'profile':
        return <ProfileScreen activeTab={activeTab} onTabPress={handleTabPress} />;
      case 'games':
      default:
        return (
          <View style={styles.container}>
            <Header />
            <ScrollView
              style={styles.homeEssentialsBase}
              contentContainerStyle={styles.homeEssentialsBaseScrollViewContent}
            >
              <Scroll />
            </ScrollView>
            <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />
          </View>
        );
    }
  };

  return renderCurrentScreen();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.layoutPageBackground,
  },
  homeEssentialsBaseScrollViewContent: {
    flexDirection: "column",
    paddingTop: 36,
    paddingBottom: 100, // Increased to account for navigation bar
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 40,
    width: "100%",
  },
  homeEssentialsBase: {
    width: "100%",
    backgroundColor: Color.layoutPageBackground,
    flex: 1,
    maxWidth: "100%",
    paddingBottom: 80, // Add bottom padding to prevent overlap
  },
});

export default HomeEssentialsBase;
