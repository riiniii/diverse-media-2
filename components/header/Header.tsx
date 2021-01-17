import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useContext } from "react";
import classnames from "classnames/bind";

import { AuthContext } from "../authContext";
import { BookIcon } from "../bookIcon";
import { SearchBar } from "../searchBar";

import styles from "./styles/header.module.scss";

const cx = classnames.bind(styles);

export interface IHeaderProps {
	children?: React.ReactNode;
}

export const Header: React.FC = (props: IHeaderProps) => {
	const router = useRouter();
	const { isLoggedIn } = useContext(AuthContext);
	
	const routeWrapper = (route: string) => () => {
		console.log("clicked");
		router.push(route);
	};

	return (
		<>
			<header className={cx("header")}>
				<div className={cx("header-content")}>
					<div className={cx("header-icon")}>
						<BookIcon width={32} height={32} />
					</div>
					<div className={cx("header-searchBar")}>
						<SearchBar />
					</div>
					{isLoggedIn ? (
						<>
							<div className={cx("header-account--button")}>
								<div
									className={cx("header-account--inner")}
									onClick={routeWrapper("settings")}
								>
									Account Settings
								</div>
							</div>
							<div className={cx("header-account--button")}>
								<div
									className={cx("header-account--inner")}
									onClick={routeWrapper("logout")}
								>
									Log Out
								</div>
							</div>
						</>
					) : (
						<>
							<div className={cx("header-account--button")}>
								<div
									className={cx("header-account--inner")}
									onClick={routeWrapper("login")}
								>
									Login
								</div>
							</div>
							<div className={cx("header-account--button")}>
								<div
									className={cx("header-account--inner")}
									onClick={routeWrapper("signup")}
								>
									Sign Up
								</div>
							</div>
						</>
					)}
				</div>
			</header>
		</>
	);
};
