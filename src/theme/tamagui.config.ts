import { createAnimations } from "@tamagui/animations-react-native";
import { shorthands } from "@tamagui/shorthands";
import { createTamagui } from "tamagui";
import { fonts } from "./fonts";
import { fontSize, themes } from "./themes";
import { appTokens } from "./tokens";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

export const config = createTamagui({
  animations,
  defaultTheme: "light",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts,
  themes,
  tokens: appTokens,
});

export type AppConfig = typeof config;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends AppConfig {}
}
