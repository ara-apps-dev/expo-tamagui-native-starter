import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { useAtom } from "jotai";
import { themeAtom } from "~/atoms/themeAtom";
import { AppTheme } from "~/types/theme.types";

export function useThemeController() {
  const systemTheme = useColorScheme(); // "light" | "dark" | null
  const [theme, setTheme] = useAtom(themeAtom);

  const setCustomTheme = (selectedTheme: AppTheme) => { 
    setTheme(selectedTheme);
  };

  const effectiveTheme = useMemo(() => {
    if (theme === "system") {
      return systemTheme ?? "light";
    }
    return theme;
  }, [theme, systemTheme]);

  return { theme, effectiveTheme, setCustomTheme };
}
