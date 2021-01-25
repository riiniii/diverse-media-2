import { useEffect, useState } from "react";
import { BookIcon } from "../../components/bookIcon";
import styles from "./styles/signup.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export type UserAuthType = "signup" | "login" | "logout";

export interface IUserAuthProps {
	onSubmit: (credentials: any) => Promise<void>;
	type: UserAuthType;
}

const buttonTypeMapping = {
	signup: "Sign Up",
	login: "Login",
	logout: "Login",
};

export const UserAuth = (props: IUserAuthProps) => {
	const { onSubmit, type } = props;
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onUsernameChange = (e) => {
		if (e.target?.value) {
			setUsername(e.target.value);
		}
	};

	const onPasswordChange = (e) => {
		if (e.target?.value) {
			setPassword(e.target.value);
		}
	};
	const onClick = () => onSubmit({ username, password });
	const onKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			onClick();
		}
	};
	return (
		<div className={cx("signup-container")}>
			<div className={cx("signup-box")}>
				<div className={cx("signup-logo")}>
					<BookIcon width={80} height={80} />
				</div>
				<div className={cx("signup-username")}>
					<div className={cx("signup-textWrapper")}>
						<span className={cx("signup-text")}>Username</span>
					</div>
					<input
						className={cx("signup-input")}
						type="input"
						onChange={onUsernameChange}
						value={username}
						onKeyDown={onKeyDown}
					/>
				</div>
				<div className={cx("signup-password")}>
					<div className={cx("signup-textWrapper")}>
						<span className={cx("signup-text")}>Password</span>
					</div>
					<input
						className={cx("signup-input")}
						type="password"
						value={password}
						onChange={onPasswordChange}
						onKeyDown={onKeyDown}
					/>
				</div>
				<div>
					<button
						className={cx("signup-submit")}
						onClick={onClick}
					>
						{buttonTypeMapping[type]}
					</button>
				</div>
			</div>
		</div>
	);
};
