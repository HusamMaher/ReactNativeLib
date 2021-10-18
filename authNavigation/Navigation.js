import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/login";
import Home from "../screen/Home";
import Books from "../screen/books";
import React, { useContext } from "react";
import { AuthContext } from "../hooks/authContext";
export const Navigation = () => {
	const scheme = useColorScheme();
	const Stack = createNativeStackNavigator();
	const { token } = useContext(AuthContext);

	return (
		<NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
			{token ? (
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name='Books' component={Books} />
					<Stack.Screen name='Home' component={Home} />
				</Stack.Navigator>
			) : (
				<Stack.Navigator initialRouteName='Login'>
					<Stack.Screen name='Login' component={Login} />
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
};
