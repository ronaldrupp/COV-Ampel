import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme, ActivityIndicator } from "react-native";
import { enableScreens } from "react-native-screens";
enableScreens();
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./context";
import Navigation from "./navigation/Navigation";
import { LightTheme, DarkTheme } from "./themes";

import {
  useFonts,
  Jost_100Thin,
  Jost_200ExtraLight,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_800ExtraBold,
  Jost_900Black,
  Jost_100Thin_Italic,
  Jost_200ExtraLight_Italic,
  Jost_300Light_Italic,
  Jost_400Regular_Italic,
  Jost_500Medium_Italic,
  Jost_600SemiBold_Italic,
  Jost_700Bold_Italic,
  Jost_800ExtraBold_Italic,
  Jost_900Black_Italic,
} from "@expo-google-fonts/jost";

export default function App() {
  let colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Jost_100Thin,
    Jost_200ExtraLight,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_800ExtraBold,
    Jost_900Black,
    Jost_100Thin_Italic,
    Jost_200ExtraLight_Italic,
    Jost_300Light_Italic,
    Jost_400Regular_Italic,
    Jost_500Medium_Italic,
    Jost_600SemiBold_Italic,
    Jost_700Bold_Italic,
    Jost_800ExtraBold_Italic,
    Jost_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else if (fontsLoaded) {
    return (
      <AppProvider>
        <NavigationContainer
          theme={colorScheme == "light" ? LightTheme : DarkTheme}
        >
          <Navigation />
        </NavigationContainer>
      </AppProvider>
    );
  }
}
