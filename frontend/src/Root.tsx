import { useState } from "react";
import App from "./App";
import Landing from "./components/Landing";
import type { AuthState } from "./types/auth";

const AUTH_STORAGE_KEY = "money-tracker-auth";

function getStoredAuth(): AuthState | null {
	const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);

	if (!storedAuth) {
		return null;
	}

	try {
		return JSON.parse(storedAuth) as AuthState;
	} catch {
		localStorage.removeItem(AUTH_STORAGE_KEY);
		return null;
	}
}

function Root() {
	const [auth, setAuth] = useState<AuthState | null>(getStoredAuth);

	const handleLogin = (nextAuth: AuthState) => {
		localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextAuth));
		setAuth(nextAuth);
	};

	const handleLogout = () => {
		localStorage.removeItem(AUTH_STORAGE_KEY);
		setAuth(null);
	};

	return auth ? (
		<App token={auth.token} onLogout={handleLogout} />
	) : (
		<Landing onLogin={handleLogin} />
	);
}

export default Root;
