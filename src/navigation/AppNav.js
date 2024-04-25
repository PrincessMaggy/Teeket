import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Landing } from "../screens/Landing.screen";
import { CreateEvent } from "../screens/CreateEvent.screen";
import { DiscoverEvents } from "../screens/DiscoverEvents.screen";

const Stack = createStackNavigator();

export const AppNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Landing"
      component={Landing}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="DiscoverEvents"
      component={DiscoverEvents}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CreateEvent"
      component={CreateEvent}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
