import { Platform, View, Image, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainNav } from "./MainNav";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawerContent {...props} />}
			screenOptions={{
				headerShown: false,
				drawerHideStatusBarOnOpen:
					Platform.OS == "ios" ? true : false,
				drawerType: "slide",
				drawerPosition: "left",
				drawerStyle: {
					backgroundColor: "#fff",
					width: 200,
				},
				headerTitleAlign: "center",
				drawerLabelStyle: { fontSize: 18 },
				drawerInactiveTintColor: "#222",
				drawerActiveBackgroundColor: "#fff",
				drawerActiveTintColor: "#000",
				swipeEnabled: false,
			}}
		>
			<Drawer.Screen
				name="Home"
				component={MainNav}
				options={{
					drawerIcon: () => (
						<View
							style={{
								alignItems: "flex-end",
								justifyContent: "flex-end",
								width: 150,
							}}
						>
							<Image
								source={require("../../assets/img/closebtn.png")}
							/>
						</View>
					),
					drawerLabel: "",
				}}
			/>
		</Drawer.Navigator>
	);
}
