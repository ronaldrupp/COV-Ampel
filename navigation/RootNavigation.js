import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./Navigation";
import DetailScreen from "./../screens/DetailScreen";
import HomeScreen from "./../screens/HomeScreen";
const NavigationStack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationStack.Navigator
      screenOptions={{
        stackPresentation: "formSheet",
        gestureResponseDistance: 1000,
      }}
    >
      <NavigationStack.Screen name="Übersicht" component={HomeScreen} />
      <NavigationStack.Screen name="Detail" component={DetailScreen} />
    </NavigationStack.Navigator>
  );
}
