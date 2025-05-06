import { tokens } from "@tamagui/themes";
import { fontSize } from "./fonts";

export const appTokens = {
  ...tokens,
  size: {
    ...tokens.size,
    ...fontSize,
    true: 12,
  },
};
