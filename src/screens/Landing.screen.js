import React from "react";
import { Image, Text, ImageBackground, View, ScrollView } from "react-native";
import { LandingStyles } from "../styles/landing.style";
import { Button } from "react-native-paper";
import { colorTheme } from "../utility/themes/colors";

export const Landing = () => {
  return (
    <ScrollView>
      <ImageBackground
        style={LandingStyles.bgImageContainer}
        source={require("../../assets/img/coloredBG.png")}
      >
        <View style={LandingStyles.overlayView} />
        <View style={LandingStyles.centeredContainer}>
          <Image
            resizeMode="contain"
            style={LandingStyles.logo}
            source={require("../../assets/img/teeketWhiteLogo.png")}
          />
          <Image source={require("../../assets/img/landingBanner.png")} />
          <View style={LandingStyles.textContainer}>
            <Text style={LandingStyles.paragraph}>
              Your one stop platform to create, manage and promote your events
              at your convenience.
            </Text>
          </View>
        </View>
        <Button
          style={LandingStyles.btn}
          labelStyle={{ color: colorTheme.text.inverse }}
        >
          Create an event
        </Button>
        <Button
          style={LandingStyles.btnval}
          labelStyle={{ color: colorTheme.brand.secondary }}
        >
          Discover events
        </Button>
      </ImageBackground>
    </ScrollView>
  );
};
