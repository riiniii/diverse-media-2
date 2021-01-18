import query from "../../utils/db";
import SQL from "sql-template-strings";
import { allDefined } from "../../utils/util";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res: IObject) => {
	try {
		let bookQuery; // query we build onto
		const totalQuery = SQL`SELECT count(isbn) FROM books;`;

		const total = await query(totalQuery);
		console.log("req", req.method, req, total);

		// const totalCount = total[0]["count(isbn)"]; // will always return this
		if (req.method === "POST") {
			const {
				body: {
					pagination: { start = 0, pageSize = 20 },
					sort: { type, direction = "asc" },
					filter: { filterBy = "" },
				},
			} = req;

			const defaultQuery = SQL`SELECT * from books WHERE `.append(type);

			const filterQuery = SQL` LIKE ${filterBy}`;
			bookQuery = defaultQuery.append(filterQuery);
			// needs to be in 'like', 'order by', and 'limit' order
			if (allDefined(direction)) {
				const orderQuery = SQL` ORDER BY `
					.append(type)
					.append(` `)
					.append(direction);
				bookQuery = defaultQuery.append(orderQuery);
			}

			if (allDefined(start, pageSize)) {
				bookQuery = defaultQuery.append(` LIMIT ${start}, ${pageSize}`);
			} else if (allDefined(start)) {
				bookQuery = defaultQuery.append(` LIMIT ${start}`);
			}
			console.log("resulting query", bookQuery);
			const books = await query(bookQuery);

			return res.status(200).json({ books });
		}
	} catch (err) {
		res.statusCode = 500;
		return res.json();
	}
};
