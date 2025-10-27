import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import RewardCardL from "../components/RewardCardL";
import ValueIcon from "../components/ValueIcon";
import PopupSigninwithgoogle from "./PopupSigninwithgoogle";

interface PopupGiftcardCheckoutProps {
  onClose?: () => void;
}

const PopupGiftcardCheckout: React.FC<PopupGiftcardCheckoutProps> = ({ onClose }) => {
  const navigation = useNavigation();
  const [showSigninPopup, setShowSigninPopup] = React.useState(false);

  const handleBackPress = () => {
    if (onClose) {
      onClose();
    } else {
      navigation.goBack();
    }
  };

  const handleCheckoutPress = () => {
    setShowSigninPopup(true);
  };

  const handleCloseSigninPopup = () => {
    setShowSigninPopup(false);
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/bg-giftcardcheckout.png")}
      resizeMode="cover"
    >
      {/* Back button at top right */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Image
          style={styles.backButtonImage}
          contentFit="cover"
          source={require("../assets/btn-back.png")}
        />
      </TouchableOpacity>

      <View style={styles.contentWrapper}>
        {/* Title */}
        <Text style={styles.title}>GIFTCARD CHECKOUT</Text>

        {/* RewardCardL component */}
        <RewardCardL property1="Install" valueIconSize1="M" valueIconShowIconCash1={true} />

        {/* Dialog box */}
        <View style={styles.dialogBox}>
          {/* Header row with balance */}
          <View style={styles.headerRow}>
            <Text style={styles.balanceText}>Balance</Text>
            <ValueIcon property1="coin" size="L" value="2400" showIconCash={true} />
          </View>

          {/* Content rows container */}
          <View style={styles.contentRows}>
            {/* 2nd row - Google Play Giftcard */}
            <View style={styles.contentRow}>
              <Text style={styles.boldText}>Google Play Giftcard</Text>
            </View>

            {/* 3rd row - Amount */}
            <View style={styles.contentRow}>
              <Text style={styles.regularText}>Amount</Text>
              <Text style={styles.regularText}>$100.00</Text>
            </View>

            {/* 4th row - Cost */}
            <View style={styles.contentRow}>
              <Text style={styles.regularText}>Cost</Text>
              <View style={styles.costRight}>
                <Text style={styles.regularText}>-</Text>
                <ValueIcon property1="coin" size="M" value="2400" showIconCash={true} />
              </View>
            </View>
          </View>
        </View>

        {/* Checkout button */}
        <TouchableOpacity onPress={handleCheckoutPress} activeOpacity={0.8}>
          <Image
            style={styles.checkoutButton}
            contentFit="cover"
            source={require("../assets/btn-checkout.png")}
          />
        </TouchableOpacity>
      </View>

      {/* Sign in with Google Modal */}
      <Modal
        visible={showSigninPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseSigninPopup}
      >
        <View style={styles.modalOverlay}>
          <PopupSigninwithgoogle onClose={handleCloseSigninPopup} />
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 70,
    right: 20,
    zIndex: 10,
  },
  backButtonImage: {
    width: 52,
    height: 52,
  },
  contentWrapper: {
    width: "90%",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#626262",
    textAlign: "center",
  },
  dialogBox: {
    width: "100%",
    borderRadius: Border.br_16,
    overflow: "hidden",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E1E1E1",
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_12,
    borderBottomWidth: 2,
    borderBottomColor: "#C0C0C0",
  },
  balanceText: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: "#626262",
  },
  contentRows: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_12,
    gap: 12,
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boldText: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#626262",
  },
  regularText: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.poppinsRegular,
    color: "#626262",
  },
  costRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  checkoutButton: {
    width: 320,
    height: 60,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(32, 20, 59, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PopupGiftcardCheckout;

