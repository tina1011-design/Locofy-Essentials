import * as React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import Title from "./Title";
import GameCardLInstall from "./GameCardLInstall";
import GameCardLPlay from "./GameCardLPlay";
import GameCardLInstallFeatured from "./GameCardLInstallFeatured";
import GameCardS from "./GameCardS";
import GameCardXS from "./GameCardXS";
import EventCardMPlayEarn from "./EventCardMPlayEarn";
import EventCardInviteFriends from "./EventCardInviteFriends";
import { Width, Color, FontFamily, FontSize } from "../GlobalStyles";

type ScrollType = {
  onShowWelcomeGift?: () => void;
  onShowRateUs?: () => void;
  onShowCheckoutSuccess?: () => void;
  onShowSignin?: () => void;
  onShowNeedHelp?: () => void;
  onShowFTUE?: () => void;
  isFirstTimeUser?: boolean;
  ftueCompleted?: boolean;
  onToggleFTUE?: () => void;
};

const Scroll = ({ onShowWelcomeGift, onShowRateUs, onShowCheckoutSuccess, onShowSignin, onShowNeedHelp, onShowFTUE, isFirstTimeUser, ftueCompleted, onToggleFTUE }: ScrollType) => {
  return (
    <View style={styles.scroll}>
      <View style={styles.topPicks}>
        <TouchableOpacity 
          style={[styles.welcomeGiftButton, styles.ftueToggleButton]} 
          onPress={onToggleFTUE}
        >
          <Text style={styles.welcomeGiftText}>
            {isFirstTimeUser ? "Switch to Normal Mode" : "Switch to FTUE Mode"}
          </Text>
        </TouchableOpacity>
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
        {!isFirstTimeUser && (
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
        <Title text="Top Picks for you" />
        <View style={styles.gameCardsContainer}>
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
        </View>
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
  ftueToggleButton: {
    backgroundColor: "rgba(168, 177, 255, 0.1)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 4,
  },
});

export default Scroll;
