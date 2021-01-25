import jwt from "jsonwebtoken";

import env from "../constants/env";
const JWT_HASH = process.env.JWT_HASH;
// store token in
export const login = (cookie: string) => {
	jwt.verify(cookie, JWT_HASH, (err, decoded) => {
		if (decoded) {
			return true;
		}

		return false;
	});
	return false;
};
