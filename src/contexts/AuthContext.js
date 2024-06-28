import React, {
	useState,
	createContext,
	useContext,
	useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [signUpSuccess, setSignUpSuccess] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	useEffect(() => {
		checkUserSession();
	}, []);

	const checkUserSession = async () => {
		try {
			const userData = await AsyncStorage.getItem("TeeketUser");
			if (userData) {
				console.log(userData, "userData");
				setUser(JSON.parse(userData));
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}
		} catch (error) {
			console.error("Error checking user session:", error);
		}
	};

	const onLogin = async (mail) => {
		setIsLoading(true);
		try {
			const data = {
				email: mail,
				fullName: "Maggy",
				status: 200,
				message: "successful",
			};
			if (data.status !== 200) {
				setErrorMsg(data.message);
				return;
			}
			const userData = {
				email: data.email,
				fullName: data.fullName,
			};
			await AsyncStorage.setItem(
				"TeeketUser",
				JSON.stringify(userData)
			);
			setUser(userData);
			setIsAuthenticated(true);
		} catch (error) {
			console.error("Login error:", error);
			setErrorMsg("Login error");
		} finally {
			setIsLoading(false);
		}
	};
	const onSignUp = async (identity, password) => {
		setIsLoading(true);
		try {
			setSignUpSuccess(true);
		} catch (error) {
			// console.error("Login error:", error);
			setErrorMsg("Login error", error);
		} finally {
			setIsLoading(false);
		}
	};

	const onLogout = async () => {
		try {
			await AsyncStorage.removeItem("TeeketUser");
			setUser(null);
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated,
				isLoading,
				onLogin,
				onLogout,
				setUser,
				user,
				errorMsg,
				setIsLoading,
				setErrorMsg,
				onSignUp,
				signUpSuccess,
				setSignUpSuccess,
			}}
		>
			{children}
		</AuthenticationContext.Provider>
	);
};
