import React, { useState, useContext } from "react";
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
import { AuthenticationContext } from "../contexts/AuthContext.js";

export const Home = () => {
	const { onLogin } = useContext(AuthenticationContext);
	const [email, setEmail] = useState("");

	return (
		<ScrollView>
			<View style={HomeStyles.screenContainer}>
				<HeaderComponent />

				<View style={HomeStyles.mainContainer}>
					<Text style={HomeStyles.title}>
						Login or sign up to continue
					</Text>

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
							placeholder="Enter your email address"
							maxLength={40}
							onChangeText={(text) => setEmail(text)}
							value={email}
							style={HomeStyles.inputEmail}
						/>
					</KeyboardAvoidingView>
					<Button
						labelStyle={{ color: colorTheme.text.inverse }}
						style={HomeStyles.btnEmail}
						onPress={() => onLogin(email)}
					>
						Continue with email
					</Button>
					<Text style={HomeStyles.paragraph}>
						By continuing, you acknowledge that you have read and
						understood, and agree to Teeket’s{" "}
						<Text style={HomeStyles.termsPolicyText}>
							Terms of Service
						</Text>
						and{" "}
						<Text style={HomeStyles.termsPolicyText}>
							Privacy Policy
						</Text>
						.
					</Text>
				</View>
				<FooterComponent />
			</View>
		</ScrollView>
	);
};
