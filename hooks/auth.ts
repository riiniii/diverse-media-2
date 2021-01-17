import { useContext } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import api from "../services/api";
import { AuthContext } from "../components/authContext";
import { COOKIE_NAME } from "../constants/constants";
import { login } from "../utils/api";

export const useLogin = () => {
	const router = useRouter();
	const [, setCookie] = useCookies([COOKIE_NAME]);
	const { isLoggedIn, updateLoggedIn } = useContext(AuthContext);

	const onLogin = async (credentials) => {
		const logginResponse = await login(credentials);
		const { data, status } = logginResponse;
		try {
			if (status === 200 && data) {
				setCookie(COOKIE_NAME, data);
				updateLoggedIn(true);
				router.push("/");
			}
		} catch (error) {
			console.log("login error", error);
		}
	};
	return { isLoggedIn, onLogin };
};
export const useSignup = () => {
	const router = useRouter();
	const { isLoggedIn, updateLoggedIn } = useContext(AuthContext);
	const [, setCookie] = useCookies([COOKIE_NAME]);

	const onSignup = async (credentials: IObject) => {
		const { username, password } = credentials;
		// insert into users
		try {
			const { status, data } = await api.post("/api/signup/", {
				username,
				password,
			});

			if (status === 200 && !data) {
				updateLoggedIn(true);
				setCookie(COOKIE_NAME, data);
				router.push("/");
				return;
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	return { isLoggedIn, onSignup };
};
