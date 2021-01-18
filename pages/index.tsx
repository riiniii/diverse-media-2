import { useContext } from "react";

import { SearchContext } from "../components/searchContext";
import { withHeader } from "../components/withHeader";
import { Books } from "../components/books";

import { mockBooks } from "../utils/mock";

const Home: React.FC = () => {
	const { books } = useContext(SearchContext);

	return books?.length > 0 ? (
		<Books books={books} />
	) : (
		<div>Search For Some Books</div>
	);
};

export default withHeader(Home);
