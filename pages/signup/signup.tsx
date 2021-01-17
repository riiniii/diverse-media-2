import { default as Home } from "../../pages";
import { withHeader } from "../../components/withHeader";
import { UserAuth } from "../../components/userAuth";
import { useSignup } from "../../hooks/auth";

const Signup = () => {
	const { isLoggedIn, onSignup } = useSignup();

	return isLoggedIn ? <Home /> : <UserAuth type="signup" onSubmit={onSignup} />;
};

export default withHeader(Signup);
