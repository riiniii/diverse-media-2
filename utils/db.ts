const mysql = require("serverless-mysql");
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/.env" });

const config = {
	config: {
		host: process.env.MYSQL_HOST,
		database: process.env.MYSQL_DATABASE,
		user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        port: process.env.MYSQL_PORT
	},
}
const db = mysql(config);
const query = async (query) => {
	try {
		console.log("query", query);
		const results = await db.query(query);

		await db.end();
		return results;
	} catch (error) {
		// throw { error };
		console.log(error.message);
	}
};
export default query
