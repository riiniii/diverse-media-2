import dayjs from "dayjs";
import classnames from "classnames/bind";

import { withHeader } from "../../components/withHeader";
import { Review } from "../../components/review";
import { Books } from "../../components/books";

import { mockUser } from "../../utils/mock/mockData";
import { mockBooks, mockReview } from "../../utils/mock";

import styles from "./styles/settings.module.scss";

const cx = classnames.bind(styles);
const mockReviews = new Array(10).fill(0);
var LocalizedFormat = require("dayjs/plugin/localizedFormat");

// to-do, time under util
dayjs.extend(LocalizedFormat);
const dayjsFormatter = "LL";

export interface ISettingsProps {
	userId: string;
	username: string;
	dateJoined: Date;
	userImgUrl?: string;
}

const Settings: React.FC<ISettingsProps> = (props: ISettingsProps) => {
	const {
		username,
		userId,
		userImgUrl = "",
		dateJoined,
	}: ISettingsProps = mockUser;
	const day = dayjs(dateJoined.getTime());
	return (
		<div className={cx("settings-wrapper")}>
			<div className={cx("settings-account--info")}>
				<div className={cx("settings-user--image")}>
					<img src={userImgUrl} />
				</div>

				<div className={cx("settings-user--name")}>
					<span>{username}</span>
				</div>
				<div className={cx("settings-userId")}>
					<span>User ID: </span>
					<span>{userId}</span>
				</div>
				<div className={cx("settings-dateJoined")}>
					<span>{day.format(dayjsFormatter)}</span>
				</div>
			</div>
			<div className={cx("settings-account--books")}>
				<div className={cx("settings-subcontainer--reviews")}>
					<div>
						<h2 className={styles.h2Title}>REVIEWS</h2>
					</div>
					<div className={cx("settings-reviews")}>
						{mockReviews.map((value, index) => (
							<Review {...mockReview} key={index} />
						))}
					</div>
				</div>
				<div className={cx("settings-subcontainer--books")}>
					<div>
						<h2 className={styles.h2Title}>BOOKS</h2>
					</div>
					<div className={cx("settings-books")}>
						<Books books={mockBooks} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default withHeader(Settings);
