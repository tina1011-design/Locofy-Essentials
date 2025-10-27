import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { Image } from "expo-image";
import {
  FontFamily,
  FontSize,
  Width,
  Color,
  BoxShadow,
  Border,
  Padding,
  MinWidth,
  Gap,
} from "../GlobalStyles";

interface PopupYourReferralsProps {
  onClose?: () => void;
}

const PopupYourReferrals: React.FC<PopupYourReferralsProps> = ({ onClose }) => {
  const referralData = [
    { id: '1', username: 'Username1', medals: '15' },
    { id: '2', username: 'Username2', medals: '8' },
    { id: '3', username: 'Username3', medals: '22' },
    { id: '4', username: 'Username4', medals: '5' },
    { id: '5', username: 'Username5', medals: '12' },
    { id: '6', username: 'Username6', medals: '9' },
    { id: '7', username: 'Username7', medals: '18' },
    { id: '8', username: 'Username8', medals: '3' },
    { id: '9', username: 'Username9', medals: '25' },
    { id: '10', username: 'Username10', medals: '7' },
    { id: '11', username: 'Username11', medals: '14' },
    { id: '12', username: 'Username12', medals: '11' },
  ];

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View style={[styles.listRow, index % 2 === 0 ? styles.listRowOdd : styles.listRowEven]}>
      <View style={styles.listRowLeft}>
        <Image
          style={styles.avatarIcon}
          contentFit="contain"
          source={require("../assets/icon-referrals-avatar.png")}
        />
        <Text style={styles.usernameText}>{item.username}</Text>
      </View>
      <View style={styles.listRowRight}>
        <Image
          style={styles.medalIconSmall}
          contentFit="contain"
          source={require("../assets/img-medalsearned.png")}
        />
        <Text style={styles.medalNumberText}>{item.medals}</Text>
      </View>
    </View>
  );

  return (
    <View
      style={[styles.popupYourReferrals, styles.popupYourReferralsScrollViewContent]}
    >
      <View style={[styles.gamecardL, styles.contentBorder]}>
        <View style={[styles.content, styles.contentBorder]}>
          <View style={styles.cardInfo}>
            <Text style={styles.yourReferralsTitle}>YOUR REFERRALS</Text>
            
            <View style={styles.listContainer}>
              <View style={styles.listHeader}>
                <Text style={styles.headerText}>Username</Text>
                <Text style={styles.headerText}>Medals</Text>
              </View>
              <FlatList
                data={referralData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.listScrollView}
                showsVerticalScrollIndicator={true}
                nestedScrollEnabled={true}
                scrollEnabled={true}
              />
            </View>
            
            <View style={styles.paragraphContainer}>
              <View style={styles.paragraphRow}>
                <Text style={[styles.paragraphText, styles.closeTypo]}>
                  Every 750 TC Coins{" "}
                </Text>
                <Image
                  style={styles.coinIcon}
                  contentFit="contain"
                  source={require("../assets/icon-coin.png")}
                />
                <Text style={[styles.paragraphText, styles.closeTypo]}>
                  {" "}earned from invited referral
                </Text>
              </View>
              <View style={styles.paragraphRow}>
                <Text style={[styles.paragraphText, styles.closeTypo]}>
                  equals to 1 Medallion{" "}
                </Text>
                <Image
                  style={styles.medalIcon}
                  contentFit="contain"
                  source={require("../assets/img-medalsearned.png")}
                />
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <Image
                style={styles.inviteAndEarnButton}
                contentFit="contain"
                source={require("../assets/btn-inviteandearn.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onClose} activeOpacity={0.8}>
        <Text style={[styles.close, styles.closeTypo]}>CLOSE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  popupYourReferralsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 188,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    height: 852,
  },
  contentBorder: {
    borderStyle: "solid",
    overflow: "hidden",
  },
  closeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.fs_14,
  },
  popupYourReferrals: {
    width: Width.width_393,
    backgroundColor: Color.colorDarkslateblue,
    flex: 1,
    maxWidth: 393,
  },
  gamecardL: {
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    borderRadius: Border.br_11,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.questCardOutline,
    borderWidth: 1,
    paddingBottom: Padding.padding_8,
    minWidth: MinWidth.min_w_360,
    overflow: "hidden",
  },
  content: {
    width: 360,
    borderRadius: Border.br_12,
    borderColor: "#CFD6FF",
    borderWidth: 2,
    overflow: "hidden",
  },
  cardInfo: {
    backgroundColor: Color.textWhite,
    alignItems: "center",
    paddingHorizontal: Padding.padding_16,
    paddingTop: Padding.padding_16,
    paddingBottom: Padding.padding_16,
    gap: Gap.gap_16,
    alignSelf: "stretch",
  },
  paragraphContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingHorizontal: 8,
    gap: 4,
  },
  paragraphRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  paragraphText: {
    color: "#8E9297",
  },
  close: {
    color: Color.textWhite,
    alignSelf: "stretch",
  },
  yourReferralsTitle: {
    color: "#8897D9",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.fs_24,
    textAlign: "center",
    alignSelf: "stretch",
  },
  listContainer: {
    width: "100%",
    height: 300,
    borderRadius: Border.br_8,
    borderWidth: 2,
    borderColor: "#7C7EA7",
    borderStyle: "solid",
    flexDirection: "column",
    overflow: "hidden",
  },
  listHeader: {
    backgroundColor: "#E9F3FF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_8,
  },
  headerText: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.fs_14,
    color: "#75787C",
  },
  listScrollView: {
    flex: 1,
    backgroundColor: "#ABB3D8",
  },
  listScrollContent: {
    flexGrow: 1,
  },
  listRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_12,
    height: 40,
    gap: 8,
  },
  listRowOdd: {
    backgroundColor: "#ABB3D8",
  },
  listRowEven: {
    backgroundColor: "#B7C0DD",
  },
  listRowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: 224,
  },
  listRowRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  avatarIcon: {
    width: 24,
    height: 24,
  },
  usernameText: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.fs_14,
    color: "#545175",
  },
  medalIconSmall: {
    width: 20,
    height: 20,
  },
  medalNumberText: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.fs_14,
    color: "#FFFFFF",
  },
  coinIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 2,
  },
  medalIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 2,
  },
  inviteAndEarnButton: {
    width: 260,
    height: 65,
  },
});

export default PopupYourReferrals;

