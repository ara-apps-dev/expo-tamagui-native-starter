import { Spinner, Stack, Text, useTheme, View } from "tamagui";
import {
  AppButton,
  AppTextField,
  PressableText,
  ScreenWrapper,
} from "~/components";
import { SvgXml } from "react-native-svg";
import { getIcon } from "~/assets";
import { SOCIALS_AUTH } from "~/constants";
import useSignup from "../../hooks/useSignup";

export default function SignupScreen() {
  const theme = useTheme();
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    handleSignup,
    toLogin,
  } = useSignup();

  return (
    <ScreenWrapper
      statusBarBg={`${theme.primary.val}`}
      backgroundColor={`${theme.background.val}`}
    >
      <View height={80} bg={"$primary"} />
      <Stack m={20} gap={20} bg={"$background"}>
        <Stack gap={6}>
          <Text fontFamily={"$body"} fontSize="$body-xl" fontWeight={"700"}>
            Sign up
          </Text>
          <Text fontFamily={"$body"} fontSize="$label-xxs" fontWeight={"400"}>
            You're just one step away from turning your photos into something
            beautiful.
          </Text>
        </Stack>

        <AppTextField
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          disabled={loading}
        />

        <AppTextField
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          showToggleVisibility
          disabled={loading}
        />

        <AppTextField
          label="Confirm Password"
          placeholder="Enter password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          showToggleVisibility
          disabled={loading}
        />

        <AppButton variant="primary" onPress={handleSignup}>
          {loading ? (
            <Stack gap={8} flexDirection="row">
              <Spinner color={"$primary"} size="small" />
              <Text
                fontFamily={"$body"}
                fontSize={"$title-sm"}
                fontWeight={"700"}
                color={"$background"}
              >
                Creating New Account...
              </Text>
            </Stack>
          ) : (
            "Create New Account"
          )}
        </AppButton>
      </Stack>
      <Stack mx={20} gap={23}>
        <Stack flexDirection="row" gap={12} ai={"center"}>
          <View f={1} h={1} bg={"$lineColor"} />
          <Text
            fontFamily={"$body"}
            fontSize="$title-sm"
            fontWeight={"700"}
            w={80}
            textAlign="center"
          >
            Or
          </Text>
          <View f={1} h={1} bg={"$lineColor"} />
        </Stack>
        <Stack flexDirection="row" gap={20} ai={"center"}>
          {SOCIALS_AUTH.map(({ icon, onPress }, idx) => (
            <AppButton
              key={idx}
              variant="outlined"
              f={1}
              mih={56}
              br={8}
              bw={1}
              boc={"$lineColor"}
              onPress={onPress}
            >
              <SvgXml xml={getIcon(icon)} />
            </AppButton>
          ))}
        </Stack>
        <Stack flexDirection="row" gap={5} jc={"center"}>
          <Text
            fontFamily={"$body"}
            fontSize="$body-md"
            fontWeight={"400"}
            col={"$color"}
          >
            Already have an account?
          </Text>
          <PressableText
            onPress={() => {
              if (!loading) {
                toLogin();
              }
            }}
          >
            Log In
          </PressableText>
        </Stack>
      </Stack>
    </ScreenWrapper>
  );
}
