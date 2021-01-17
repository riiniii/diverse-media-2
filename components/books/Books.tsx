import classnames from "classnames/bind";

import { Book, IBookDetails } from "../book";

import styles from "./styles/books.module.scss";

const cx = classnames.bind(styles);

export interface IBooksProps {
	books: IBookDetails[];
}

export const Books: React.FC<IBooksProps> = (props: IBooksProps) => {
	const { books: bookDetails = [] } = props;
	return (
		<div className={cx("booksContainer")}>
			{/* <div className={styles.book}> */}
			{bookDetails.map((bookDetail, index: number) => (
				<Book data={bookDetail} key={index} />
			))}
			{/* </div> */}
		</div>
	);
};
