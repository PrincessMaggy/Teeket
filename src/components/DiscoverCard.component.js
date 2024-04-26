import React from "react";
import { Text, Image, View } from "react-native";
import { discoverEventStyles } from "../styles/discoverEvent.style";
import { Button } from "react-native-paper";
import { colorTheme } from "../utility/themes/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { spacing } from "../utility/themes/sizes";

export const DiscoverCard = () => {
  return (
    <View style={discoverEventStyles.sectionContainer}>
      <Text style={discoverEventStyles.textTitle}>Upcoming Events</Text>

      <View style={discoverEventStyles.discoverCard}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={discoverEventStyles.date}>03 June</Text>
            <Text style={discoverEventStyles.cost}>$10</Text>
          </View>
          <Text style={discoverEventStyles.title}>The next conference '23</Text>
          <View style={{ gap: spacing.sm, marginTop: spacing.sm }}>
            <View style={{ flexDirection: "row", gap: spacing.md }}>
              <MaterialIcons
                name="person-pin"
                size={spacing.lg}
                color="black"
              />
              <Text style={discoverEventStyles.covener}>Wallace James</Text>
            </View>
            <View style={{ flexDirection: "row", gap: spacing.md }}>
              <Octicons
                name="location"
                size={spacing.lg}
                color="rgba(0, 82, 246, 1)"
              />
              <Text style={discoverEventStyles.location}>Abuja, Nigeria</Text>
            </View>
          </View>
        </View>
        <Image
          style={discoverEventStyles.cardImg}
          source={require("../../assets/img/CTA.png")}
        />
      </View>

      <Button
        labelStyle={{ color: colorTheme.brand.secondary }}
        style={discoverEventStyles.btnDiscover}
      >
        Discover More
      </Button>
    </View>
  );
};
