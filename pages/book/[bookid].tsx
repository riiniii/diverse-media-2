import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import { IBookDetails, IBookProps } from "../../components/book";
import { withHeader } from "../../components/withHeader";
import { Review } from "../../components/review";
import { AddBookshelfButton } from "../../components/AddBookshelfButton";
import { getBookByIsbn } from "../../hooks/search";

import styles from "./styles/book.module.scss";

// TO-DO: mock implement w real data and
import { mockReview } from "../../utils/mock";
const mockReviews = new Array(10).fill(0);

const Book: NextPage<IBookProps> = () => {
	const router = useRouter();
	const [bookDetails, setBookDetails] = useState<IBookDetails>();
	const [isLoading, setLoading] = useState(true);
	const updateBookDetails = (bookDetails: IBookDetails) => {
		setBookDetails(bookDetails)
		setLoading(false);	
	}
	useEffect(() => {
		getBookByIsbn(updateBookDetails, router);
	}, []);
	if (isLoading) {
		return <div>Finding your book...</div>;
	}
	if (!bookDetails) {
		return <div>Book Does Not Exist In Our Catalogue</div>;
	}

	const {
		imgUrl = "",
		title = "",
		author = "",
		rating = "",
		description = "",
	} = bookDetails || ({} as IObject);

	// mock reviews
	return (
		<div className={styles.bookPage}>
			<div className={styles.bookDetails}>
				<div className={styles.bookImageWrapper}>
					<img className={styles.bookImage} src={imgUrl} alt={title} />
					<AddBookshelfButton />
				</div>
				<div className={styles.bookDetailWrapper}>
					<div>
						<span className={styles.title}>{title}</span>
					</div>
					<div>
						<span className={styles.by}>by </span>
						<span className={styles.author}>{author}</span>
					</div>
					<div className={styles.ratingContainer}>
						<span className={styles.rating}>{rating}</span>
					</div>
					<div className={styles.descriptionContainer}>
						<span className={styles.description}>{description}</span>
					</div>
				</div>
			</div>
			<div className={styles.separator} />
			<div className={styles.bookComments}>
				<div>
					<h2 className={styles.h2Title}>REVIEWS</h2>
				</div>
				{mockReviews.map((value, index) => (
					<Review {...mockReview} key={index} />
				))}
			</div>
		</div>
	);
};
// TO-DO: find route cause as to why  getServerSideProps retriggers
// nextjs routerempty fn to retrigger withRouter correctly
export async function getServerSideProps() {
	return {
		props: {}, // will be passed to the page component as props
	};
}

export default withHeader(Book);
