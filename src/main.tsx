import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

import Root from "./Root.tsx";

const CLIENT_ID =
	import.meta.env.VITE_GOOGLE_CLIENT_ID ||
	"30290101694-nmcnqv3j7dsidvpvbb9hg52impfmta6s.apps.googleusercontent.com";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<GoogleOAuthProvider clientId={CLIENT_ID}>
				<Root />
			</GoogleOAuthProvider>
		</BrowserRouter>
	</StrictMode>,
);
