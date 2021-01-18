import { useContext } from "react";

import { SearchContext } from "../components/searchContext";
import { withHeader } from "../components/withHeader";
import { Books } from "../components/books";

import { mockBooks } from "../utils/mock";

const Home: React.FC = () => {
	return <Books />;
};

export default withHeader(Home);
