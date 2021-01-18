import classnames from "classnames/bind";
import { useContext } from "react";

import { AddBookshelfButton } from "../AddBookshelfButton";
import { AuthContext } from "../authContext";

import styles from "./styles/book.module.scss";

const cx = classnames.bind(styles);

export interface IBookDetails {
	title: string;
	isbn: string;
	author: string[];
	rating?: number;
	imgUrl?: string;
	description?: string;
}
export interface IBookProps {
	data: IBookDetails;
}
export const Book: React.FC<IBookProps> = (props: IBookProps) => {
	const {
		data: {
			title,
			isbn,
			author = [],
			rating = null,
			imgUrl = "",
			description = "",
		},
	} = props;
	const { isLoggedIn } = useContext(AuthContext);
	return (
		<div className={cx("book")} data-isbn={isbn}>
			<div className={cx("left")}>
				<img className={cx("book-image")} src={imgUrl} alt={title} />
				{isLoggedIn ? <AddBookshelfButton /> : null}
			</div>
			<div className={cx("right")}>
				<div className={cx("book-titleContainer")} title={title}>
					<span className={cx("book-title")}>{title}</span>
				</div>
				<div className={cx("book-authorContainer")}>
					<span>by </span>
					<span className={cx("book-author")}>{author}</span>
				</div>
				<div className={cx("book-ratingContainer")}>
					<span>Rating </span>
					<span className={cx("book-rating")}>{rating}</span>
				</div>
				<div className={cx("book-descriptionContainer")}>
					<span>{description}</span>
				</div>
			</div>
		</div>
	);
};
