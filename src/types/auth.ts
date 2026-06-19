export type AuthUser = {
	_id: string;
	googleId: string;
	email: string;
	name?: string;
	picture?: string;
};

export type AuthState = {
	token: string;
	user: AuthUser;
};
