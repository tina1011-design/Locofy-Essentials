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
import PopupLuckyDrawWheel from "./PopupLuckyDrawWheel";
import PopupFTUETesting1 from "./PopupFTUETesting1";
import PopupFTUETesting2 from "./PopupFTUETesting2";
import PopupFTUETestingLoading from "./PopupFTUETestingLoading";
import PopupFTUETestingProgress from "./PopupFTUETestingProgress";
import { useFTUE } from "../contexts/FTUEContext";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HomeGamesFeedScreen = () => {
  const { 
    mode, 
    isFirstTimeUser, 
    isFTUETesting, 
    ftueCompleted, 
    setMode, 
    setIsFirstTimeUser, 
    setIsFTUETesting, 
    setFtueCompleted, 
    setQuestsFeedVisited, 
    setQuestsFeedFtueCompleted, 
    setProfileFtueCompleted 
  } = useFTUE();
  const [activeTab, setActiveTab] = React.useState<'games' | 'rewards' | 'profile'>('games');
  const [showTransactionHistory, setShowTransactionHistory] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(SCREEN_WIDTH)).current;
  const [showWelcomeGiftPopup, setShowWelcomeGiftPopup] = React.useState(false);
  const [showRateUsPopup, setShowRateUsPopup] = React.useState(false);
  const [showCheckoutSuccessPopup, setShowCheckoutSuccessPopup] = React.useState(false);
  const [showSigninPopup, setShowSigninPopup] = React.useState(false);
  const [showNeedHelpPopup, setShowNeedHelpPopup] = React.useState(false);
  const [showFTUEPopup, setShowFTUEPopup] = React.useState(false);
  const [showLuckyDrawPopup, setShowLuckyDrawPopup] = React.useState(false);
  
  // FTUE Testing flow state
  const [showFTUETesting1, setShowFTUETesting1] = React.useState(false);
  const [showFTUETesting2, setShowFTUETesting2] = React.useState(false);
  const [showFTUETestingLoading, setShowFTUETestingLoading] = React.useState(false);
  const [showFTUETestingProgress, setShowFTUETestingProgress] = React.useState(false);
  const [showWelcomeGiftsSection, setShowWelcomeGiftsSection] = React.useState(false);
  const welcomeGiftsSectionAnim = React.useRef(new Animated.Value(0)).current;
  
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
    console.log('handleCloseFTUE - isFTUETesting:', isFTUETesting, 'ftueCompleted:', ftueCompleted);
    setShowFTUEPopup(false);
    // In FTUE Testing mode, after ftueCompleted is true and popup closes, show welcome gifts section
    if (isFTUETesting && ftueCompleted) {
      console.log('Showing Welcome Gifts section after Value Proposition close');
      setTimeout(() => {
        setShowWelcomeGiftsSection(true);
        // Slide and fade in animation
        Animated.timing(welcomeGiftsSectionAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 300);
    }
  };

  const handleShowLuckyDraw = () => {
    setShowLuckyDrawPopup(true);
  };

  const handleCloseLuckyDraw = () => {
    setShowLuckyDrawPopup(false);
  };

  // FTUE Testing flow handlers
  const handleFTUETesting1Next = () => {
    setShowFTUETesting1(false);
    setTimeout(() => {
      setShowFTUETesting2(true);
    }, 300);
  };

  const handleFTUETesting2Select = (card: string) => {
    console.log('Selected gift card:', card);
    setShowFTUETesting2(false);
    setTimeout(() => {
      setShowFTUETestingLoading(true);
    }, 300);
  };

  const handleFTUETestingLoadingComplete = () => {
    setShowFTUETestingLoading(false);
    // Open welcome gift popup
    setTimeout(() => {
      setShowWelcomeGiftPopup(true);
    }, 300);
  };

  const handleFTUETestingWelcomeGiftClose = () => {
    setShowWelcomeGiftPopup(false);
    // Record the timestamp when welcome gift is received
    setWelcomeGiftTimestamp(new Date());
    // Animate coin balance from 0 to 100
    animateCoinBalance();
    setFtueCompleted(true);
  };

  const handleFTUETestingProgressClose = () => {
    setShowFTUETestingProgress(false);
    // Auto-open Value Proposition popup after progress screen
    setTimeout(() => {
      setShowFTUEPopup(true);
    }, 300);
  };

  // FTUE: Auto-open value proposition or testing flow on first load
  React.useEffect(() => {
    if (isFTUETesting && !ftueCompleted) {
      // Start FTUE Testing flow
      setShowFTUETesting1(true);
    } else if (isFirstTimeUser && !ftueCompleted) {
      // Start regular FTUE flow
      setShowFTUEPopup(true);
    }
  }, [isFirstTimeUser, isFTUETesting, ftueCompleted]);

  // FTUE: Handle value proposition close -> open welcome gift (for initial FTUE flow)
  const handleCloseFTUEFlow = () => {
    console.log('handleCloseFTUEFlow - isFTUETesting:', isFTUETesting, 'ftueCompleted:', ftueCompleted);
    setShowFTUEPopup(false);
    // This is only called when ftueCompleted is false (initial FTUE flow)
    if ((isFirstTimeUser || isFTUETesting) && !ftueCompleted) {
      // Auto-open welcome gift after value proposition closes
      console.log('Opening welcome gift popup');
      setTimeout(() => {
        setShowWelcomeGiftPopup(true);
      }, 300);
    }
  };

  // FTUE: Handle welcome gift close -> animate coins
  const handleCloseWelcomeGiftFlow = () => {
    setShowWelcomeGiftPopup(false);
    if ((isFirstTimeUser || isFTUETesting) && !ftueCompleted) {
      // Record the timestamp when welcome gift is received
      setWelcomeGiftTimestamp(new Date());
      // Animate coin balance from 0 to 100
      animateCoinBalance();
      setFtueCompleted(true);
    }
  };

  // Animate coin balance
  const animateCoinBalance = () => {
    // Faster animation for FTUE Testing mode
    const duration = isFTUETesting ? 800 : 1500; // 0.8 seconds for testing, 1.5 for normal
    const steps = 50;
    const increment = 100 / steps;
    const interval = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setCoinBalance(100);
        clearInterval(timer);
        
        // For FTUE Testing mode, show progress popup after coin animation
        if (isFTUETesting) {
          setTimeout(() => {
            setShowFTUETestingProgress(true);
          }, 500);
        }
      } else {
        setCoinBalance(Math.round(current));
      }
    }, interval);
  };

  // Toggle FTUE mode for demo
  const handleModeChange = (newMode: 'normal' | 'ftue' | 'ftue-testing') => {
    setMode(newMode);
    
    if (newMode === 'ftue') {
      // FTUE Mode
      setIsFirstTimeUser(true);
      setIsFTUETesting(false);
      setCoinBalance(0);
      setCashBalance(0);
      setFtueCompleted(false);
      setQuestsFeedVisited(false);
      setQuestsFeedFtueCompleted(false);
      setProfileFtueCompleted(false);
      setWelcomeGiftTimestamp(undefined);
      setShowWelcomeGiftsSection(false);
      welcomeGiftsSectionAnim.setValue(0);
    } else if (newMode === 'ftue-testing') {
      // FTUE Testing Mode (same as FTUE but separate tracking)
      setIsFirstTimeUser(false);
      setIsFTUETesting(true);
      setCoinBalance(0);
      setCashBalance(0);
      setFtueCompleted(false);
      setQuestsFeedVisited(false);
      setQuestsFeedFtueCompleted(false);
      setProfileFtueCompleted(false);
      setWelcomeGiftTimestamp(undefined);
      setShowWelcomeGiftsSection(false);
      welcomeGiftsSectionAnim.setValue(0);
    } else {
      // Normal Mode
      setIsFirstTimeUser(false);
      setIsFTUETesting(false);
      setCoinBalance(1200);
      setCashBalance(5000);
      setShowWelcomeGiftsSection(false);
      welcomeGiftsSectionAnim.setValue(0);
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
                onShowLuckyDraw={handleShowLuckyDraw}
                mode={mode}
                isFirstTimeUser={isFirstTimeUser}
                isFTUETesting={isFTUETesting}
                ftueCompleted={ftueCompleted}
                onModeChange={handleModeChange}
                showWelcomeGiftsSection={showWelcomeGiftsSection}
                welcomeGiftsSectionAnim={welcomeGiftsSectionAnim}
              />
            </ScrollView>
            <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />
            <Modal
              visible={showWelcomeGiftPopup}
              transparent={true}
              animationType="fade"
              onRequestClose={
                isFTUETesting && !ftueCompleted 
                  ? handleFTUETestingWelcomeGiftClose 
                  : (isFirstTimeUser && !ftueCompleted ? handleCloseWelcomeGiftFlow : handleCloseWelcomeGift)
              }
            >
              <TouchableOpacity 
                style={styles.modalOverlay} 
                activeOpacity={1} 
                onPress={
                  isFTUETesting && !ftueCompleted 
                    ? handleFTUETestingWelcomeGiftClose 
                    : (isFirstTimeUser && !ftueCompleted ? handleCloseWelcomeGiftFlow : handleCloseWelcomeGift)
                }
              >
                <PopupWelcomeGift 
                  onClose={
                    isFTUETesting && !ftueCompleted 
                      ? handleFTUETestingWelcomeGiftClose 
                      : (isFirstTimeUser && !ftueCompleted ? handleCloseWelcomeGiftFlow : handleCloseWelcomeGift)
                  }
                  coinValue={(isFirstTimeUser || isFTUETesting) && !ftueCompleted ? 100 : 1000}
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
              onRequestClose={(isFirstTimeUser || isFTUETesting) && !ftueCompleted ? handleCloseFTUEFlow : handleCloseFTUE}
            >
              <TouchableOpacity 
                style={styles.modalOverlay} 
                activeOpacity={1} 
                onPress={(isFirstTimeUser || isFTUETesting) && !ftueCompleted ? handleCloseFTUEFlow : handleCloseFTUE}
              >
                <PopupValueProposition version="games" onClose={(isFirstTimeUser || isFTUETesting) && !ftueCompleted ? handleCloseFTUEFlow : handleCloseFTUE} />
              </TouchableOpacity>
            </Modal>
            <Modal
              visible={showLuckyDrawPopup}
              transparent={true}
              animationType="fade"
              onRequestClose={handleCloseLuckyDraw}
            >
              <TouchableOpacity 
                style={styles.modalOverlay} 
                activeOpacity={1} 
                onPress={handleCloseLuckyDraw}
              >
                <PopupLuckyDrawWheel onClose={handleCloseLuckyDraw} />
              </TouchableOpacity>
            </Modal>
            
            {/* FTUE Testing Popups */}
            <PopupFTUETesting1 
              visible={showFTUETesting1}
              onNext={handleFTUETesting1Next}
            />
            <PopupFTUETesting2 
              visible={showFTUETesting2}
              onSelectGiftCard={handleFTUETesting2Select}
            />
            <PopupFTUETestingLoading 
              visible={showFTUETestingLoading}
              onComplete={handleFTUETestingLoadingComplete}
            />
            <PopupFTUETestingProgress
              visible={showFTUETestingProgress}
              onClose={handleFTUETestingProgressClose}
            />
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
