import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home.screen";

const Stack = createStackNavigator();

export const AccountNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
