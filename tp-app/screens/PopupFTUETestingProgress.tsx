import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Animated } from "react-native";
import RewardCardM from "../components/RewardCardM";

interface PopupFTUETestingProgressProps {
  visible: boolean;
  onClose: () => void;
}

const PopupFTUETestingProgress: React.FC<PopupFTUETestingProgressProps> = ({ visible, onClose }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (visible) {
      // Start from 0%
      setProgress(0);
      
      // Animate to 10% after a short delay
      setTimeout(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 10) {
              clearInterval(interval);
              return 10;
            }
            return prev + 1;
          });
        }, 50); // Animate over 0.5 seconds (10 steps * 50ms)

        return () => clearInterval(interval);
      }, 500); // Wait 500ms before starting animation
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.container}>
          <Text style={styles.caption}>
            You're getting closer to{'\n'}your gift card! 🎁
          </Text>
          <View style={styles.cardWrapper}>
            <RewardCardM
              status="default"
              value="$5"
              coinAmount="1,000"
              progress={progress}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    alignItems: "center",
    width: "90%",
    maxWidth: 400,
  },
  caption: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 32,
  },
  cardWrapper: {
    width: "100%",
    alignItems: "center",
  },
});

export default PopupFTUETestingProgress;

