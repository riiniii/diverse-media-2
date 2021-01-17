import dayjs from "dayjs";
import classnames from "classnames/bind";

import styles from "./styles/review.module.scss";

const cx = classnames.bind(styles);

var LocalizedFormat = require("dayjs/plugin/localizedFormat");

export interface IReviewProps {
	userId: string;
	username: string;
	date: Date;
	review?: string;
	rating?: number;
}
// to-do, time under util
dayjs.extend(LocalizedFormat);
const dayjsFormatter = "LL";

const Review: React.FC<IReviewProps> = (props: IReviewProps) => {
	const { username, date, review, rating } = props;
	const day = dayjs(date.getTime());
	return (
		<div className={cx("review-container")}>
			<div className={cx("review-details")}>
				<span className={cx("review-username")}>
					<a>{username}</a>
				</span>
				<span> rated it </span>
				<span className={cx("review-rating")}>{rating}</span>
				<span> stars </span>
				<span className={cx("review-date")}>{day.format(dayjsFormatter)}</span>
			</div>
			<div className={cx("review-content")}>
				<span>{review}</span>
			</div>
		</div>
	);
};

export default Review;
