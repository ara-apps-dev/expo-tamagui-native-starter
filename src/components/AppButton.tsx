import { styled } from "tamagui";
import { Button } from "tamagui";

export const AppButton = styled(Button, {
  name: "AppButton",

  // Default styles
  borderRadius: 9999,
  fontFamily: "$body",
  fontWeight: "700",
  fontSize: "$title-sm",
  size: "$title-sm",
  height: 49,

  // Variants
  variants: {
    variant: {
      primary: {
        backgroundColor: "$buttonPrimaryBg",
        color: "$buttonPrimaryText",
        borderWidth: 0,

        hoverStyle: {
          backgroundColor: "$buttonPrimaryHoverBg",
        },
        pressStyle: {
          opacity: 0.9,
        },
        focusVisibleStyle: {
          outlineWidth: 2,
          outlineColor: "$buttonPrimaryHoverBg",
        },
      },

      secondary: {
        backgroundColor: "$buttonSecondaryBg",
        color: "$buttonSecondaryText",
        borderWidth: 0,

        hoverStyle: {
          backgroundColor: "$buttonSecondaryHoverBg",
        },
        pressStyle: {
          opacity: 0.9,
        },
        focusVisibleStyle: {
          outlineWidth: 2,
          outlineColor: "$buttonSecondaryHoverBg",
        },
      },

      outlined: {
        borderRadius: 6,
        height: 44,
        backgroundColor: "transparent",
        color: "$color",
        borderWidth: 2,
        borderColor: "$buttonBorderColor",

        hoverStyle: {
          borderColor: "$primary",
        },
        pressStyle: {
          opacity: 0.9,
        },
        focusVisibleStyle: {
          borderColor: "$primaryHover",
        },
      },
    },

    disabled: {
      true: {
        opacity: 0.6,
        pointerEvents: "none",
        backgroundColor: "$buttonDisabledBg",
        color: "$buttonDisabledText",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
} as const);
