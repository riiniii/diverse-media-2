import query from "../../utils/db";
import escape from "sql-template-strings";
import { errorResponse } from "../../utils/api";

export default async (req, res) => {
	const {
		body: { username, password },
	} = req;
	console.log("user request was made", username, password);
	try {
		const usersRes = await query(escape`
		select * from users where username = ${password} and password = ${password};`);
		// from returned result,
		// if (await argon2.verify("<big long hash>", "password")) {
		//     // password match
		//   } else {
		//     // password did not match
		//   }
		return res.status(200).json(usersRes);
	} catch (err) {
		const { message } = err;
		console.log("error", err.message);
		// show notification or alert
		return errorResponse(res, 404, message);
	}
};
