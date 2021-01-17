import { createContext } from "react";

export const defaultContext = {
	isLoggedIn: false,
	updateLoggedIn: (isLoggedIn: any) => {
		console.log("default logged in", isLoggedIn)
	},
};

export const AuthContext = createContext(defaultContext);
