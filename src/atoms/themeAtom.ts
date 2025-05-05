import { atom } from "jotai";

export type AppTheme = "light" | "dark";

export const themeAtom = atom<AppTheme>("light");
