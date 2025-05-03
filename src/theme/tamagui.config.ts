import { tokens } from "./tokens";
import { themes } from "./themes";
import { fonts } from "./fonts";
import { shorthands } from "./shorthands";
import { createTamagui } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";

// Create Tamagui Config
export const config = createTamagui({
  ...defaultConfig,
  tokens,
  themes,
  ...shorthands,
  fonts,
});

// Types
export type AppConfig = typeof config;
declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}
