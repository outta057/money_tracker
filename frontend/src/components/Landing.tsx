import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { useState } from "react";
import { API_URL } from "../api";
import type { AuthState } from "../types/auth";

type LandingProps = {
	onLogin: (auth: AuthState) => void;
};

const Landing: React.FC<LandingProps> = ({ onLogin }) => {
	const [errorMessage, setErrorMessage] = useState("");

	const handleSuccess = async (credentialResponse: CredentialResponse) => {
		try {
			if (!credentialResponse.credential) {
				setErrorMessage("Google не вернул токен входа");
				return;
			}

			const res = await fetch(`${API_URL}/auth/google`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					credential: credentialResponse.credential,
				}),
			});

			const data = (await res.json()) as AuthState | { message?: string };

			if (!res.ok || !("token" in data)) {
				const responseMessage = "message" in data ? data.message : undefined;
				setErrorMessage(responseMessage || "Не удалось войти через Google");
				return;
			}

			onLogin(data);
		} catch {
			setErrorMessage("Backend сейчас недоступен");
		}
	};

	return (
		<div className="min-h-screen bg-[rgb(4,9,17)] text-white flex items-center justify-center p-6">
			<div className="w-full max-w-sm bg-[rgb(1,2,11)] border border-gray-600 rounded-xl p-6 flex flex-col gap-4">
				<div>
					<h1 className="text-xl font-semibold">Money tracker</h1>
					<p className="text-sm text-gray-500 mt-1">Войдите, чтобы сохранять свои расходы.</p>
				</div>

				<GoogleLogin
					onSuccess={handleSuccess}
					onError={() => setErrorMessage("Не удалось войти через Google")}
				/>

				{errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
			</div>
		</div>
	);
};

export default Landing;
