import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import { useContext } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { AuthenticationContext } from "../contexts/AuthContext";
import { spacing } from "../utility/themes/sizes";
import {
	DrawerActions,
	useNavigation,
} from "@react-navigation/native";

export default function CustomDrawerContent(props, { navigation }) {
	const { onLogout, user } = useContext(AuthenticationContext);
	const drawerNavigation = useNavigation();

	return (
		<View style={{ flex: 1 }}>
			{/* <StatusBar /> */}
			<DrawerContentScrollView
				showsVerticalScrollIndicator={false}
				{...props}
				style={{
					flexGrow: 1,
					marginHorizontal: 5,
					marginTop: 5,
				}}
			>
				<DrawerItemList {...props} />

				<View style={styles.imgContainer}>
					<Image
						source={require("../../assets/img/teeketBlueLogo.png")}
						style={styles.logo}
					/>
					<Text>Rebate Calculator</Text>
				</View>

				<View>
					{/* ================ Logout ================ */}
					<TouchableOpacity
						style={{
							flexDirection: "row",
							columnGap: spacing.md,
							marginLeft: spacing.sm,
						}}
						onPress={() => {
							onLogout();
							drawerNavigation.dispatch(DrawerActions.closeDrawer());
						}}
					>
						<Image
							source={require(".././../assets/img/log-out.png")}
						/>
						<View>
							<Text>Logout</Text>
						</View>
					</TouchableOpacity>
				</View>
			</DrawerContentScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	imgContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: spacing.lg,
	},
	logo: {
		height: spacing.xl,
		objectFit: "contain",
	},
});
