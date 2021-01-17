import jwt from "jsonwebtoken";
// import argon2 from "argon2";
// import jwt from "jsonwebtoken";
import escape from "sql-template-strings";

import { errorResponse } from "../../../utils/api";
import query from "../../../utils/db";
import env from "../../../constants/env";

// import env from "../constants/env";
const JWT_HASH = process.env.JWT_HASH;
// store token in
// export const login = (cookie: string) => {
// 	// check if token matches
// 	console.log("my cookie", cookie)
// 	jwt.verify(cookie, JWT_HASH, (err, decoded) => {
// 		console.log("auth", decoded, err);
// 		if (decoded) {
// 			return true;
// 		}

// 		return false;
// 	});
// 	return false;
// };

// maybe use this for account settings page
export default async (req, res) => {
	const {
		body: { token },
	} = req;

	console.log("user request was made", req.body);
	try {
		jwt.verify(token, JWT_HASH, (err, decoded) => {
			console.log("auth", decoded, err);
			if (err) {
				res.status(401).json({ isMe: false });
			}
		});
		return res.status(200).json({ isMe: true });
	} catch (err) {
		const { message } = err;
		console.log("error", err);
		return errorResponse(res, 404, message);
	}
};
