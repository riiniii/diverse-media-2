import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";

import { withHeader } from "../../components/withHeader";
import { UserAuth } from "../../components/userAuth";
import { COOKIE_NAME } from "../../constants/constants";
import { AuthContext } from "../../components/authContext";
import { useLogin } from "../../hooks/auth";

const Logout = () => {
	const { updateLoggedIn } = useContext(AuthContext);
	const { onLogin } = useLogin();
	
	useEffect(() => {
		updateLoggedIn(false);
	}, []);

	return <UserAuth type="logout" onSubmit={onLogin} />;
};

Logout.getInitialProps = () => {
	// logout
	const [, , removeCookie] = useCookies([COOKIE_NAME]);
	removeCookie(COOKIE_NAME);
};

export default withHeader(Logout);
