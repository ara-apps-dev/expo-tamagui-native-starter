import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Provider as JotaiProvider } from "jotai";
import { TamaguiProvider, Theme } from "tamagui";
import RootNavigator from "~/navigations/RootNavigator";
import * as SplashScreen from "expo-splash-screen";
import { useThemeController } from "~/hooks";
import { config } from "~/theme";

export default function App() {
  const { effectiveTheme } = useThemeController();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <JotaiProvider>
      <TamaguiProvider config={config}>
        <Theme name={effectiveTheme}>
          <RootNavigator />
        </Theme>
      </TamaguiProvider>
    </JotaiProvider>
  );
}
