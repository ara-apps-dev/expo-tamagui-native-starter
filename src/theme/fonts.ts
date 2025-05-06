// Custom Tokens
export const fontSize = {
  // display
  "display-lg": 57,
  "display-md": 45,
  "display-sm": 36,
  // headline
  "headline-lg": 32,
  "headline-md": 28,
  "headline-sm": 24,
  // title
  "title-lg": 22,
  "title-md-alt": 18,
  "title-md": 16,
  "title-sm": 14,
  // body
  "body-xl": 20,
  "body-lg": 16,
  "body-md": 14,
  "body-xs": 13,
  "body-sm": 12,
  // label
  "label-lg": 14,
  "label-lg-prominent": 14,
  "label-md": 12,
  "label-md-prominent": 12,
  "label-sm": 11,
  "label-xxs": 10,
};

export const lineHeight = {
  "display-lg": 64,
  "display-md": 52,
  "display-sm": 44,
  "headline-lg": 40,
  "headline-md": 36,
  "headline-sm": 32,
  "title-lg": 28,
  "title-md": 24,
  "title-sm": 20,
  "body-lg": 24,
  "body-md": 20,
  "body-sm": 18,
  "label-lg": 20,
  "label-md": 18,
  "label-sm": 16,
};

export const fonts = {
  body: {
    family: "Roboto",
    weight: {
      400: "Roboto_400Regular",
      500: "Roboto_500Medium",
      700: "Roboto_700Bold",
    },
    size: { ...fontSize },
    lineHeight: { ...lineHeight },
    letterSpacing: {},
  },
};
