import { NextRouter } from "next/router";

import api from "../services/api";
import { IBookDetails } from "../components/book";
const getIsbn = (path: string) => path.split("/")?.[2] || "";

export const getBookByIsbn = async (
	setBookDetails: (bookDetails: IBookDetails) => void,
	router: NextRouter
) => {
	const response = await api.post("/api/books", {
		pagination: { start: 0, pageSize: 20 },
		sort: { type: "isbn", direction: "asc" }, // type: authors, title, rating
		filter: { filterBy: `%${getIsbn(router.asPath)}%` },
	});
	if (response.status === 200 && response) {
		setBookDetails(response.data?.books?.[0]);
	}
};
