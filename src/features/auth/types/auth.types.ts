export interface SessionData {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  session: SessionData | null;
  token: string | null;
  isLoggedIn: boolean;
}
