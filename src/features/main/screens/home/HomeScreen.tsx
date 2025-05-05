import { Text, View } from "tamagui";
import { ScreenWrapper } from "~/components/ScreenWrapper";

export default function HomeScreen() {
  return (
    <View>
      <Text fontSize="$headline-md" mb="$4">
        Welcome to Home
      </Text>
      <Text>Show featured products, banners, etc. here.</Text>
    </View>
  );
}
