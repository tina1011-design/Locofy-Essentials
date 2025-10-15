import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import ValueIcon from "./ValueIcon";
import {
  Border,
  Height,
  Padding,
  Width,
  BoxShadow,
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

interface RewardCardProps {
  status?: 'default' | 'ready-to-claim' | 'locked' | 'completed';
  value?: string;
  coinAmount?: string;
}

const RewardCard: React.FC<RewardCardProps> = ({ 
  status = 'default',
  value = '$10',
  coinAmount = '2400'
}) => {
  const getCardStyle = () => {
    switch (status) {
      case 'ready-to-claim':
        return [styles.rewardcard, { backgroundColor: '#23BF17' }];
      case 'locked':
        return styles.rewardcard;
      case 'completed':
        return styles.rewardcard;
      default:
        return styles.rewardcard;
    }
  };

  const getContentOpacity = () => {
    return 1;
  };

  const getCardInfoStyle = () => {
    const baseStyle = styles.cardInfo;
    if (status === 'ready-to-claim') {
      return [baseStyle, { backgroundColor: '#88FF2A' }];
    }
    return baseStyle;
  };

  const getContentStyle = () => {
    const baseStyle = styles.content;
    if (status === 'ready-to-claim') {
      return [baseStyle, { borderColor: '#56EA25' }];
    }
    return baseStyle;
  };

  return (
    <View style={getCardStyle()}>
      <View style={[getContentStyle(), styles.contentLayout, { opacity: getContentOpacity() }]}>
         <ImageBackground
           style={styles.appbannerVerticalIcon}
           resizeMode="cover"
           source={require("../assets/GiftCardBanner.png")}
         >
           {status !== 'completed' && (
             <View style={[styles.progressBar, styles.progressLayout]}>
               <View style={[styles.progressBarChild, styles.progressLayout]} />
               <View style={[styles.progressBarItem, styles.cardValuePosition]} />
             </View>
           )}
          <View style={[styles.cardValue, styles.cardFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>{value}</Text>
          </View>
        </ImageBackground>
          <View style={[getCardInfoStyle(), styles.cardFlexBox]}>
            {status !== 'completed' && (
              <ValueIcon
                property1="coin"
                size="M"
                value={coinAmount}
                showIconCash={true}
              />
            )}
          </View>
       </View>
       {status === 'locked' && (
         <>
           <View style={styles.lockedOverlay} />
           <Image
             style={styles.lockIcon}
             source={require("../assets/rewardcard_lock.png")}
           />
         </>
       )}
       {status === 'completed' && (
         <>
           <View style={styles.completedOverlay} />
           <Image
             style={styles.checkmarkIcon}
             source={require("../assets/rewardcard-checkmark.png")}
           />
         </>
       )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentLayout: {
    overflow: "hidden",
    borderRadius: Border.br_8,
  },
  progressLayout: {
    height: Height.height_12,
    position: "absolute",
  },
  cardValuePosition: {
    top: 6,
    position: "absolute",
  },
  cardFlexBox: {
    paddingVertical: Padding.padding_2,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textFlexBox: {
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
  },
  rewardcard: {
    width: Width.width_114,
    boxShadow: BoxShadow.gameCard,
    elevation: 4,
    backgroundColor: Color.gameCardDepth,
    borderColor: Color.questCardOutline,
    paddingBottom: Padding.padding_8,
    alignItems: "center",
    borderRadius: Border.br_8,
    borderWidth: 1,
    borderStyle: "solid",
  },
  content: {
    height: Height.height_144,
    borderColor: Color.gameCardBackgroundOutline,
    width: Width.width_112,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  appbannerVerticalIcon: {
    height: Height.height_112,
    width: Width.width_112,
  },
  progressBar: {
    marginLeft: -51,
    top: 96,
    left: "50%",
    backgroundColor: "#163D11",
    width: 102,
    overflow: "hidden",
    borderRadius: Border.br_8,
  },
  progressBarChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorLime,
    width: Width.width_59,
  },
  progressBarItem: {
    left: 4,
    borderTopLeftRadius: Border.br_8,
    borderBottomLeftRadius: Border.br_8,
    backgroundColor: Color.colorLimegreen100,
    width: 55,
    height: 4,
  },
  cardValue: {
    left: 67,
    borderRadius: 24,
    backgroundColor: Color.textWhite,
    paddingHorizontal: Padding.padding_10,
    height: Height.height_20,
    top: 6,
    position: "absolute",
  },
  text: {
    height: 21,
    width: Width.width_26,
    fontSize: FontSize.fs_12,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
  },
  cardInfo: {
    height: Height.height_32,
    backgroundColor: Color.gameCardBackground,
    paddingHorizontal: Padding.padding_8,
    width: Width.width_112,
  },
  readyToClaimCard: {
    borderColor: Color.questCardOutline,
    borderWidth: 2,
    shadowColor: Color.textQuestCardCashback,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  lockedCard: {
    borderColor: Color.textOutline,
    borderWidth: 2,
    backgroundColor: Color.dialogBackground,
  },
  completedCard: {
    borderColor: Color.textQuestCardDefault,
    borderWidth: 2,
    backgroundColor: Color.gameCardBackground,
  },
  lockedOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#202020",
    opacity: 0.6,
    borderRadius: Border.br_8,
    justifyContent: "center",
    alignItems: "center",
  },
  lockIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -57 }, { translateY: -57 }],
    width: Width.width_114,
    height: Width.width_114,
  },
  completedOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#0F0140",
    opacity: 0.6,
    borderRadius: Border.br_8,
  },
  checkmarkIcon: {
    position: "absolute",
    bottom: 8,
    left: "50%",
    transform: [{ translateX: -15 }],
    width: 30,
    height: 30,
  },
});

export default RewardCard;
