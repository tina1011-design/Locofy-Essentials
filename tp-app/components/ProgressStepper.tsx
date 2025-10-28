import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

interface ProgressStepperProps {
  currentStep?: number;
  totalSteps?: number;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ 
  currentStep = 1, 
  totalSteps = 5 
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        const isLast = stepNumber === totalSteps;
        
        return (
          <React.Fragment key={stepNumber}>
            {/* Step Circle */}
            <View style={[
              styles.step,
              isActive && styles.stepActive,
              isCompleted && styles.stepCompleted,
            ]}>
              {isLast ? (
                <Text style={styles.giftEmoji}>🎁</Text>
              ) : (
                <Text style={[
                  styles.stepText,
                  isActive && styles.stepTextActive,
                  isCompleted && styles.stepTextCompleted,
                ]}>
                  {stepNumber}
                </Text>
              )}
            </View>
            
            {/* Connector Line */}
            {stepNumber < totalSteps && (
              <View style={[
                styles.connector,
                stepNumber < currentStep && styles.connectorCompleted,
              ]} />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  step: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#CCCCCC",
  },
  stepActive: {
    backgroundColor: "#007AFF",
    borderColor: "#0051D5",
  },
  stepCompleted: {
    backgroundColor: "#34C759",
    borderColor: "#248A3D",
  },
  stepText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#999999",
  },
  stepTextActive: {
    color: "#FFFFFF",
  },
  stepTextCompleted: {
    color: "#FFFFFF",
  },
  giftEmoji: {
    fontSize: 20,
  },
  connector: {
    width: 40,
    height: 3,
    backgroundColor: "#E0E0E0",
  },
  connectorCompleted: {
    backgroundColor: "#34C759",
  },
});

export default ProgressStepper;

