import argon2 from "argon2";
import jwt from "jsonwebtoken";
import escape from "sql-template-strings";

import { errorResponse } from "../../../utils/api";
import query from "../../../utils/db";
import env from "../../../constants/env";

const JWT_HASH = process.env.JWT_HASH;

// maybe use this for account settings page
export default async (req, res) => {
	const {
		body: { username, password },
	} = req;

	try {
		const usersRes = await query(escape`
		SELECT *
		FROM users WHERE username = ${username};
		  `);
		if (argon2.verify(usersRes?.[0]?.pw, password)) {
			const token = jwt.sign({ username, password }, JWT_HASH, {
				expiresIn: "1d",
			});
			return res.status(200).json(token);
		} else {
			// send notification
			return res.status(401).json(res);
		}
	} catch (err) {
		const { message } = err;
		console.log("error", err);
		return errorResponse(res, 404, message);
	}
};
