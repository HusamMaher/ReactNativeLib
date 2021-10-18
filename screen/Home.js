import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ba,
	TouchableOpacity,
	Button,
	Image,
} from "react-native";

export default function Home({ navigation }) {
	return (
		<View style={styles.constainer}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("../assets/clipart2578623.png")}
				/>
				<Text style={styles.text}>welcome to the library </Text>
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Books")}
			>
				<Text style={styles.buttonText}>login</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	constainer: {
		flex: 1,
		justifyContent: "flex-end",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#4d94ff",
		borderRadius: 10,
		alignSelf: "center",
		width: "80%",
		padding: 15,
		bottom: 50,
	},
	logoContainer: {
		top: 80,
		position: "absolute",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		padding: 5,
		color: "white",
		fontSize: 30,
	},
	logo: {
		width: 200,
		height: 200,
	},
	text: {
		top: 20,
		fontSize: 30,
		fontWeight: "600",
		color: "white",
	},
});
