import { atom } from "jotai";
import { AppTheme } from "~/types/theme.types";

export const themeAtom = atom<AppTheme>("light");
