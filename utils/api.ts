import jwt from "jsonwebtoken";
import api from "../services/api";

export const errorResponse = (res, statusCode, message) =>
	res.status(statusCode).json({
		status: "error",
		message,
	});

export const generateToken = (user) =>
	jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "10m",
	});

export const login = async (credentials: IObject) => {
	return await api.post("/api/users/[users]", credentials);
};
