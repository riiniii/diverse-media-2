import { createContext } from "react";

export const defaultContext = {
	isLoggedIn: false,
	updateLoggedIn: (isLoggedIn: any) => {},
};

export const AuthContext = createContext(defaultContext);
