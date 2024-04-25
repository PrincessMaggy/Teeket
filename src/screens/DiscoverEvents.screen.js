import React from "react";
import { Text, View } from "react-native";
import { HeaderComponent } from "../components/Header.component";
import { FooterComponent } from "../components/Footer.component";

export const DiscoverEvents = () => {
  return (
    <View>
      <HeaderComponent />
      <View>
        <Text>discover</Text>
      </View>
      <FooterComponent />
    </View>
  );
};
