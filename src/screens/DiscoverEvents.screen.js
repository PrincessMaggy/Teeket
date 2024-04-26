import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { HeaderComponent } from "../components/Header.component";
import { FooterComponent } from "../components/Footer.component";
import { SearchEvent } from "../components/Search.component";
import { discoverEventStyles } from "../styles/discoverEvent.style";
import { DiscoverCard } from "../components/DiscoverCard.component";
import { Button } from "react-native-paper";
import { colorTheme } from "../utility/themes/colors";

export const DiscoverEvents = () => {
  return (
    <ScrollView>
      <View style={discoverEventStyles.discoverContainer}>
        <HeaderComponent />
        {/* Tabs */}
        <View style={discoverEventStyles.sectionContainer}>
          <Text style={discoverEventStyles.textTitle}>
            Discover events near you.
          </Text>
          <SearchEvent />
          <View style={discoverEventStyles.fourTabs}>
            <View style={discoverEventStyles.tabOne}>
              <Image source={require("../../assets/img/music_note.png")} />
              <Text>Music</Text>
            </View>
            <View style={discoverEventStyles.tabTwo}>
              <Image source={require("../../assets/img/music_note.png")} />
              <Text>Tech</Text>
            </View>
            <View style={discoverEventStyles.tabThree}>
              <Image source={require("../../assets/img/music_note.png")} />
              <Text>Arts & Culture</Text>
            </View>
            <View style={discoverEventStyles.tabFour}>
              <Image source={require("../../assets/img/music_note.png")} />
              <Text> Entertainment</Text>
            </View>
          </View>
        </View>

        {/* upcoming events */}
        <DiscoverCard />

        <FooterComponent />
      </View>
    </ScrollView>
  );
};
