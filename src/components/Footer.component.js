import React, { useState } from "react";
import { FooterComponentStyles } from "../styles/footerComponent.style";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const FooterComponent = () => {
  const [organizerMenuOpen, setOrganizerMenuOpen] = useState(false);
  const [attendeeMenuOpen, setAttendeeMenuOpen] = useState(false);

  const toggleOrganizerMenu = () => {
    setOrganizerMenuOpen(!organizerMenuOpen);
  };

  const toggleAttendeeMenu = () => {
    setAttendeeMenuOpen(!attendeeMenuOpen);
  };

  return (
    <View style={FooterComponentStyles.ctaContainer}>
      <Image source={require("../../assets/img/CTA.png")} />
      <Text style={FooterComponentStyles.textStyle}>MENU</Text>
      <View style={FooterComponentStyles.menuView}>
        <TouchableOpacity onPress={toggleOrganizerMenu}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={FooterComponentStyles.textStyle}>For Organizers</Text>
            <MaterialIcons
              name={
                organizerMenuOpen ? "keyboard-arrow-down" : "keyboard-arrow-up"
              }
              size={24}
              color="#fff"
            />
          </View>
        </TouchableOpacity>
        {organizerMenuOpen && (
          <>
            <Text style={FooterComponentStyles.textStyle}>
              How to create event
            </Text>
            <Text style={FooterComponentStyles.textStyle}>Event FAQs</Text>
          </>
        )}
        <TouchableOpacity onPress={toggleAttendeeMenu}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={FooterComponentStyles.textStyle}>For Attendees</Text>
            <MaterialIcons
              name={
                attendeeMenuOpen ? "keyboard-arrow-down" : "keyboard-arrow-up"
              }
              size={24}
              color="#fff"
            />
          </View>
        </TouchableOpacity>
        {attendeeMenuOpen && (
          <>
            <Text style={FooterComponentStyles.textStyle}>Item 1</Text>
            <Text style={FooterComponentStyles.textStyle}>Item 2</Text>
          </>
        )}
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
      </View>
      <Text style={FooterComponentStyles.textStyle}>
        Teeket Inc. All rights reserved.
      </Text>
    </View>
  );
};
