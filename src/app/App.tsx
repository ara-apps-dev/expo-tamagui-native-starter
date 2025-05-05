import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { TamaguiProvider, Theme } from "tamagui";
import RootNavigator from "~/navigations/RootNavigator";
import config from "~/theme/tamagui.config";
import * as SplashScreen from "expo-splash-screen";
import { useAtomValue } from "jotai";
import { themeAtom } from "~/atoms";

export default function App() {
  const theme = useAtomValue(themeAtom);

  const [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Theme name={theme}>
        <RootNavigator />
      </Theme>
    </TamaguiProvider>
  );
}
