import { useContext, useEffect, useState } from "react";
import classnames from "classnames/bind";
import { NextPage } from "next";
import { SearchContext } from "../searchContext";
import api from "../../services/api";
import { Book, IBookDetails } from "../book";

import styles from "./styles/books.module.scss";
import { useRouter } from "next/router";

const cx = classnames.bind(styles);

export interface IBooksProps {
	books: IBookDetails[];
}

export const Books: NextPage<IBooksProps> = (props: IBooksProps) => {
	const router = useRouter();
	const {
		query: { searchString = "" },
	} = router;

	const [books, setBooks] = useState([]);

	// const { books = [] } = props;

	// get books on the book page
	const getBooks = async () =>
		await api.post("api/books", {
			pagination: { start: 0, pageSize: 20 },
			sort: { type: "title", direction: "asc" }, // type: authors, title, rating
			filter: { filterBy: `%${searchString}%` },
		});

	useEffect(() => {
		const setBooksFromData = async () => {
			const { data } = await getBooks();
			setBooks(data?.books || []);
		};
		setBooksFromData();
	}, [searchString]);
	return (
		<div className={cx("booksContainer")}>
			{books.map((bookDetail, index: number) => (
				<Book data={bookDetail} key={index} />
			))}
		</div>
	);
};

Books.getInitialProps = async ({ query: { searchString = "" } }) => {
	const getBooks = async () =>
		await api.post("api/books", {
			pagination: { start: 0, pageSize: 20 },
			sort: { type: "title", direction: "asc" }, // type: authors, title, rating
			filter: { filterBy: `%${searchString}%` },
		});
	// const setBooksFromData = async () => {
	// 	const { data } = await getBooks();
	// 	setBooks(data?.books || []);
	// };
	// setBooksFromData();

	const { data } = await getBooks();
	return data?.books || [];
};
