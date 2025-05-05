import { Text } from "tamagui";
import { ScreenWrapper } from "~/components/ScreenWrapper";

export default function CartScreen() {
  return (
    <ScreenWrapper>
      <Text fontSize="$headline-md" mb="$4">
        Your Cart
      </Text>
      <Text>You can show cart items and total price here.</Text>
    </ScreenWrapper>
  );
}
