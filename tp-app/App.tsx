const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeGamesFeedScreen from "./screens/HomeGamesFeedScreen";
import QuestsFeedScreen from "./screens/QuestsFeedScreen";
import SplashScreen from "./screens/SplashScreen";
import { FTUEProvider } from "./contexts/FTUEContext";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "LuckiestGuy-Regular": require("./assets/fonts/LuckiestGuy-Regular.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  const handleSplashFinish = () => {
    setHideSplashScreen(true);
  };

  return (
    <FTUEProvider>
      {!hideSplashScreen ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Button1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Button1"
              component={HomeGamesFeedScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BarEarupto"
              component={QuestsFeedScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </FTUEProvider>
  );
};
export default App;
