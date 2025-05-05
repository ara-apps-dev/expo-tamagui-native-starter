import { ButtonText, Stack, Text } from "tamagui";

export default function RootNavigator() {
  return (
    <Stack p="$4" f={1} ai="center" jc="center" bg="$background">
      <Text
        fontFamily={"$body"}
        fontSize="$headline-lg"
        bg="$primary"
        color="$backgroundHover"
      >
        Ini teks headline lg
      </Text>
      <Text
        fontFamily={"$body"}
        fontSize="$headline-md"
        bg="$primary"
        color="$backgroundHover"
      >
        Ini teks headline md
      </Text>
      <Text
        fontFamily={"$body"}
        fontSize="$headline-sm"
        bg="$primary"
        color="$backgroundHover"
      >
        Ini teks headline sm
      </Text>

      <ButtonText
        fontFamily={"$body"}
        fontSize={"$display-md"}
        onPress={() => {
          console.log("clicked");
        }}
      >
        {" "}
        IniButton{" "}
      </ButtonText>
    </Stack>
  );
}
