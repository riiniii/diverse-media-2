import jwt from "jsonwebtoken";

import { errorResponse } from "../../../utils/api";
const JWT_HASH = process.env.JWT_HASH;
// maybe use this for account settings page
export default async (req, res) => {
	const {
		body: { token },
	} = req;

	try {
		jwt.verify(token, JWT_HASH, (err, decoded) => {
			if (err) {
				res.status(401).json({ isMe: false });
			}
		});
		return res.status(200).json({ isMe: true });
	} catch (err) {
		const { message } = err;
		return errorResponse(res, 404, message);
	}
};
