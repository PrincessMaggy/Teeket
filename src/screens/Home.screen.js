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

export const Home = () => {
  const [value, onChangeText] = useState("Enter your email address");
  return (
    <ScrollView>
      <View style={HomeStyles.screenContainer}>
        <View style={HomeStyles.headerContainer}>
          <Image source={require("../../assets/img/teeketBlueLogo.png")} />
          <Button
            style={HomeStyles.btn}
            labelStyle={{ color: colorTheme.text.inverse }}
          >
            Menu
          </Button>
        </View>
        <View style={HomeStyles.mainContainer}>
          <Text style={HomeStyles.title}>Login or signup to continue</Text>

          <View style={HomeStyles.googleBtn}>
            <Image
              source={require("../../assets/img/Google.png")}
              style={HomeStyles.googleImg}
              resizeMode="contain"
            />
            <Text labelStyle={{ color: colorTheme.brand.secondary }}>
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
        <View style={HomeStyles.ctaContainer}>
          <Image source={require("../../assets/img/CTA.png")} />
          <View style={HomeStyles.menuView}>
            <Text style={HomeStyles.textStyle}>MENU</Text>
            <Text style={HomeStyles.textStyle}>For Organizers</Text>
            <Text style={HomeStyles.textStyle}>How to create event</Text>
            <Text style={HomeStyles.textStyle}>Event FAQs</Text>
            <Text style={HomeStyles.textStyle}>For Attendees</Text>
          </View>
          <View style={HomeStyles.hr} />

          <View style={HomeStyles.contactViewCont}>
            <View style={HomeStyles.contactView}>
              <Image source={require("../../assets/img/PhoneCall.png")} />
              <Text style={HomeStyles.textStyle}>+234675652</Text>
            </View>
            <View style={HomeStyles.contactView}>
              <Image source={require("../../assets/img/ChatDots.png")} />
              <Text style={HomeStyles.textStyle}>teeket@gmail.com</Text>
            </View>
          </View>
          <View style={HomeStyles.hr} />

          <View style={HomeStyles.policyView}>
            <Text style={HomeStyles.textStyle}>Privacy Policy</Text>
            <Text style={HomeStyles.textStyle}>Terms of use</Text>
            <Text style={HomeStyles.textStyle}>
              Teeket Inc. All rights reserved.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
