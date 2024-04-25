import React, { useEffect, useState } from "react";
import { AccountNav } from "./AccountNav";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { AppNav } from "./AppNav";
import { View } from "react-native";
import { colorTheme } from "../utility/themes/colors";

export const MainNav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  //   useEffect(() => {
  //     checkUserSession();
  //   }, []);

  const checkUserSession = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        console.log(userData, "userData");
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
    } finally {
    }
  };
  return (
    <NavigationContainer>
      <BackgroundColorWrapper>
        {isAuthenticated ? <AppNav /> : <AccountNav />}
      </BackgroundColorWrapper>
    </NavigationContainer>
  );
};

const BackgroundColorWrapper = ({ children }) => {
  return <View style={{ flex: 1, backgroundColor: "#fff" }}>{children}</View>;
};
