import { useContext, useEffect, useState } from "react";
import classnames from "classnames/bind";

import { SearchIcon } from "../searchIcon";
import styles from "./styles/searchBar.module.scss";
import { SearchContext } from "../searchContext";
import { useRouter } from "next/router";

const cx = classnames.bind(styles);

export const SearchBar = () => {
	const router = useRouter();
	const [searchString, setSearchString] = useState("");

	// const { searchString, type, setSearchString, setBooks } = useContext(
	// 	SearchContext
	// );

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setSearchString(e?.target?.value);
	};

	// when we want to get new books, we can do it on enter
	const onKeyDown = async (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			// setBooks(data?.books || []);
			console.log("searching for", searchString);
			router.push({ pathname: "/", query: { searchString } });
		}
	};

	return (
		<div className={cx("searchBar")}>
			<input
				className={cx("searchBar-input")}
				placeholder="Search for books here..."
				type="search"
				onChange={onChange}
				onKeyDown={onKeyDown}
				value={searchString}
			/>
			<button className={cx("searchBar-button")} type="submit">
				<SearchIcon />
			</button>
		</div>
	);
};
