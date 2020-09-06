import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { enableScreens } from "react-native-screens";
enableScreens();
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./context";
import Navigation from "./navigation/Navigation";
import { LightTheme, DarkTheme } from "./themes";

export default function App() {
  let colorScheme = useColorScheme();

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
