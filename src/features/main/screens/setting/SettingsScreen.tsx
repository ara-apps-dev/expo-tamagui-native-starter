import { useSetAtom } from "jotai";
import { Text, useTheme } from "tamagui";
import { PressableText } from "~/components";
import { ScreenWrapper } from "~/components/ScreenWrapper";
import { logoutAtom } from "~/features";

export default function SettingsScreen() {
  const theme = useTheme();
  const logout = useSetAtom(logoutAtom);
  return (
    <ScreenWrapper
      statusBarBg={`${theme.primary.val}`}
      backgroundColor={`${theme.background.val}`}
    >
      <Text fontSize="$headline-md" mb="$4">
        Settings
      </Text>
      <Text>Dark mode, notifications, language switcher, etc.</Text>
      <PressableText
        onPress={() => {
          logout();
        }}
      >
        Logout
      </PressableText>
    </ScreenWrapper>
  );
}
