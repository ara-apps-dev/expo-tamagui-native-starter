import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { AuthState, SessionData } from "../types/auth.types";
import { jotaiAsyncStorage } from "~/lib";

export const authAtom = atomWithStorage<AuthState>(
  "auth",
  {
    session: null,
    token: null,
    isLoggedIn: false,
  },
  jotaiAsyncStorage
);

// --- Selectors ---
export const selectAtom = atom((get) => get(authAtom));

// --- Setters ---
export const setSessionAtom = atom(null, (get, set, session: SessionData) => {
  const current = get(authAtom);
  set(authAtom, {
    ...current,
    session,
    isLoggedIn: true,
  });
});

export const setTokenAtom = atom(null, (get, set, token: string) => {
  const current = get(authAtom);
  set(authAtom, {
    ...current,
    token,
    isLoggedIn: true,
  });
});

export const logoutAtom = atom(null, (_get, set) => {
  set(authAtom, {
    session: null,
    token: null,
    isLoggedIn: false,
  });
});
