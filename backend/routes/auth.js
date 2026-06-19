import express from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/google", async (req, res) => {
	try {
		const { credential } = req.body;

		if (!credential) {
			return res.status(400).json({ message: "Google credential is required" });
		}

		if (!process.env.GOOGLE_CLIENT_ID || !process.env.JWT_SECRET) {
			return res.status(500).json({ message: "Auth environment is not configured" });
		}

		const ticket = await client.verifyIdToken({
			idToken: credential,
			audience: process.env.GOOGLE_CLIENT_ID,
		});

		const payload = ticket.getPayload();

		if (!payload?.sub || !payload?.email) {
			return res.status(401).json({ message: "Invalid Google token" });
		}

		let user = await User.findOne({ googleId: payload.sub });

		if (!user) {
			user = await User.create({
				googleId: payload.sub,
				email: payload.email,
				name: payload.name,
				picture: payload.picture,
			});
		}

		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});

		res.json({ token, user });
	} catch (error) {
		res.status(401).json({ message: "Google auth failed" });
	}
});

export default router;
