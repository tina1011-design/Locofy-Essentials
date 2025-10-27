import * as React from "react";
import { StyleSheet, View, ScrollView, Text, Modal, Animated, Dimensions, Switch } from "react-native";
import { Image } from "expo-image";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import RewardCardM from "../components/RewardCardM";
import TitleWithIcon from "../components/TitleWithIcon";
import PopupGiftcardCheckout from "./PopupGiftcardCheckout";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface RewardsScreenProps {
  activeTab: 'games' | 'rewards' | 'profile';
  onTabPress: (tab: 'games' | 'rewards' | 'profile') => void;
  coinBalance?: number;
  cashBalance?: number;
  isFirstTimeUser?: boolean;
}

const RewardsScreen: React.FC<RewardsScreenProps> = ({ activeTab, onTabPress, coinBalance, cashBalance, isFirstTimeUser }) => {
  const [showCheckoutPopup, setShowCheckoutPopup] = React.useState(false);
  const [offersEnabled, setOffersEnabled] = React.useState(true);
  const slideAnim = React.useRef(new Animated.Value(SCREEN_WIDTH)).current;

  React.useEffect(() => {
    if (showCheckoutPopup) {
      // Slide in from right
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [showCheckoutPopup]);

  const handleDefaultCardPress = () => {
    setShowCheckoutPopup(true);
  };

  const handleCloseCheckout = () => {
    // Slide out to right
    Animated.timing(slideAnim, {
      toValue: SCREEN_WIDTH,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setShowCheckoutPopup(false);
      slideAnim.setValue(SCREEN_WIDTH); // Reset position
    });
  };
  
  // Calculate progress based on coin balance
  const calculateProgress = (requiredCoins: number): number => {
    const currentCoins = coinBalance || 0;
    const progressPercentage = Math.min((currentCoins / requiredCoins) * 100, 100);
    return Math.round(progressPercentage);
  };
  
  // Sample rewards data - Merge Mayor section
  const rewardsBaseData = [
    { id: 1, value: '$10', coinAmount: 2400 },
    { id: 2, value: '$15', coinAmount: 3600 },
    { id: 3, value: '$25', coinAmount: 6000 },
    { id: 4, value: '$50', coinAmount: 12000 },
    { id: 5, value: '$100', coinAmount: 24000 },
    { id: 6, value: '$5', coinAmount: 1200 },
  ];
  
  // Google Play section data
  const googleBaseData = [
    { id: 7, value: '$10', coinAmount: 2400 },
    { id: 8, value: '$15', coinAmount: 3600 },
    { id: 9, value: '$25', coinAmount: 6000 },
    { id: 10, value: '$50', coinAmount: 12000 },
    { id: 11, value: '$100', coinAmount: 24000 },
    { id: 12, value: '$5', coinAmount: 1200 },
  ];
  
  // Generate Merge Mayor rewards with dynamic status and progress based on FTUE mode
  const rewards = rewardsBaseData.map((reward) => {
    if (isFirstTimeUser) {
      // In FTUE mode, only show first 3 cards, all locked
      if (reward.id <= 3) {
        return {
          ...reward,
          coinAmount: reward.coinAmount.toLocaleString(),
          status: 'locked' as const,
          progress: 0,
        };
      }
      return null; // Don't show cards 4-6 in FTUE mode
    } else {
      // Normal mode - use predefined statuses
      let status: 'ready-to-claim' | 'default' | 'locked' | 'completed';
      let progress: number;
      
      if (reward.id === 1) {
        status = 'ready-to-claim';
        progress = 100;
      } else if (reward.id === 2 || reward.id === 3) {
        status = 'default';
        progress = reward.id === 2 ? 65 : 30;
      } else if (reward.id === 4 || reward.id === 5) {
        status = 'locked';
        progress = 0;
      } else {
        status = 'completed';
        progress = 100;
      }
      
      return {
        ...reward,
        coinAmount: reward.coinAmount.toLocaleString(),
        status,
        progress,
      };
    }
  }).filter(Boolean); // Remove null entries in FTUE mode

  // Split Merge Mayor rewards into rows of 3
  const firstRow = isFirstTimeUser ? rewards : rewards.slice(0, 3);
  const secondRow = isFirstTimeUser ? [] : rewards.slice(3, 6);
  
  // Generate Google Play rewards
  const googleCards = googleBaseData.map((reward) => {
    if (isFirstTimeUser) {
      // In FTUE mode, all 6 cards are in default state with real progress
      return {
        ...reward,
        coinAmount: reward.coinAmount.toLocaleString(),
        status: 'default' as const,
        progress: calculateProgress(reward.coinAmount),
      };
    } else {
      // Normal mode - filter out locked and completed states
      // Only show cards that would be ready-to-claim or default
      if (reward.id === 7) {
        return {
          ...reward,
          coinAmount: reward.coinAmount.toLocaleString(),
          status: 'ready-to-claim' as const,
          progress: 100,
        };
      } else if (reward.id === 8 || reward.id === 9) {
        return {
          ...reward,
          coinAmount: reward.coinAmount.toLocaleString(),
          status: 'default' as const,
          progress: reward.id === 8 ? 65 : 30,
        };
      }
      return null; // Don't show locked/completed cards in Google section
    }
  }).filter(Boolean);
  
  // Split Google cards into rows of 3
  const googleFirstRow = googleCards.slice(0, 3);
  const googleSecondRow = googleCards.slice(3, 6);

  return (
    <View style={styles.container}>
      <Header coinBalance={coinBalance} cashBalance={cashBalance} />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.toggleRow}>
          <Text style={styles.toggleText}>Offers Available</Text>
          <Switch
            value={offersEnabled}
            onValueChange={setOffersEnabled}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={offersEnabled ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
        
        {offersEnabled ? (
          <>
            <View style={styles.titleRow}>
              <TitleWithIcon 
                text="MERGE MAYOR"
                iconSource={require("../assets/reward-title-mm.png")}
                textWidth={130}
              />
              <Image
                style={styles.playToUnlockButton}
                contentFit="cover"
                source={require("../assets/btn-playtounlock.png")}
              />
            </View>
            
            {/* First Row - 3 cards */}
            <View style={styles.rewardsRow}>
              {firstRow.map((reward) => (
                <RewardCardM
                  key={reward.id}
                  status={reward.status}
                  value={reward.value}
                  coinAmount={reward.coinAmount}
                  progress={reward.progress}
                  onPress={reward.status === 'default' ? handleDefaultCardPress : undefined}
                />
              ))}
            </View>
            
            {/* Second Row - 3 cards (hidden in FTUE mode) */}
            {!isFirstTimeUser && secondRow.length > 0 && (
              <View style={styles.rewardsRow}>
                {secondRow.map((reward) => (
                  <RewardCardM
                    key={reward.id}
                    status={reward.status}
                    value={reward.value}
                    coinAmount={reward.coinAmount}
                    progress={reward.progress}
                    onPress={reward.status === 'default' ? handleDefaultCardPress : undefined}
                  />
                ))}
              </View>
            )}

            <View style={styles.titleRow}>
              <TitleWithIcon 
                text="GOOGLE PLAY"
                iconSource={require("../assets/reward-title-google.png")}
                textWidth={120}
              />
            </View>
            
            {/* Third Row - Google cards (filtered) */}
            <View style={styles.rewardsRow}>
              {googleFirstRow.map((reward) => (
                <RewardCardM
                  key={`google-${reward.id}`}
                  status={reward.status}
                  value={reward.value}
                  coinAmount={reward.coinAmount}
                  progress={reward.progress}
                  onPress={reward.status === 'default' ? handleDefaultCardPress : undefined}
                />
              ))}
            </View>
            
            {/* Fourth Row - Google cards (filtered) */}
            <View style={styles.rewardsRow}>
              {googleSecondRow.map((reward) => (
                <RewardCardM
                  key={`google-${reward.id}`}
                  status={reward.status}
                  value={reward.value}
                  coinAmount={reward.coinAmount}
                  progress={reward.progress}
                  onPress={reward.status === 'default' ? handleDefaultCardPress : undefined}
                />
              ))}
            </View>
          </>
        ) : (
          <View style={styles.unavailableContainer}>
            <Image
              style={styles.unavailableImage}
              contentFit="contain"
              source={require("../assets/img-countrynotavailable.png")}
            />
            <Text style={styles.unavailableTitle}>
              Offers are currently unavailable in your region
            </Text>
            <Text style={styles.unavailableBody}>
              Please contact customer support for assistance
            </Text>
          </View>
        )}
      </ScrollView>
      <NavigationBar activeTab={activeTab} onTabPress={onTabPress} />
      
      {/* Giftcard Checkout Modal */}
      <Modal
        visible={showCheckoutPopup}
        transparent={true}
        animationType="none"
        onRequestClose={handleCloseCheckout}
      >
        <Animated.View 
          style={[
            styles.modalContainer,
            {
              transform: [{ translateX: slideAnim }],
            }
          ]}
        >
          <PopupGiftcardCheckout onClose={handleCloseCheckout} />
        </Animated.View>
      </Modal>
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
    paddingHorizontal: 16,
    alignItems: "center",
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  toggleText: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textWhite,
  },
  title: {
    fontSize: FontSize.fs_24,
    fontFamily: FontFamily.poppinsBold,
    color: Color.textWhite,
    marginBottom: 24,
    textAlign: "center",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    width: "100%",
  },
  playToUnlockButton: {
    width: 166,
    height: 40,
  },
  rewardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  unavailableContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  unavailableImage: {
    width: 260,
    height: 260,
    marginBottom: 24,
  },
  unavailableTitle: {
    fontSize: FontSize.fs_24,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.textWhite,
    textAlign: "center",
    marginBottom: 12,
  },
  unavailableBody: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textWhite,
    textAlign: "center",
    opacity: 0.8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Color.layoutPageBackground,
  },
});

export default RewardsScreen;
