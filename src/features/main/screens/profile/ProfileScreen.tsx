import { Text, useTheme } from "tamagui";
import { ScreenWrapper } from "~/components/ScreenWrapper";

export default function ProfileScreen() {
  const theme = useTheme();
  return (
    <ScreenWrapper
      statusBarBg={`${theme.primary.val}`}
      backgroundColor={`${theme.background.val}`}
    >
      <Text fontSize="$headline-md" mb="$4">
        Profile
      </Text>
      <Text>Will contain Profile info, edit button, etc. can go here.</Text>
    </ScreenWrapper>
  );
}
