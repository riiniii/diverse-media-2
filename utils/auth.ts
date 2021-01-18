import jwt from "jsonwebtoken";

import env from "../constants/env";
const JWT_HASH = process.env.JWT_HASH;
// store token in
export const login = (cookie: string) => {
	// check if token matches
	console.log("my cookie", cookie)
	jwt.verify(cookie, JWT_HASH, (err, decoded) => {
		console.log("auth", decoded, err);
		if (decoded) {
			return true;
		}

		return false;
	});
	return false;
};
