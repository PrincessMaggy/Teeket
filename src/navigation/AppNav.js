import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Landing } from "../screens/Landing.screen";

const Stack = createStackNavigator();

export const AppNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Landing"
      component={Landing}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
