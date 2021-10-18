import React from "react";

import { StyleSheet, ImageBackground } from "react-native";

import AuthContextProvider from "./hooks/authContext";
import { Navigation } from "./authNavigation/Navigation";
import Test from "./screen/Test";
export default function App() {
	return (
		<AuthContextProvider>
			<ImageBackground
				style={Styles.container}
				source={require("./assets/8c74bb4e959d7211e27c10b5980cb970.jpg")}
			>
				<Navigation />
			</ImageBackground>
		</AuthContextProvider>
	);
}
const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
