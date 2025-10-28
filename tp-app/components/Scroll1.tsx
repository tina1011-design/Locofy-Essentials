import * as React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Modal, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Title from "./Title";
import GameCardLInstall from "./GameCardLInstall";
import GameCardLPlay from "./GameCardLPlay";
import GameCardLInstallFeatured from "./GameCardLInstallFeatured";
import GameCardS from "./GameCardS";
import GameCardXS from "./GameCardXS";
import EventCardMPlayEarn from "./EventCardMPlayEarn";
import EventCardInviteFriends from "./EventCardInviteFriends";
import QuestCardM from "./QuestCardM";
import ProgressStepper from "./ProgressStepper";
import { Width, Color, FontFamily, FontSize } from "../GlobalStyles";
import type { FTUEMode } from "../contexts/FTUEContext";

type ScrollType = {
  onShowWelcomeGift?: () => void;
  onShowRateUs?: () => void;
  onShowCheckoutSuccess?: () => void;
  onShowSignin?: () => void;
  onShowNeedHelp?: () => void;
  onShowFTUE?: () => void;
  onShowLuckyDraw?: () => void;
  mode?: FTUEMode;
  isFirstTimeUser?: boolean;
  isFTUETesting?: boolean;
  ftueCompleted?: boolean;
  onModeChange?: (mode: FTUEMode) => void;
  showWelcomeGiftsSection?: boolean;
  welcomeGiftsSectionAnim?: Animated.Value;
};

