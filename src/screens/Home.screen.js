import React, { useState } from "react";
import {
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { colorTheme } from "../utility/themes/colors";
import { Button } from "react-native-paper";
import { HomeStyles } from "../styles/home.style.js";
import { HeaderComponent } from "../components/Header.component.js";
import { FooterComponent } from "../components/Footer.component.js";

export const Home = () => {
  const [value, onChangeText] = useState("Enter your email address");
  return (
    <ScrollView>
      <View style={HomeStyles.screenContainer}>
        <HeaderComponent />

        <View style={HomeStyles.mainContainer}>
          <Text style={HomeStyles.title}>Login or sign up to continue</Text>

          <View style={HomeStyles.googleBtn}>
            <Image
              source={require("../../assets/img/Google.png")}
              style={HomeStyles.googleImg}
              resizeMode="contain"
            />
            <Text
              labelStyle={{ color: colorTheme.brand.secondary }}
              style={{ fontFamily: "ManropeBold" }}
            >
              Continue with Google
            </Text>
          </View>
          <View style={HomeStyles.hr2Container}>
            <View style={HomeStyles.hr2Line} />
            <Text style={HomeStyles.hr2Text}>or</Text>
            <View style={HomeStyles.hr2Line} />
          </View>
          <KeyboardAvoidingView>
            <TextInput
              editable
              maxLength={40}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={HomeStyles.inputEmail}
            />
          </KeyboardAvoidingView>
          <Button
            labelStyle={{ color: colorTheme.text.inverse }}
            style={HomeStyles.btnEmail}
          >
            Continue with email
          </Button>
          <Text style={HomeStyles.paragraph}>
            By continuing, you acknowledge that you have read and understood,
            and agree to Teeket’s{" "}
            <Text style={HomeStyles.termsPolicyText}>Terms of Service</Text> and{" "}
            <Text style={HomeStyles.termsPolicyText}>Privacy Policy</Text>.
          </Text>
        </View>
        <FooterComponent />
      </View>
    </ScrollView>
  );
};
