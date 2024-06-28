import React, { useEffect, useState, useContext } from "react";
import { AccountNav } from "./AccountNav";
import { NavigationContainer } from "@react-navigation/native";
import { AppNav } from "./AppNav";
import { View } from "react-native";
import { AuthenticationContext } from "../contexts/AuthContext";

export const MainNav = () => {
	const { isAuthenticated } = useContext(AuthenticationContext);

	return (
		<NavigationContainer>
			<BackgroundColorWrapper>
				{isAuthenticated ? <AppNav /> : <AccountNav />}
			</BackgroundColorWrapper>
		</NavigationContainer>
	);
};

const BackgroundColorWrapper = ({ children }) => {
	return (
		<View style={{ flex: 1, backgroundColor: "#fff" }}>
			{children}
		</View>
	);
};
