import classnames from "classnames/bind";

import { SearchIcon } from "../searchIcon";
import styles from "./styles/searchBar.module.scss";

const cx = classnames.bind(styles);

export const SearchBar = () => (
	<div className={cx("searchBar")}>
		<input
			className={cx("searchBar-input")}
			placeholder="Search for books here..."
		/>
		<button className={cx("searchBar-button")} type="submit">
			<SearchIcon />
		</button>
	</div>
);
