import React from "react";
import { Image, View } from "react-native";
import { HeaderComponentStyles } from "../styles/headerComponent.style";
import { Button } from "react-native-paper";
import { colorTheme } from "../utility/themes/colors";

export const HeaderComponent = () => {
  return (
    <>
      <View style={HeaderComponentStyles.headerContainer}>
        <Image source={require("../../assets/img/teeketBlueLogo.png")} />
        <Button
          style={HeaderComponentStyles.btn}
          labelStyle={{ color: colorTheme.text.inverse }}
        >
          Menu
        </Button>
      </View>
      <View style={HeaderComponentStyles.hr} />
    </>
  );
};
