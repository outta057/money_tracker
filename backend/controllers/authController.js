import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
	try {
		const { credential } = req.body;

		const ticket = await client.verifyIdToken({
			idToken: credential,
			audience: process.env.GOOGLE_CLIENT_ID,
		});

		const payload = ticket.getPayload();

		const { sub, email, name, picture } = payload;

		// ищем пользователя
		let user = await User.findOne({ googleId: sub });

		// если нет — создаём
		if (!user) {
			user = await User.create({
				googleId: sub,
				email,
				name,
				picture,
			});
		}

		res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Auth error" });
	}
};
