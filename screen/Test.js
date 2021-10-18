import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../hooks/authContext";

export default function Test() {
	const { token } = useContext(AuthContext);
	console.log(token);
	return (
		<View>
			<Text>hello world</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
