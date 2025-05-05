import { Text } from "tamagui";
import { ScreenWrapper } from "~/components/ScreenWrapper";

export default function SettingsScreen() {
  return (
    <ScreenWrapper>
      <Text fontSize="$headline-md" mb="$4">
        Settings
      </Text>
      <Text>Dark mode, notifications, language switcher, etc.</Text>
    </ScreenWrapper>
  );
}
