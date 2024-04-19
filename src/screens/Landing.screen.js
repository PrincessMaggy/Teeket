import React from "react";
import {
  Image,
  Text,
  Button,
  ImageBackground,
  View,
  ScrollView,
} from "react-native";
import { LandingStyles } from "../styles/landing.style";
import { colorTheme } from "../utility/themes/colors";

export const Landing = () => {
  return (
    <ScrollView>
      <ImageBackground
        style={LandingStyles.bgImageContainer}
        source={require("../../assets/img/coloredBG.png")}
      >
        <Image
          style={LandingStyles.logo}
          source={require("../../assets/img/teeketWhiteLogo.png")}
        ></Image>
        <View style={LandingStyles.overlayView} />
        <Image source={require("../../assets/img/landingBanner.png")}></Image>
        <Text style={LandingStyles.paragraph}>
          Your one stop platform to create, manage and promote your events at
          your convenience.
        </Text>
        <Button
          style={LandingStyles.btn}
          title="Create an event"
          color="#fff"
          backgroundColor={colorTheme.brand.primary}
        />
        <Button
          style={LandingStyles.btn}
          title="Discover events"
          color={colorTheme.brand.secondary}
          background={colorTheme.brand.primary}
        />
      </ImageBackground>
    </ScrollView>
  );
};
