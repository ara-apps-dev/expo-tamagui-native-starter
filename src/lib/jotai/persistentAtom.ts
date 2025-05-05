import { atom } from "jotai";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createPersistentAtom = <T>(key: string, defaultValue: T) => {
  const persistentAtom = atom(
    // ⏬ async READ
    async () => {
      const stored = await AsyncStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : defaultValue;
    },
    // ⏫ async WRITE
    async (_get, _set, newValue: T) => {
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
    }
  );

  return persistentAtom;
};
