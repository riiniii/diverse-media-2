import escape from "sql-template-strings";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

import query from "../../utils/db";
import { errorResponse } from "../../utils/api";

const JWT_HASH = process.env.JWT_HASH;

export default async (req, res) => {
	const {
		body: { username, password },
	} = req;
	const credentials = { username, hash: password };

	try {
		const hash = await argon2.hash("password");

		await query(escape`
		insert into users (username, pw) VALUES (${username}, ${hash});`);

		const token = jwt.sign(credentials, JWT_HASH, { expiresIn: "1d" });

		return res.status(200).json(token);
	} catch (err) {
		const { message } = err;
		console.log("error", err.message);
		// show notification or alert
		return errorResponse(res, 404, message);
	}
};
