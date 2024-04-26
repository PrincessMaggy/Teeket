import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { discoverEventStyles } from "../styles/discoverEvent.style";
import { spacing } from "../utility/themes/sizes";

export const SearchEvent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={discoverEventStyles.searchContainer}>
      <KeyboardAvoidingView>
        <Searchbar
          style={discoverEventStyles.searchBar}
          icon="text-search"
          // onIconPress={}
          placeholder="search all events"
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
          }}
          onSubmitEditing={() => {
            //   search(searchQuery);
          }}
        ></Searchbar>
      </KeyboardAvoidingView>
      <Image source={require("../../assets/img/Searchbar.png")} />
    </View>
  );
};
