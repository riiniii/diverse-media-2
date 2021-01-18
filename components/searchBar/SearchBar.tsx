import { useContext } from "react";
import classnames from "classnames/bind";

import { SearchIcon } from "../searchIcon";
import styles from "./styles/searchBar.module.scss";
import { SearchContext } from "../searchContext";
import api from "../../services/api";

const cx = classnames.bind(styles);

export const SearchBar = () => {
	const { searchString, type, setSearchString, setBooks } = useContext(SearchContext);
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setSearchString(e?.target?.value);
	};
	const onKeyDown = async (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			const { data } = await api.post("api/books", {
				pagination: { start: 0, pageSize: 20 },
				sort: { type, direction: "asc" }, // type: authors, title, rating
				filter: { filterBy: `%${searchString}%` },
			});
			setBooks(data?.books || [])
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
