import React, { useState, createContext, useCallback } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();
export default AuthContextProvider = (props) => {
	const [token, setToken] = useState("valid");
	const [isLogedIn, setIslogedIn] = useState(false);
	const [user, setUser] = useState();

	const login = useCallback((token, user) => {
		setToken(token);
		setUser(user);
		setIslogedIn(true);
		AsyncStorage.setItem("token", token);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUser(null);
		AsyncStorage.removeItem("token");
	}, []);

	// useEffect(() => {
	// 	const token = localStorage.getItem("token");

	// 	if (!token) return <Redirect to='/login' />;
	// 	const decoded = jwt_decode(token);

	// 	setIsAuth(true);
	// 	setUserId(decoded.id);
	// 	setRole(decoded.role);
	// });

	return (
		<AuthContext.Provider value={{ token, user, isLogedIn, login, logout }}>
			{props.children}
		</AuthContext.Provider>
	);
};
