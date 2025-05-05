import { Text } from "tamagui";
import { ScreenWrapper } from "~/components/ScreenWrapper";

export default function ProfileScreen() {
  return (
    <ScreenWrapper>
      <Text fontSize="$headline-md" mb="$4">
        Your Profile
      </Text>
      <Text>Profile info, edit button, etc. can go here.</Text>
    </ScreenWrapper>
  );
}
