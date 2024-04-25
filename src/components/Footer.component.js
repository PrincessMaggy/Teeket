import React from "react";
import { FooterComponentStyles } from "../styles/footerComponent.style";
import { View, Text, Image } from "react-native";

export const FooterComponent = () => {
  return (
    <View style={FooterComponentStyles.ctaContainer}>
      <Image source={require("../../assets/img/CTA.png")} />
      <View style={FooterComponentStyles.menuView}>
        <Text style={FooterComponentStyles.textStyle}>MENU</Text>
        <Text style={FooterComponentStyles.textStyle}>For Organizers</Text>
        <Text style={FooterComponentStyles.textStyle}>How to create event</Text>
        <Text style={FooterComponentStyles.textStyle}>Event FAQs</Text>
        <Text style={FooterComponentStyles.textStyle}>For Attendees</Text>
      </View>
      <View style={FooterComponentStyles.hr} />

      <View style={FooterComponentStyles.contactViewCont}>
        <View style={FooterComponentStyles.contactView}>
          <Image source={require("../../assets/img/PhoneCall.png")} />
          <Text style={FooterComponentStyles.textStyle}>+234675652</Text>
        </View>
        <View style={FooterComponentStyles.contactView}>
          <Image source={require("../../assets/img/ChatDots.png")} />
          <Text style={FooterComponentStyles.textStyle}>teeket@gmail.com</Text>
        </View>
      </View>
      <View style={FooterComponentStyles.hr} />

      <View style={FooterComponentStyles.policyView}>
        <Text style={FooterComponentStyles.textStyle}>Privacy Policy</Text>
        <Text style={FooterComponentStyles.textStyle}>Terms of use</Text>
        <Text style={FooterComponentStyles.textStyle}>
          Teeket Inc. All rights reserved.
        </Text>
      </View>
    </View>
  );
};
