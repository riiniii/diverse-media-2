// const dotenv = require("dotenv");
// dotenv.config({ path: __dirname + "/.env" });

const env = {
	// hide these
	MYSQL_HOST: process.env.MYSQL_HOST,
	MYSQL_DATABASE: process.env.MYSQL_DATABASE,
	MYSQL_USER: process.env.MYSQL_USER,
	MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
	ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
	MYSQL_PORT: process.env.MYSQL_PORT,
	// don't hide these
	// JWT_HASH: process.env.JWT_HASH,
	// COOKIE_NAME: process.env.NEXT_PUBLIC_COOKIE_NAME,
};

export default env;
