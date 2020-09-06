import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import HomeScreen from "./../screens/HomeScreen";

const NavigationRootStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationRootStack.Navigator>
      <NavigationRootStack.Screen name="Home" component={HomeScreen} />
    </NavigationRootStack.Navigator>
  );
}
