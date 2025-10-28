import * as React from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Alert, Clipboard, Modal } from "react-native";
import { Image } from "expo-image";
import { useFocusEffect } from "@react-navigation/native";
import NavigationBar from "../components/NavigationBar";
import QuestCardMInvite from "../components/QuestCardMInvite";
import GameIconCard from "../components/GameIconCard";
import GameDataValueIcon from "../components/GameDataValueIcon";
import RewardCardXS from "../components/RewardCardXS";
import BtnSigninwithgoogle from "../components/BtnSigninwithgoogle";
import PopupSigninwithgoogle from "./PopupSigninwithgoogle";
import PopupValueProposition from "./PopupValueProposition";
import PopupYourReferrals from "./PopupYourReferrals";
import { useFTUE } from "../contexts/FTUEContext";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

interface ProfileScreenProps {
  activeTab: 'games' | 'rewards' | 'profile';
  onTabPress: (tab: 'games' | 'rewards' | 'profile') => void;
  onNavigateToTransactionHistory?: () => void;
  isFirstTimeUser?: boolean;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ activeTab, onTabPress, onNavigateToTransactionHistory, isFirstTimeUser }) => {
  const { isFTUETesting, profileFtueCompleted, setProfileFtueCompleted } = useFTUE();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [activityTrackingEnabled, setActivityTrackingEnabled] = React.useState(true);
  const [showSigninPopup, setShowSigninPopup] = React.useState(false);
  const [showValuePropositionPopup, setShowValuePropositionPopup] = React.useState(false);
  const [showYourReferralsPopup, setShowYourReferralsPopup] = React.useState(false);

  // Auto-open FTUE popup when visiting Profile for the first time in FTUE mode or FTUE Testing mode
  useFocusEffect(
    React.useCallback(() => {
      console.log('Profile focused - FTUE check:', { isFirstTimeUser, isFTUETesting, profileFtueCompleted });
      if ((isFirstTimeUser || isFTUETesting) && !profileFtueCompleted && activeTab === 'profile') {
        console.log('Opening FTUE popup in Profile');
        // Use timeout to ensure screen is fully mounted
        setTimeout(() => {
          setShowValuePropositionPopup(true);
          setProfileFtueCompleted(true);
        }, 100);
      }
    }, [isFirstTimeUser, isFTUETesting, profileFtueCompleted, activeTab])
  );

  const handleCopyLink = () => {
    Clipboard.setString("http://xxx.xx");
    Alert.alert("Copied!", "Referral link has been copied to clipboard");
  };

  const handleSigninPress = () => {
    setShowSigninPopup(true);
  };

  const handleCloseSigninPopup = () => {
    setShowSigninPopup(false);
  };

  const handleInfoBoxPress = () => {
    setShowValuePropositionPopup(true);
  };

  const handleCloseValuePropositionPopup = () => {
    setShowValuePropositionPopup(false);
  };

  const handleMedalsBoxPress = () => {
    setShowYourReferralsPopup(true);
  };

  const handleCloseYourReferralsPopup = () => {
    setShowYourReferralsPopup(false);
  };

  const handleTransactionHistoryPress = () => {
    if (onNavigateToTransactionHistory) {
      onNavigateToTransactionHistory();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.section}>
          <View style={styles.userNameRow}>
            {isFTUETesting && (
              <Image
                style={styles.avatarFrame}
                contentFit="contain"
                source={require("../assets/Header-avatar-frame.png")}
              />
            )}
            <Text style={styles.userNameTitle}>
              {isFTUETesting ? "adventurer#12ab1" : "User Name"}
            </Text>
            {isFTUETesting && (
              <TouchableOpacity 
                style={styles.signInButton}
                onPress={handleSigninPress}
                activeOpacity={0.8}
              >
                <Text style={styles.signInButtonText}>Sign in</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        
        {!isFirstTimeUser && !isFTUETesting && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Adventures</Text>
            <View style={styles.gameCardListContainer}>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalScrollContent}
              >
                <GameIconCard />
                <GameIconCard />
                <GameIconCard />
                <GameIconCard />
                <GameIconCard />
              </ScrollView>
            </View>
          </View>
        )}
        
        {isFTUETesting && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Adventures</Text>
            <View style={styles.noAdventuresContainer}>
              <Text style={styles.noAdventuresText}>No adventures yet</Text>
              <TouchableOpacity 
                style={styles.startGameButton}
                onPress={() => onTabPress('games')}
                activeOpacity={0.8}
              >
                <Text style={styles.startGameButtonText}>Start your first game</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        
        <Text style={styles.inviteTitle}>Invite your friends and earn together!</Text>
        
        <View style={styles.inviteButtonRow}>
          <Image
            style={styles.coinImage}
            contentFit="cover"
            source={require("../assets/profile-coin-left.png")}
          />
          <TouchableOpacity style={styles.inviteButton} activeOpacity={0.8}>
            <Image
              style={styles.inviteButtonImage}
              contentFit="cover"
              source={require("../assets/btn-inviteandearn.png")}
            />
          </TouchableOpacity>
          <Image
            style={styles.coinImage}
            contentFit="cover"
            source={require("../assets/profile-coin-right.png")}
          />
        </View>
        
        <View style={styles.gameDataRowLarge}>
          <View style={styles.componentContainer}>
            <GameDataValueIcon 
              property1="invite"
              size="L"
              value={(isFirstTimeUser || isFTUETesting) ? "0" : "8"}
              showIconCash={true}
            />
          </View>
          <View style={styles.divider} />
          <TouchableOpacity 
            style={styles.componentContainer}
            onPress={handleMedalsBoxPress}
            activeOpacity={0.8}
          >
            <GameDataValueIcon 
              property1="medal"
              size="L"
              value={(isFirstTimeUser || isFTUETesting) ? "0" : "25"}
              showIconCash={true}
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.labelsRow}>
          <Text style={styles.leftLabel}>Accepted Invites</Text>
          <Text style={styles.rightLabel}>Medals Earned</Text>
        </View>
        
        <QuestCardMInvite 
          property1="blue"
          showProgressBar={true}
          progressWidth={30}
        />
        
        <View style={styles.rewardCardsContainer}>
          <View style={styles.rewardCardsRow}>
            <RewardCardXS state={(isFirstTimeUser || isFTUETesting) ? "default" : "completed"} medalValue="1" rewardValue="100" />
            <RewardCardXS state={(isFirstTimeUser || isFTUETesting) ? "default" : "ready-to-claim"} medalValue="3" rewardValue="200" />
            <RewardCardXS state={isFTUETesting ? "default" : undefined} medalValue="5" rewardValue="320" />
            <RewardCardXS state={isFTUETesting ? "default" : undefined} medalValue="15" rewardValue="480" />
          </View>
          <View style={styles.rewardCardsRow}>
            <RewardCardXS state={isFTUETesting ? "default" : undefined} medalValue="20" rewardValue="800" />
            <RewardCardXS state={isFTUETesting ? "default" : undefined} medalValue="25" rewardValue="1600" />
            <RewardCardXS state={isFTUETesting ? "default" : undefined} medalValue="30" rewardValue="2400" />
            <RewardCardXS state={isFTUETesting ? "default" : undefined} medalValue="35" rewardValue="3600" />
          </View>
        </View>
        
        <TouchableOpacity style={styles.infoDialog} onPress={handleInfoBoxPress} activeOpacity={0.8}>
          <View style={styles.infoLeftSection}>
            <Image
              style={styles.infoImage}
              contentFit="cover"
              source={require("../assets/img-info.png")}
            />
          </View>
          <View style={styles.infoRightSection}>
            <Text style={styles.infoSubtitle}>The more your friend play, the more you earn</Text>
            <Text style={styles.infoParagraph}>Only users who install Treasure Play through your referral link will count as referrals.</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.section}>
          <View style={styles.settingsDivider} />
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.settingsCard}>
            <View style={styles.labelContainer}>
              <Image
                style={styles.notificationIcon}
                contentFit="cover"
                source={require("../assets/icon-notifications.png")}
              />
              <Text style={styles.settingsLabel}>Notifications</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.customSwitch,
                { backgroundColor: notificationsEnabled ? "#55C968" : "#767577" }
              ]}
              onPress={() => setNotificationsEnabled(!notificationsEnabled)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.switchThumb,
                  { transform: [{ translateX: notificationsEnabled ? 20 : 2 }] }
                ]}
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.settingsCard}>
            <View style={styles.labelContainer}>
              <Image
                style={styles.notificationIcon}
                contentFit="cover"
                source={require("../assets/icon-activity.png")}
              />
              <Text style={styles.settingsLabel}>Activity Tracking</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.customSwitch,
                { backgroundColor: activityTrackingEnabled ? "#55C968" : "#767577" }
              ]}
              onPress={() => setActivityTrackingEnabled(!activityTrackingEnabled)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.switchThumb,
                  { transform: [{ translateX: activityTrackingEnabled ? 20 : 2 }] }
                ]}
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.referralCard}>
            <View style={styles.referralTopRow}>
              <View style={styles.labelContainer}>
                <Image
                  style={styles.notificationIcon}
                  contentFit="cover"
                  source={require("../assets/icon-avatar.png")}
                />
                <Text style={styles.settingsLabel}>Your referral link</Text>
              </View>
              <TouchableOpacity style={styles.copyButton} activeOpacity={0.8} onPress={handleCopyLink}>
                <Image
                  style={styles.copyIcon}
                  contentFit="cover"
                  source={require("../assets/btn-copy.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.urlField}>
              <Text style={styles.urlText}>http://xxx.xx</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.settingsCard} onPress={handleTransactionHistoryPress} activeOpacity={0.8}>
            <View style={styles.labelContainer}>
              <Image
                style={styles.notificationIcon}
                contentFit="cover"
                source={require("../assets/icon-transactionhistory.png")}
              />
              <Text style={styles.settingsLabel}>Transaction History</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrowText}>›</Text>
            </View>
          </TouchableOpacity>
          
          <View style={styles.settingsCard}>
            <View style={styles.labelContainer}>
              <Image
                style={styles.notificationIcon}
                contentFit="cover"
                source={require("../assets/icon-contactsupport.png")}
              />
              <Text style={styles.settingsLabel}>Contact Support</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
            <Image
              style={styles.logoutImage}
              contentFit="cover"
              source={require("../assets/btn-logout.png")}
            />
          </TouchableOpacity>
          
          <View style={styles.signinButtonContainer}>
            <BtnSigninwithgoogle onPress={handleSigninPress} />
          </View>
        </View>
        
      </ScrollView>
      
      <NavigationBar activeTab={activeTab} onTabPress={onTabPress} />
      
      <Modal
        visible={showSigninPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseSigninPopup}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={handleCloseSigninPopup}
        >
          <PopupSigninwithgoogle onClose={handleCloseSigninPopup} />
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={showValuePropositionPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseValuePropositionPopup}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={handleCloseValuePropositionPopup}
        >
          <PopupValueProposition onClose={handleCloseValuePropositionPopup} version="profile" />
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={showYourReferralsPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseYourReferralsPopup}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity 
            style={StyleSheet.absoluteFillObject}
            activeOpacity={1} 
            onPress={handleCloseYourReferralsPopup}
          />
          <PopupYourReferrals onClose={handleCloseYourReferralsPopup} isFirstTimeUser={isFirstTimeUser} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F2FF",
  },
  content: {
    flex: 1,
    paddingHorizontal: Padding.padding_16,
  },
  scrollContent: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 24,
  },
  avatarFrame: {
    width: 40,
    height: 40,
  },
  userNameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  horizontalScrollContent: {
    paddingHorizontal: 0,
    paddingLeft: 20,
    paddingRight: 20,
    gap: 12,
  },
  gameCardListContainer: {
    backgroundColor: "#D8DFFA",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#949AD2",
    borderBottomColor: "#949AD2",
    paddingVertical: 16,
    marginHorizontal: -20,
  },
  noAdventuresContainer: {
    backgroundColor: "#D8DFFA",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#949AD2",
    borderBottomColor: "#949AD2",
    paddingVertical: 40,
    marginHorizontal: -20,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  noAdventuresText: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#8E9297",
    textAlign: "center",
  },
  startGameButton: {
    backgroundColor: "#563CAB",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  startGameButtonText: {
    fontSize: 14,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#75787C",
    marginBottom: 12,
  },
  settingsDivider: {
    height: 1,
    backgroundColor: "#AFB3BE",
    marginBottom: 16,
    marginHorizontal: -20,
  },
  userNameTitle: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#563CAB",
  },
  signInButton: {
    backgroundColor: "#563CAB",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  signInButtonText: {
    fontSize: 14,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
  },
  inviteTitle: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#8E9297",
    textAlign: "center",
    marginBottom: 16,
    marginTop: 8,
  },
  inviteButton: {
    alignItems: "center",
    marginBottom: 16,
  },
  inviteButtonRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 16,
    gap: 8,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    paddingVertical: 0,
    overflow: "visible",
  },
  coinImage: {
    width: 50,
    height: 50,
  },
  gameDataRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 16,
  },
  gameDataRowLarge: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 20,
    marginBottom: 4,
    backgroundColor: "#DAE2FA",
    borderTopWidth: 1,
    borderTopColor: "#979DD4",
    paddingVertical: 16,
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#979DD4",
  },
  componentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labelsRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  leftLabel: {
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.poppinsRegular,
    color: "#8E9297",
    flex: 1,
    textAlign: "center",
  },
  rightLabel: {
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.poppinsRegular,
    color: "#8E9297",
    flex: 1,
    textAlign: "center",
  },
  rewardCardsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 16,
    width: "100%",
  },
  rewardCardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    marginBottom: 8,
    width: "100%",
  },
  inviteButtonImage: {
    width: 280,
    height: 70,
  },
  settingsCard: {
    backgroundColor: "#F2F9FE",
    borderRadius: 8,
    padding: Padding.padding_12,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  settingsLabel: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsRegular,
    color: "#656565",
  },
  customSwitch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  switchThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  arrowContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  arrowText: {
    fontSize: 24,
    color: "#ACACAC",
    fontWeight: "bold",
  },
  referralCard: {
    backgroundColor: "#F2F9FE",
    borderRadius: 8,
    padding: Padding.padding_12,
    marginBottom: 8,
    minHeight: 80,
  },
  referralTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  urlField: {
    backgroundColor: "#4E8CFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: "100%",
  },
  urlText: {
    color: "#ffffff",
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.poppinsRegular,
  },
  copyButton: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  copyIcon: {
    width: 66,
    height: 32,
  },
  logoutButton: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  logoutImage: {
    width: 200,
    height: 50,
  },
  signinButtonContainer: {
    alignItems: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(32, 20, 59, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  infoDialog: {
    backgroundColor: "#AAB0F2",
    borderRadius: 12,
    padding: Padding.padding_16,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  infoLeftSection: {
    marginRight: Padding.padding_12,
  },
  infoImage: {
    width: 20,
    height: 20,
  },
  infoRightSection: {
    flex: 1,
  },
  infoSubtitle: {
    color: "#ffffff",
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: 4,
  },
  infoParagraph: {
    color: "#383670",
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 16,
  },
});

export default ProfileScreen;
