import { default as Home } from "../../pages";
import { withHeader } from "../../components/withHeader";
import { UserAuth } from "../../components/userAuth";
import { useLogin } from "../../hooks/auth";

const Login = () => {
	const { isLoggedIn, onLogin } = useLogin();
	return isLoggedIn ? <Home /> : <UserAuth type="login" onSubmit={onLogin} />;
};

export default withHeader(Login);
