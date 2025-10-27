import * as React from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Modal, Animated, Dimensions } from "react-native";
import Header from "../components/Header";
import Scroll from "../components/Scroll1";
import NavigationBar from "../components/NavigationBar";
import RewardsScreen from "./RewardsScreen";
import ProfileScreen from "./ProfileScreen";
import TransactionHistoryScreen from "./TransactionHistoryScreen";
import PopupWelcomeGift from "./PopupWelcomeGift";
import PopupRateus from "./PopupRateus";
import PopupCheckoutSuccess from "./PopupCheckoutSuccess";
import PopupSigninwithgoogle from "./PopupSigninwithgoogle";
import PopupNeedHelp from "./PopupNeedHelp";
import PopupValueProposition from "./PopupValueProposition";
import { useFTUE } from "../contexts/FTUEContext";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HomeGamesFeedScreen = () => {
  const { isFirstTimeUser, ftueCompleted, setIsFirstTimeUser, setFtueCompleted, setQuestsFeedVisited, setQuestsFeedFtueCompleted, setProfileFtueCompleted } = useFTUE();
  const [activeTab, setActiveTab] = React.useState<'games' | 'rewards' | 'profile'>('games');
  const [showTransactionHistory, setShowTransactionHistory] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(SCREEN_WIDTH)).current;
  const [showWelcomeGiftPopup, setShowWelcomeGiftPopup] = React.useState(false);
  const [showRateUsPopup, setShowRateUsPopup] = React.useState(false);
  const [showCheckoutSuccessPopup, setShowCheckoutSuccessPopup] = React.useState(false);
  const [showSigninPopup, setShowSigninPopup] = React.useState(false);
  const [showNeedHelpPopup, setShowNeedHelpPopup] = React.useState(false);
  const [showFTUEPopup, setShowFTUEPopup] = React.useState(false);
  
  // Balance state
  const [coinBalance, setCoinBalance] = React.useState(0);
  const [cashBalance, setCashBalance] = React.useState(0);
  const [welcomeGiftTimestamp, setWelcomeGiftTimestamp] = React.useState<Date | undefined>(undefined);

  const handleTabPress = (tab: 'games' | 'rewards' | 'profile') => {
    setActiveTab(tab);
    console.log(`Switched to ${tab} tab`);
  };

  const handleShowWelcomeGift = () => {
    setShowWelcomeGiftPopup(true);
  };

  const handleCloseWelcomeGift = () => {
    setShowWelcomeGiftPopup(false);
  };

  const handleShowRateUs = () => {
    setShowRateUsPopup(true);
  };

  const handleCloseRateUs = () => {
    setShowRateUsPopup(false);
  };

  const handleShowCheckoutSuccess = () => {
    setShowCheckoutSuccessPopup(true);
  };

  const handleCloseCheckoutSuccess = () => {
    setShowCheckoutSuccessPopup(false);
  };

  const handleShowSignin = () => {
    setShowSigninPopup(true);
  };

  const handleCloseSignin = () => {
    setShowSigninPopup(false);
  };

  const handleShowNeedHelp = () => {
    setShowNeedHelpPopup(true);
  };

  const handleCloseNeedHelp = () => {
    setShowNeedHelpPopup(false);
  };

  const handleShowFTUE = () => {
    setShowFTUEPopup(true);
  };

  const handleCloseFTUE = () => {
    setShowFTUEPopup(false);
  };

  // FTUE: Auto-open value proposition on first load
  React.useEffect(() => {
    if (isFirstTimeUser && !ftueCompleted) {
      setShowFTUEPopup(true);
    }
  }, [isFirstTimeUser, ftueCompleted]);

  // FTUE: Handle value proposition close -> open welcome gift
  const handleCloseFTUEFlow = () => {
    setShowFTUEPopup(false);
    if (isFirstTimeUser && !ftueCompleted) {
      // Auto-open welcome gift after value proposition closes
      setTimeout(() => {
        setShowWelcomeGiftPopup(true);
      }, 300);
    }
  };

  // FTUE: Handle welcome gift close -> animate coins
  const handleCloseWelcomeGiftFlow = () => {
    setShowWelcomeGiftPopup(false);
    if (isFirstTimeUser && !ftueCompleted) {
      // Record the timestamp when welcome gift is received
      setWelcomeGiftTimestamp(new Date());
      // Animate coin balance from 0 to 100
      animateCoinBalance();
      setFtueCompleted(true);
    }
  };

  // Animate coin balance
  const animateCoinBalance = () => {
    const duration = 1500; // 1.5 seconds
    const steps = 50;
    const increment = 100 / steps;
    const interval = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setCoinBalance(100);
        clearInterval(timer);
      } else {
        setCoinBalance(Math.round(current));
      }
    }, interval);
  };

  // Toggle FTUE mode for demo
  const toggleFTUEMode = () => {
    const newMode = !isFirstTimeUser;
    setIsFirstTimeUser(newMode);
    if (newMode) {
      // Reset for FTUE
      setCoinBalance(0);
      setCashBalance(0);
      setFtueCompleted(false);
      setQuestsFeedVisited(false);
      setQuestsFeedFtueCompleted(false);
      setProfileFtueCompleted(false);
      setWelcomeGiftTimestamp(undefined);
    } else {
      // Set normal values
      setCoinBalance(1200);
      setCashBalance(5000);
    }
  };

  React.useEffect(() => {
    if (showTransactionHistory) {
      // Slide in from right
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [showTransactionHistory]);

  const handleNavigateToTransactionHistory = () => {
    setShowTransactionHistory(true);
  };

  const handleBackFromTransactionHistory = () => {
    // Slide out to right
    Animated.timing(slideAnim, {
      toValue: SCREEN_WIDTH,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setShowTransactionHistory(false);
      slideAnim.setValue(SCREEN_WIDTH); // Reset position
    });
  };

  const renderCurrentScreen = () => {
    switch (activeTab) {
      case 'rewards':
        return <RewardsScreen activeTab={activeTab} onTabPress={handleTabPress} coinBalance={coinBalance} cashBalance={cashBalance} isFirstTimeUser={isFirstTimeUser} />;
      case 'profile':
        return (
          <ProfileScreen 
            activeTab={activeTab} 
            onTabPress={handleTabPress} 
            onNavigateToTransactionHistory={handleNavigateToTransactionHistory}
            isFirstTimeUser={isFirstTimeUser}
          />
        );
      case 'games':
      default:
        return (
          <View style={styles.container}>
            <Header coinBalance={coinBalance} cashBalance={cashBalance} />
            <ScrollView
              style={styles.homeGamesFeedScreen}
              contentContainerStyle={styles.homeGamesFeedScreenScrollViewContent}
            >
              <Scroll 
                onShowWelcomeGift={handleShowWelcomeGift} 
                onShowRateUs={handleShowRateUs}
                onShowCheckoutSuccess={handleShowCheckoutSuccess}
                onShowSignin={handleShowSignin}
                onShowNeedHelp={handleShowNeedHelp}
                onShowFTUE={handleShowFTUE}
                isFirstTimeUser={isFirstTimeUser}
                ftueCompleted={ftueCompleted}
                onToggleFTUE={toggleFTUEMode}
              />
            </ScrollView>
            <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />
            <Modal
              visible={showWelcomeGiftPopup}
              transparent={true}
              animationType="fade"
              onRequestClose={isFirstTimeUser && !ftueCompleted ? handleCloseWelcomeGiftFlow : handleCloseWelcomeGift}
            >
              <TouchableOpacity 
                style={styles.modalOverlay} 
                activeOpacity={1} 
                onPress={isFirstTimeUser && !ftueCompleted ? handleCloseWelcomeGiftFlow : handleCloseWelcomeGift}
              >
                <PopupWelcomeGift 
                  onClose={isFirstTimeUser && !ftueCompleted ? handleCloseWelcomeGiftFlow : handleCloseWelcomeGift} 
                  coinValue={isFirstTimeUser && !ftueCompleted ? 100 : 1000}
                />
              </TouchableOpacity>
            </Modal>
            <Modal
              visible={showRateUsPopup}
              transparent={true}
              animationType="fade"
              onRequestClose={handleCloseRateUs}
            >
              <TouchableOpacity 
                style={styles.modalOverlay} 
                activeOpacity={1} 
                onPress={handleCloseRateUs}
              >
                <PopupRateus onClose={handleCloseRateUs} />
              </TouchableOpacity>
            </Modal>
            <Modal
              visible={showCheckoutSuccessPopup}
              transparent={true}
              animationType="fade"
              onRequestClose={handleCloseCheckoutSuccess}
            >
              <TouchableOpacity 
                style={styles.modalOverlay} 
                activeOpacity={1} 
                onPress={handleCloseCheckoutSuccess}
              >
                <PopupCheckoutSuccess 
                  onClose={handleCloseCheckoutSuccess} 
                  onNavigateToTransactionHistory={handleNavigateToTransactionHistory}
                />
              </TouchableOpacity>
            </Modal>
            <Modal
              visible={showSigninPopup}
              transparent={true}
              animationType="fade"
              onRequestClose={handleCloseSignin}
            >
              <View style={styles.modalOverlay}>
                <PopupSigninwithgoogle onClose={handleCloseSignin} />
              </View>
            </Modal>
            <Modal
              visible={showNeedHelpPopup}
              transparent={true}
              animationType="fade"
              onRequestClose={handleCloseNeedHelp}
            >
              <TouchableOpacity 
                style={styles.modalOverlay} 
                activeOpacity={1} 
                onPress={handleCloseNeedHelp}
              >
                <PopupNeedHelp onClose={handleCloseNeedHelp} />
              </TouchableOpacity>
            </Modal>
            <Modal
              visible={showFTUEPopup}
              transparent={true}
              animationType="fade"
              onRequestClose={isFirstTimeUser && !ftueCompleted ? handleCloseFTUEFlow : handleCloseFTUE}
            >
              <TouchableOpacity 
                style={styles.modalOverlay} 
                activeOpacity={1} 
                onPress={isFirstTimeUser && !ftueCompleted ? handleCloseFTUEFlow : handleCloseFTUE}
              >
                <PopupValueProposition version="games" onClose={isFirstTimeUser && !ftueCompleted ? handleCloseFTUEFlow : handleCloseFTUE} />
              </TouchableOpacity>
            </Modal>
          </View>
        );
    }
  };

  return (
    <View style={styles.screenContainer}>
      {renderCurrentScreen()}
      {showTransactionHistory && (
        <Animated.View 
          style={[
            styles.animatedContainer,
            { 
              transform: [{ translateX: slideAnim }],
              zIndex: 1000,
            }
          ]}
        >
          <TransactionHistoryScreen 
            activeTab={activeTab} 
            onTabPress={(tab) => {
              handleBackFromTransactionHistory();
              setTimeout(() => handleTabPress(tab), 250);
            }}
            onBack={handleBackFromTransactionHistory}
            coinBalance={coinBalance}
            cashBalance={cashBalance}
            isFirstTimeUser={isFirstTimeUser}
            welcomeGiftTimestamp={welcomeGiftTimestamp}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.layoutPageBackground,
  },
  homeGamesFeedScreenScrollViewContent: {
    flexDirection: "column",
    paddingTop: 36,
    paddingBottom: 100, // Increased to account for navigation bar
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 40,
    width: "100%",
  },
  homeGamesFeedScreen: {
    width: "100%",
    backgroundColor: Color.layoutPageBackground,
    flex: 1,
    maxWidth: "100%",
    paddingBottom: 80, // Add bottom padding to prevent overlap
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(32, 20, 59, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  animatedContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: Color.layoutPageBackground,
  },
  screenContainer: {
    flex: 1,
    position: "relative",
  },
});

export default HomeGamesFeedScreen;
