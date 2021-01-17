import { useState, useEffect } from "react";

import api from "../services/api";
import { AuthContext, defaultContext } from "../components/authContext";
import { COOKIE_NAME } from "../constants/constants";

import "./styles/global.scss";
// https://nextjs.org/blog/next-9-3#built-in-sass-support-for-global-stylesheets
import "./styles/main.scss";
import { useCookies } from "react-cookie";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	const [ctx, setLoggedIn] = useState(defaultContext);
	const [cookies] = useCookies([COOKIE_NAME]);

	const updateLoggedIn = (isLoggedIn) => {
		console.log("updating logged in", isLoggedIn);
		setLoggedIn({ isLoggedIn, updateLoggedIn });
	};

	useEffect(() => {
		const getAuth = async () => {
			const { data } = await api.post("api/users/me", {
				token: cookies[COOKIE_NAME],
			});
			updateLoggedIn(data);
		};
		try {
			getAuth();
		} catch (error) {
			updateLoggedIn(false);
			console.log(error);
		}
		console.log(ctx);
	}, []);

	return (
		<AuthContext.Provider value={ctx}>
			<Component {...pageProps} />
		</AuthContext.Provider>
	);
}
