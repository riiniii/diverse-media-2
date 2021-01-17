import classnames from "classnames/bind";

import styles from "./styles/avatar.module.scss";

const cx = classnames.bind(styles);
export const Avatar = () => {
	return <img className={cx("circularIcon")}></img>;
};