const Scroll = ({ onShowWelcomeGift, onShowRateUs, onShowCheckoutSuccess, onShowSignin, onShowNeedHelp, onShowFTUE, onShowLuckyDraw, mode = 'normal', isFirstTimeUser, isFTUETesting, ftueCompleted, onModeChange, showWelcomeGiftsSection = false, welcomeGiftsSectionAnim }: ScrollType) => {
  const [showModeDropdown, setShowModeDropdown] = React.useState(false);
  const [countdown, setCountdown] = React.useState(2 * 60 * 60); // 2 hours in seconds
  const shakeAnim = React.useRef(new Animated.Value(0)).current;
  
  React.useEffect(() => {
    console.log('Scroll - showWelcomeGiftsSection:', showWelcomeGiftsSection, 'isFTUETesting:', isFTUETesting, 'hasAnim:', !!welcomeGiftsSectionAnim);
    // Reset countdown when section first appears
    if (showWelcomeGiftsSection && isFTUETesting) {
      setCountdown(2 * 60 * 60);
    }
  }, [showWelcomeGiftsSection, isFTUETesting, welcomeGiftsSectionAnim]);
  
  // Countdown timer
  React.useEffect(() => {
    if (isFTUETesting && showWelcomeGiftsSection && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [isFTUETesting, showWelcomeGiftsSection, countdown]);
  
  // Shaking animation for QuestCardM
  React.useEffect(() => {
    if (isFTUETesting && showWelcomeGiftsSection) {
      const shakeAnimation = Animated.loop(
        Animated.sequence([
          Animated.delay(16000), // Wait 16 seconds
          Animated.timing(shakeAnim, {
            toValue: 4,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: -4,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: 4,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: -4,
            duration: 50,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
          }),
        ])
      );
      shakeAnimation.start();
      
      return () => shakeAnimation.stop();
    }
  }, [isFTUETesting, showWelcomeGiftsSection, shakeAnim]);
  
  // Format countdown as "Xh YYm"
  const formatCountdown = () => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    return `${hours}h${minutes.toString().padStart(2, '0')}m`;
  };
  
  const getModeLabel = () => {
    switch(mode) {
      case 'ftue': return 'FTUE Mode';
      case 'ftue-testing': return 'FTUE Testing Mode';
      default: return 'Normal Mode';
    }
  };
  
  const handleModeSelect = (selectedMode: FTUEMode) => {
    setShowModeDropdown(false);
    setCountdown(2 * 60 * 60); // Reset countdown to 2 hours
    if (onModeChange) {
      onModeChange(selectedMode);
    }
  };
  return (
    <View style={styles.scroll}>
      <View style={styles.topPicks}>
        {/* Mode Dropdown */}
        <TouchableOpacity 
          style={[styles.welcomeGiftButton, styles.modeDropdownButton]} 
          onPress={() => setShowModeDropdown(true)}
        >
          <Text style={styles.welcomeGiftText}>
            Mode: {getModeLabel()} ▼
          </Text>
        </TouchableOpacity>
        
        {/* Dropdown Modal */}
        <Modal
          visible={showModeDropdown}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowModeDropdown(false)}
        >
          <TouchableOpacity 
            style={styles.dropdownOverlay}
            activeOpacity={1}
            onPress={() => setShowModeDropdown(false)}
          >
            <View style={styles.dropdownMenu}>
              <TouchableOpacity 
                style={[styles.dropdownItem, mode === 'normal' && styles.dropdownItemSelected]}
                onPress={() => handleModeSelect('normal')}
              >
                <Text style={[styles.dropdownText, mode === 'normal' && styles.dropdownTextSelected]}>
                  Normal Mode
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.dropdownItem, mode === 'ftue' && styles.dropdownItemSelected]}
                onPress={() => handleModeSelect('ftue')}
              >
                <Text style={[styles.dropdownText, mode === 'ftue' && styles.dropdownTextSelected]}>
                  FTUE Mode
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.dropdownItem, mode === 'ftue-testing' && styles.dropdownItemSelected]}
                onPress={() => handleModeSelect('ftue-testing')}
              >
                <Text style={[styles.dropdownText, mode === 'ftue-testing' && styles.dropdownTextSelected]}>
                  FTUE Testing Mode
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
        <TouchableOpacity 
          style={styles.welcomeGiftButton} 
          onPress={onShowWelcomeGift}
        >
          <Text style={styles.welcomeGiftText}>Show Welcome Gift</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.welcomeGiftButton} 
          onPress={onShowRateUs}
        >
          <Text style={styles.welcomeGiftText}>Show Rate Us</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.welcomeGiftButton} 
          onPress={onShowCheckoutSuccess}
        >
          <Text style={styles.welcomeGiftText}>Show CheckOut Success</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.welcomeGiftButton} 
          onPress={onShowSignin}
        >
          <Text style={styles.welcomeGiftText}>Show Sign In with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.welcomeGiftButton} 
          onPress={onShowNeedHelp}
        >
          <Text style={styles.welcomeGiftText}>Show Need Help</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.welcomeGiftButton} 
          onPress={onShowFTUE}
        >
          <Text style={styles.welcomeGiftText}>Show FTUE</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.welcomeGiftButton} 
          onPress={onShowLuckyDraw}
        >
          <Text style={styles.welcomeGiftText}>Show LuckyDraw</Text>
        </TouchableOpacity>
        {!isFirstTimeUser && !isFTUETesting && (
          <>
            <Title text="Your Games" />
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.gameCardXSContainer}
              style={styles.gameCardXSScrollView}
            >
              <GameCardXS />
              <GameCardXS appIcon="appicon-designville" />
              <GameCardXS appIcon="appicon-mansiontale" showCountdown={false} />
              <GameCardXS showCountdown={false} />
              <GameCardXS showCountdown={false} />
              <GameCardXS showCountdown={false} />
              <GameCardXS showCountdown={false} />
            </ScrollView>
          </>
        )}
        
        {/* QuestCardM for FTUE Testing mode */}
        {isFTUETesting && showWelcomeGiftsSection && welcomeGiftsSectionAnim && (
          <Animated.View 
            style={[
              styles.welcomeGiftsSection,
              {
                opacity: welcomeGiftsSectionAnim,
                transform: [
                  {
                    translateY: welcomeGiftsSectionAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Title text="More Welcome Gifts awaits!" />
            <ProgressStepper currentStep={1} totalSteps={5} />
            <Animated.View 
              style={[
                styles.questCardContainer,
                {
                  transform: [{ translateX: shakeAnim }],
                }
              ]}
            >
              <TouchableOpacity onPress={onShowSignin} activeOpacity={0.8}>
                <QuestCardM 
                  property1="blue"
                  showProgressBar={false}
                  showIconCash={true}
                  progressWidth={50}
                  questTitle="Sign in with Google"
                  showButton={false}
                  coinValueColor="#4CAF50"
                  showCountdown={true}
                  countdownText={formatCountdown()}
                />
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        )}
        
        <Title text="Top Picks for you" />
        <View style={styles.gameCardsContainer}>
          {isFTUETesting ? (
            // FTUE Testing mode: Show only Featured card with "Install Game" title
            <GameCardLInstallFeatured
              property1="Install"
              valueIconSize1="M"
              valueIconShowIconCash1
              questTitle="Install Game"
            />
          ) : (
            // Normal mode: Show all three cards
            <>
              <GameCardLInstall
                property1="Install"
                valueIconSize1="M"
                valueIconShowIconCash1
              />
              <GameCardLInstall
                property1="Install"
                valueIconSize1="M"
                valueIconShowIconCash1
                bannerImage="Game-Banner-L-designvillie"
              />
              <GameCardLInstall
                property1="Install"
                valueIconSize1="M"
                valueIconShowIconCash1
                bannerImage="Game-Banner-L-mansiontale"
              />
            </>
          )}
        </View>
        
        {isFTUETesting ? (
          // FTUE Testing mode: 4x Puzzle first, then Play and Earn, then single Invite Friends
          <>
            <Title text="4x Puzzle" />
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScrollContainer}
              style={styles.horizontalScrollView}
            >
              <GameCardS
                valueIconProperty1="cash"
                valueIconValue1="2400"
                valueIconSize1="M"
                valueIconShowIconCash
              />
              <GameCardS
                valueIconProperty1="cash"
                valueIconValue1="1800"
                valueIconSize1="M"
                valueIconShowIconCash
              />
              <GameCardS
                valueIconProperty1="cash"
                valueIconValue1="3200"
                valueIconSize1="M"
                valueIconShowIconCash
              />
              <GameCardS
                valueIconProperty1="cash"
                valueIconValue1="1500"
                valueIconSize1="M"
                valueIconShowIconCash
              />
              <GameCardS
                valueIconProperty1="cash"
                valueIconValue1="2800"
                valueIconSize1="M"
                valueIconShowIconCash
              />
            </ScrollView>
            <Title text="Play and Earn" />
            <EventCardMPlayEarn />
            <Title text="Invite Friends" />
            <EventCardInviteFriends />
          </>
        ) : (
          // Normal mode: Original order with two Invite Friends cards
          <>
            <Title text="Play and Earn" />
            <EventCardMPlayEarn />
            <Title text="Invite Friends" />
            <EventCardInviteFriends />
            <View style={styles.inviteFriendsSpacing} />
            <EventCardInviteFriends bannerImage="banner-invitefriends-2" />
            <Title text="4x Puzzle" />
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScrollContainer}
              style={styles.horizontalScrollView}
            >
              <GameCardS
                valueIconProperty1="cash"
                valueIconValue1="2400"
                valueIconSize1="M"
                valueIconShowIconCash
              />
              <GameCardS
                valueIconProperty1="cash"
                valueIconValue1="1800"
                valueIconSize1="M"
                valueIconShowIconCash
              />
              <GameCardS
                valueIconProperty1="cash"
                valueIconValue1="3200"
                valueIconSize1="M"
                valueIconShowIconCash
              />
              <GameCardS
                valueIconProperty1="cash"
                valueIconValue1="1500"
                valueIconSize1="M"
                valueIconShowIconCash
              />
              <GameCardS
                valueIconProperty1="cash"
                valueIconValue1="2800"
                valueIconSize1="M"
                valueIconShowIconCash
              />
            </ScrollView>
          </>
        )}
        <Title text="Featured Quest" />
        <GameCardLPlay
          property1="Play"
          valueIconSize1="M"
          valueIconShowIconCash1
        />
        <View style={styles.featuredQuestSpacing} />
        <GameCardLInstallFeatured
          property1="Install"
          valueIconSize1="M"
          valueIconShowIconCash1
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    zIndex: 1,
  },
  topPicks: {
    alignSelf: "stretch",
    alignItems: "center",
    paddingTop: 120,
  },
  gameCardsContainer: {
    gap: 16,
    alignItems: "center",
  },
  questCardContainer: {
    width: 362,
    alignSelf: "center",
  },
  welcomeGiftsSection: {
    backgroundColor: "#2D3A8E",
    paddingVertical: 16,
    marginBottom: 16,
    width: "100%",
  },
  horizontalScrollView: {
    width: "100%",
  },
  horizontalScrollContainer: {
    gap: 12,
    paddingLeft: 16,
    paddingRight: 0,
    alignItems: "center",
  },
  gameCardXSScrollView: {
    width: "100%",
  },
  gameCardXSContainer: {
    flexDirection: "row",
    gap: 12,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
  },
  featuredQuestSpacing: {
    height: 16,
  },
  inviteFriendsSpacing: {
    height: 16,
  },
  welcomeGiftButton: {
    alignSelf: "flex-start",
    paddingLeft: 16,
    paddingBottom: 8,
  },
  welcomeGiftText: {
    fontSize: FontSize.fs_12,
    color: "#A8B1FF",
    fontFamily: FontFamily.poppinsMedium,
    textDecorationLine: "underline",
  },
  modeDropdownButton: {
    backgroundColor: "rgba(168, 177, 255, 0.1)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 4,
  },
  dropdownOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownMenu: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    minWidth: 250,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  dropdownItemSelected: {
    backgroundColor: "#8897D9",
  },
  dropdownText: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsMedium,
    color: "#333333",
    textAlign: "center",
  },
  dropdownTextSelected: {
    color: "#FFFFFF",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
});

export default Scroll;
