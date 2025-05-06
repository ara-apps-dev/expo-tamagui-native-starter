import { Text, useTheme } from "tamagui";
import { ScreenWrapper } from "~/components/ScreenWrapper";

export default function CartScreen() {
  const theme = useTheme();
  return (
    <ScreenWrapper
      statusBarBg={`${theme.primary.val}`}
      backgroundColor={`${theme.background.val}`}
    >
      <Text fontSize="$headline-md" mb="$4">
        Cart
      </Text>
      <Text>Will show cart items and total price here.</Text>
    </ScreenWrapper>
  );
}
