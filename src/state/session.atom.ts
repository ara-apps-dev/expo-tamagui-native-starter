import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface SessionData {
  id: string;
  name: string;
  email: string;
}

// Persistent atom for saving the user session
export const sessionAtom = atomWithStorage<SessionData | null>(
  "session",
  null,
  {
    getItem: async (key) => {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    },
    setItem: async (key, value) => {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    },
    removeItem: async (key) => {
      await AsyncStorage.removeItem(key);
    },
  }
);

// Selector (just getter)
export const selectUserData = sessionAtom;

// Setter (for session update)
export const setSessionAtom = atom(null, (_get, set, data: SessionData) => {
  set(sessionAtom, data);
});

// Logout (reset session)
export const logoutAtom = atom(null, (_get, set) => {
  set(sessionAtom, null);
});
