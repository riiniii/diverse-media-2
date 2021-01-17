import query from "../../../utils/db";
import escape from "sql-template-strings";
import { errorResponse } from "../../../utils/api";

const argon2 = require("argon2");

export default async (req, res) => {
	const { username, password: hash } = req;
	console.log("user request was made", req);
	try {
		const hash = await argon2.hash("password");

		const usersRes = await query(escape`
		insert into users (username, pw) VALUES (${username}, ${hash});`);

		return res.status(200).json(usersRes);
	} catch (err) {
		const { message } = err;
		console.log("error", err.message);
		// show notification or alert
		return errorResponse(res, 404, message);
	}
};
