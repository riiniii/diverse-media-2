import { useEffect, useState } from "react";

import { Header } from "../header";
import { SearchContext } from "../searchContext";
import { BookType } from "../searchContext/searchContext";
import { useAuth } from "../../hooks/auth";
import { AuthContext } from "../authContext";
import { Loading } from "../loading";

import styles from "../header/styles/header.module.scss";

export const withHeader = (Component) => (props: any) => {
	const { getAuth } = useAuth();
	const [isLoading, setLoading] = useState(true);
	// serach context
	const [searchString, setSearchString] = useState("");
	const [searchType, setSearchType] = useState<BookType>("title");
	const [books, setBooks] = useState([]);
	// auth context
	const [isLoggedIn, setLoggedIn] = useState(false);

	const updateLoggedIn = (isLoggedIn: boolean) => {
		setLoggedIn(isLoggedIn);
		setLoading(false);
	};
	const ctx = {
		isLoggedIn,
		updateLoggedIn,
	};
	const searchCtx = {
		searchString,
		type: searchType,
		books,
		setSearchString,
		setSearchType,
		setBooks,
	};

	useEffect(() => {
		try {
			const checkItsMe = async () => {
				const isMe = await getAuth();
				updateLoggedIn(isMe);
			};
			checkItsMe();
		} catch (error) {
			updateLoggedIn(false);
		}
	}, []);

	return !isLoading ? (
		<AuthContext.Provider value={ctx}>
			<SearchContext.Provider value={searchCtx}>
				<Header />
				{isLoading ? (
					<Loading />
				) : (
					<div id={styles.mainContainer}>
						<Component />
					</div>
				)}
			</SearchContext.Provider>
		</AuthContext.Provider>
	) : (
		<div>loading</div>
	);
};
