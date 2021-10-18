import React, { useContext, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { AuthContext } from "../hooks/authContext";

export default function Login() {
	const login = useContext(AuthContext);

	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const onPressHandler = () => {
		if (username === "" || password === "") {
			setError(true);
			setErrorMessage("All fields are required");
			setTimeout(() => {
				setError(false);
			}, 1500);
			return;
		}
		const loginUser = { username, password };
		axios
			.post("http://localhost:5000/auth/login", loginUser)
			.then((res) => {
				login(res.data.token, { role: res.data.role, id: res.data.userId });
				localStorage.setItem("token", res.data.token);
				setIsAuth(true);
				history.push("/");
			})
			.catch(({ response }) => {
				setError(true);
				setErrorMessage(`${response.data.message}`);
			});
	};

	return (
		<View style={styles.container}>
			<View style={"register-form-control"}>
				<Text>username</Text>
				<TextInput
					type='text'
					id='username'
					value={username}
					onChange={(e) => setUserName(e.target.value)}
				/>
			</View>
			<View className='register-form-control'>
				<Text className='labell' htmlFor='password'>
					Password
				</Text>
				<TextInput
					type='password'
					id='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</View>
			<View>
				<TouchableOpacity style={styles.button}>
					<Text>login</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	button: {
		backgroundColor: "white",
	},
});
