import { defaultConfig } from "@tamagui/config/v4";
import { createTokens } from "tamagui";
import { fontSize, lineHeight } from "./themes";

export const tokens = createTokens({
  ...defaultConfig.tokens,
  fontSize,
  lineHeight,
  font: {
    body: "Roboto",
  },
  fontWeight: {
    regular: "400",
  },
});
