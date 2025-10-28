import * as React from "react";
import { StyleSheet, View, Text, Modal, Animated } from "react-native";

interface PopupFTUETestingLoadingProps {
  visible: boolean;
  onComplete: () => void;
}

const PopupFTUETestingLoading: React.FC<PopupFTUETestingLoadingProps> = ({ visible, onComplete }) => {
  const [progress, setProgress] = React.useState(0);
  const progressAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      // Reset progress
      setProgress(0);
      progressAnim.setValue(0);

      // Animate from 0 to 100% in 3 seconds
      Animated.timing(progressAnim, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
      }).start(() => {
        // Call onComplete after animation finishes
        setTimeout(() => {
          onComplete();
        }, 200);
      });

      // Update progress text
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2; // Increment by 2% (50 steps in 3 seconds)
        });
      }, 60); // Update every 60ms

      return () => clearInterval(interval);
    }
  }, [visible, onComplete]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.progressBarContainer}>
            <Animated.View 
              style={[
                styles.progressBar,
                { width: progressWidth }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>{progress}%</Text>
          <Text style={styles.caption}>Preparing your rewards...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    alignItems: "center",
    width: "90%",
    maxWidth: 400,
  },
  progressBarContainer: {
    width: "100%",
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 16,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 4,
  },
  progressText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});

export default PopupFTUETestingLoading;

