import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";

interface PopupFTUETesting1Props {
  visible: boolean;
  onNext: () => void;
}

const PopupFTUETesting1: React.FC<PopupFTUETesting1Props> = ({ visible, onNext }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.caption}>
            Earn real gift cards with Treasure Coins!{'\n\n'}
            The more quests you complete, the more coins you collect.
          </Text>
          <TouchableOpacity style={styles.button} onPress={onNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
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
    alignItems: "center",
  },
  caption: {
    fontSize: 18,
    textAlign: "center",
    color: "#333333",
    marginBottom: 24,
    lineHeight: 26,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    minWidth: 120,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default PopupFTUETesting1;

