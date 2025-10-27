import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Modal, TouchableOpacity, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import HeaderGameDetail from "../components/HeaderGameDetail";
import BarEarupto1 from "../components/BarEarupto1";
import Milestones from "../components/Milestones";
import DialogTip from "../components/DialogTip";
import BtnPlayNEarn from "../components/BtnPlayNEarn";
import BtnContactSupport from "../components/BtnContactSupport";
import PopupValueProposition from "./PopupValueProposition";
import { useFTUE } from "../contexts/FTUEContext";
import { Gap, Color, Width, Border, Height, Padding, FontFamily, FontSize } from "../GlobalStyles";

const QuestsFeedScreen = () => {
  const { isFirstTimeUser, questsFeedFtueCompleted, setQuestsFeedFtueCompleted } = useFTUE();
  const [showGameDetails, setShowGameDetails] = useState(false);
  const [showValuePropositionPopup, setShowValuePropositionPopup] = useState(false);
  const [showImageOverlay, setShowImageOverlay] = useState(false);

  // Auto-open FTUE popup when visiting QuestsFeed for the first time in FTUE mode
  useFocusEffect(
    React.useCallback(() => {
      console.log('QuestsFeed focused - FTUE check:', { isFirstTimeUser, questsFeedFtueCompleted });
      if (isFirstTimeUser && !questsFeedFtueCompleted) {
        console.log('Opening FTUE popup in QuestsFeed');
        // Use timeout to ensure screen is fully mounted
        setTimeout(() => {
          setShowValuePropositionPopup(true);
          setQuestsFeedFtueCompleted(true);
        }, 100);
      }
    }, [isFirstTimeUser, questsFeedFtueCompleted])
  );

  const handleEarnUpToPress = () => {
    setShowValuePropositionPopup(true);
  };

  const handleClosePopup = () => {
    setShowValuePropositionPopup(false);
  };

  const toggleGameDetails = () => {
    setShowGameDetails(!showGameDetails);
  };

  const handleImagePress = () => {
    setShowImageOverlay(true);
  };

  const handleCloseImageOverlay = () => {
    setShowImageOverlay(false);
  };

  return (
    <View style={styles.container}>
      <HeaderGameDetail />
      <ScrollView
        style={[styles.questsFeedScreen, styles.bannerIconLayout]}
        contentContainerStyle={styles.questsFeedScreenScrollViewContent}
      >
        <View style={styles.scrollWrapper}>
        <View style={[styles.scroll, styles.infoFlexBox]}>
          <View style={styles.bannerWithStroke}>
            <Image
              style={[styles.bannerIcon, styles.bannerIconLayout]}
              contentFit="cover"
              source={require("../assets/Banner.png")}
            />
            <View style={styles.bannerStroke} />
          </View>
          <View style={[styles.info, styles.infoFlexBox]}>
            <BarEarupto1 onPress={handleEarnUpToPress} />
            <Pressable style={styles.moreInfoButton} onPress={toggleGameDetails}>
              <Text style={styles.moreInfoText}>
                {showGameDetails ? "Show Less" : "More info"}
              </Text>
              <MaterialCommunityIcons 
                name="triangle" 
                size={12} 
                color="#fff" 
                style={{ transform: [{ rotate: showGameDetails ? '0deg' : '180deg' }] }} 
              />
            </Pressable>
          </View>
          {showGameDetails && (
            <View style={styles.gameDetailsBox}>
              <View style={styles.adProviderDialog}>
                <Image
                  style={styles.adProviderIcon}
                  contentFit="cover"
                  source={require("../assets/image-36.png")}
                />
                <View style={styles.adProviderInfo}>
                  <Text style={styles.adProviderLabel}>Ad Provider</Text>
                  <Text style={styles.adProviderName}>ayeT-Studios</Text>
                </View>
                <BtnContactSupport />
              </View>
              <Text style={styles.gameDescription}>
                You are the Merge Mayor, and a world-building match puzzle adventure awaits!  Start with just a few items and grow your town into a thriving metropolis with merging, matching, crafting, and powerups. Complete missions, build communities, and uncover stories to evolve from a village to a city and beyond!  Merge Mayor is the ideal way to relax while keeping your brain active! Featuring fresh 3D graphics, satisfying gameplay, ever-expanding content, and charming storylines.
              </Text>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.screenshotsScroll}
                contentContainerStyle={styles.screenshotsContainer}
              >
                <TouchableOpacity onPress={handleImagePress}>
                  <Image
                    style={styles.screenshotImage}
                    contentFit="cover"
                    source={require("../assets/game-screenshot-portrait.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleImagePress}>
                  <Image
                    style={styles.screenshotImage}
                    contentFit="cover"
                    source={require("../assets/game-screenshot-portrait.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleImagePress}>
                  <Image
                    style={styles.screenshotImage}
                    contentFit="cover"
                    source={require("../assets/game-screenshot-portrait.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleImagePress}>
                  <Image
                    style={styles.screenshotImage}
                    contentFit="cover"
                    source={require("../assets/game-screenshot-portrait.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleImagePress}>
                  <Image
                    style={styles.screenshotImage}
                    contentFit="cover"
                    source={require("../assets/game-screenshot-portrait.png")}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          <Milestones />
          <DialogTip />
        </View>
      </View>
      </ScrollView>
      <View style={styles.btnPlaynearnWrapper}>
        <BtnPlayNEarn />
      </View>
      
      <Modal
        visible={showValuePropositionPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={handleClosePopup}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={handleClosePopup}
        >
          <PopupValueProposition version="quests" onClose={handleClosePopup} />
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={showImageOverlay}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseImageOverlay}
      >
        <TouchableOpacity 
          style={styles.imageOverlay} 
          activeOpacity={1} 
          onPress={handleCloseImageOverlay}
        >
          <Image
            style={styles.fullScreenImage}
            contentFit="contain"
            source={require("../assets/game-screenshot-portrait.png")}
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.layoutPageBackground,
  },
  moreInfoButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 40,
    height: 40,
    backgroundColor: "rgba(58, 15, 128, 0.5)",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: 120,
  },
  moreInfoText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  gameDetailsBox: {
    backgroundColor: "rgba(58, 15, 128, 0.5)",
    borderRadius: 16,
    paddingVertical: 16,
    alignSelf: "stretch",
    gap: 16,
  },
  adProviderDialog: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "rgba(58, 15, 128, 0.5)",
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 16,
  },
  adProviderIcon: {
    width: 44,
    height: 44,
    borderRadius: 8,
  },
  adProviderInfo: {
    flex: 1,
    gap: 2,
  },
  adProviderLabel: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  adProviderName: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins-Bold",
    fontWeight: "700",
  },
  gameDescription: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    lineHeight: 18,
    textAlign: "left",
    paddingHorizontal: 16,
  },
  screenshotsScroll: {
    alignSelf: "stretch",
  },
  screenshotsContainer: {
    gap: 12,
    paddingLeft: 16,
  },
  screenshotImage: {
    width: 128,
    height: 227,
    borderRadius: 8,
  },
  questsFeedScreenScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 150,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  bannerIconLayout: {
    maxWidth: "100%",
    width: "100%",
  },
  infoFlexBox: {
    gap: Gap.gap_16,
    alignItems: "center",
  },
  questsFeedScreen: {
    backgroundColor: Color.layoutPageBackground,
    flex: 1,
    paddingTop: 160, // Height of HeaderGameDetail to prevent overlap
  },
  scrollWrapper: {
    paddingBottom: 21,
    flexDirection: "row",
    width: "100%",
  },
  scroll: {
    width: "100%",
  },
  bannerWithStroke: {
    width: "100%",
  },
  bannerIcon: {
    alignSelf: "stretch",
    height: 132,
  },
  bannerStroke: {
    width: "100%",
    height: 4,
    backgroundColor: "#434FBF",
  },
  info: {
    zIndex: 5000,
    flexDirection: "row",
  },
  btnPlaynearnWrapper: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    height: 88,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 1000,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(32, 20, 59, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  fullScreenImage: {
    width: "100%",
    height: "100%",
  },
});

export default QuestsFeedScreen;
