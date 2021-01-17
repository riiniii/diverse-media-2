import { useState } from "react";
import { IBookProps } from "../../components/book";
import { withHeader } from "../../components/withHeader";
import { Review } from "../../components/review";
import { AddBookshelfButton } from "../../components/AddBookshelfButton";
import { mockBooks, mockReview } from "../../utils/mock";

import styles from "./styles/book.module.scss";

import api from "../../services/api";

const mockReviews = new Array(10).fill(0);
const book: React.FC<IBookProps> = (props: IBookProps) => {
	const [searchInput, setSearchInput] = useState("");
	const [searchType, setSearchType] = useState("title");
	const fetchData = async () => {
		const response = await api.post("/api/books", {
			pagination: { start: 0, pageSize: 20 },
			sort: { type: searchType, direction: "asc" }, // type: authors, title, rating
			filter: { filterBy: `%${searchInput}%` },
		});
		if (response.status === 200 && response) {
			// onReceivedBooks(response.data);
			console.log("resp", response);
		}
	};
	fetchData();

	const { imgUrl, title, author, rating, description } = mockBooks[0]; // props

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
						<span className={styles.author}>{author.join(",")}</span>
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

export default withHeader(book);
