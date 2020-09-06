import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./../screens/HomeScreen";
import DetailScreen from "./../screens/DetailScreen";

const NavigationRootStack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationRootStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Jost_700Bold",
          fontSize: 20,
          textTransform: "uppercase",
        },
        headerStyle: {
          shadowColor: "transparent",
        },
        gestureResponseDistance: {
          vertical: 1000,
        },
      }}
    >
      <NavigationRootStack.Screen name="Übersicht" component={HomeScreen} />
      {/* <NavigationRootStack.Screen
        options={{ headerShown: false }}
        name="Detail"
        component={DetailScreen}
      /> */}
    </NavigationRootStack.Navigator>
  );
}
