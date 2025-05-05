import { createTokens } from "tamagui";
import { fontSize, lineHeight } from "./themes";
import { tokens } from "@tamagui/themes";

export const appTokens = {
  ...tokens,
  size: {
    ...tokens.size,
    ...fontSize,
    true: 12,
  },
};
