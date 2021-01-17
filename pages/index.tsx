import { withHeader } from "../components/withHeader";
import { Books } from "../components/books";

import { mockBooks } from "../utils/mock";

const Home: React.FC = () => {
	
	return <Books books={mockBooks} />;
};

export default withHeader(Home);
