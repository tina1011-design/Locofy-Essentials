import * as React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import RewardCard from "../components/RewardCard";
import TitleWithIcon from "../components/TitleWithIcon";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

interface RewardsScreenProps {
  activeTab: 'games' | 'rewards' | 'profile';
  onTabPress: (tab: 'games' | 'rewards' | 'profile') => void;
}

const RewardsScreen: React.FC<RewardsScreenProps> = ({ activeTab, onTabPress }) => {
  // Sample rewards data - exactly 6 cards for 2 rows of 3
  const rewards = [
    { id: 1, status: 'ready-to-claim' as const, value: '$10', coinAmount: '2400' },
    { id: 2, status: 'default' as const, value: '$25', coinAmount: '6000' },
    { id: 3, status: 'locked' as const, value: '$50', coinAmount: '12000' },
    { id: 4, status: 'completed' as const, value: '$5', coinAmount: '1200' },
    { id: 5, status: 'default' as const, value: '$15', coinAmount: '3600' },
    { id: 6, status: 'locked' as const, value: '$100', coinAmount: '24000' },
  ];

  // Split rewards into rows of 3
  const firstRow = rewards.slice(0, 3);
  const secondRow = rewards.slice(3, 6);
  
  // Filter Google cards to exclude locked and completed states
  const googleCards = rewards.filter(reward => 
    reward.status !== 'locked' && reward.status !== 'completed'
  );
  
  // Split Google cards into rows of 3
  const googleFirstRow = googleCards.slice(0, 3);
  const googleSecondRow = googleCards.slice(3, 6);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TitleWithIcon 
          text="MERGE MAYOR"
          iconSource={require("../assets/icon-star.svg")}
          textWidth={100}
        />
        
        {/* First Row - 3 cards */}
        <View style={styles.rewardsRow}>
          {firstRow.map((reward) => (
            <RewardCard
              key={reward.id}
              status={reward.status}
              value={reward.value}
              coinAmount={reward.coinAmount}
            />
          ))}
        </View>
        
        {/* Second Row - 3 cards */}
        <View style={styles.rewardsRow}>
          {secondRow.map((reward) => (
            <RewardCard
              key={reward.id}
              status={reward.status}
              value={reward.value}
              coinAmount={reward.coinAmount}
            />
          ))}
        </View>

        <TitleWithIcon 
          text="GOOGLE"
          iconSource={require("../assets/icon-star.svg")}
          textWidth={80}
        />
        
        {/* Third Row - Google cards (filtered) */}
        <View style={styles.rewardsRow}>
          {googleFirstRow.map((reward) => (
            <RewardCard
              key={`google-${reward.id}`}
              status={reward.status}
              value={reward.value}
              coinAmount={reward.coinAmount}
            />
          ))}
        </View>
        
        {/* Fourth Row - Google cards (filtered) */}
        <View style={styles.rewardsRow}>
          {googleSecondRow.map((reward) => (
            <RewardCard
              key={`google-${reward.id}`}
              status={reward.status}
              value={reward.value}
              coinAmount={reward.coinAmount}
            />
          ))}
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
  scrollView: {
    flex: 1,
    backgroundColor: Color.layoutPageBackground,
  },
  scrollContent: {
    paddingTop: 160,
    paddingBottom: 100, // Account for navigation bar
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.fs_24,
    fontFamily: FontFamily.poppinsBold,
    color: Color.textWhite,
    marginBottom: 24,
    textAlign: "center",
  },
  rewardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
});

export default RewardsScreen;
