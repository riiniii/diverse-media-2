import { useContext } from "react";
import Login from "../../pages/login";
import { AuthContext } from "../authContext";

export interface IWithUserAuthProps {
	isAuthenticated: boolean;
}

export const withUserAuth: (Component: any) => React.FC<any> = (
	Component
) => () => {
	const { isLoggedIn } = useContext(AuthContext);

	if (!isLoggedIn) {
		return <Login />;
	}
	// get from context provider if user is authenticated
	return <Component />;
};
