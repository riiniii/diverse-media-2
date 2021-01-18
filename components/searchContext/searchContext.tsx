import { createContext } from "react";
import { IBookDetails } from "../book";

export interface ISearchContext {
	type: BookType;
	searchString: string;
	books: IBookDetails[];
	setSearchString?: React.Dispatch<React.SetStateAction<String>>;
	setSearchType?: React.Dispatch<React.SetStateAction<BookType>>;
	setBooks?: React.Dispatch<React.SetStateAction<any[]>>;
}
export type BookType = "title" | "author(s)" | "genre";
const defaultSearchContext: ISearchContext = {
	type: "title",
	searchString: "",
	books: [],
	setSearchString: (searchString: string) => {},
	setSearchType: (searchType: BookType) => {},
	setBooks: (books: any) => {},
};

export const SearchContext = createContext(defaultSearchContext);
