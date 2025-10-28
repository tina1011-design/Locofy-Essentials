import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";

interface PopupFTUETesting2Props {
  visible: boolean;
  onSelectGiftCard: (card: string) => void;
}

const PopupFTUETesting2: React.FC<PopupFTUETesting2Props> = ({ visible, onSelectGiftCard }) => {
  const giftCards = ["Google Play", "PayPal", "TK Maxx", "Ubereats"];

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.caption}>
            Which gift card are you most interested in?
          </Text>
          <View style={styles.optionsContainer}>
            {giftCards.map((card) => (
              <TouchableOpacity
                key={card}
                style={styles.optionButton}
                onPress={() => onSelectGiftCard(card)}
              >
                <Text style={styles.optionText}>{card}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    width: "90%",
    maxWidth: 400,
  },
  caption: {
    fontSize: 18,
    textAlign: "center",
    color: "#333333",
    marginBottom: 24,
    fontWeight: "600",
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  optionText: {
    color: "#333333",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default PopupFTUETesting2;

