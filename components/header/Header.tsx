import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import classnames from "classnames/bind";

import { AuthContext } from "../authContext";
import { BookIcon } from "../bookIcon";
import { SearchBar } from "../searchBar";

import styles from "./styles/header.module.scss";

const cx = classnames.bind(styles);

export interface IHeaderProps {}

export const Header: React.FC = () => {
	const router = useRouter();
	const { isLoggedIn } = useContext(AuthContext);
	const routeWrapper = (route: string) => () => {
		router.push(route);
	};
	console.log("is logged in", isLoggedIn);

	return (
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
	);
};
