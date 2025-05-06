import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  View as RNView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "tamagui";
import { useThemeController } from "~/hooks";

interface ScreenWrapperProps {
  children: React.ReactNode;
  scrollable?: boolean;
  avoidKeyboard?: boolean;
  barStyle?: "light-content" | "dark-content";
  statusBarBg?: string;
  translucent?: boolean;
  contentPadding?: number;
  backgroundColor?: string;
}

export const ScreenWrapper = ({
  children,
  scrollable = true,
  avoidKeyboard = true,
  barStyle,
  statusBarBg = "transparent",
  translucent = true,
  contentPadding = 0,
  backgroundColor,
}: ScreenWrapperProps) => {
  const { effectiveTheme } = useThemeController();
  const Container = scrollable ? ScrollView : RNView;

  const contentStyle = scrollable
    ? { padding: contentPadding, flexGrow: 1 }
    : { padding: contentPadding, flex: 1 };

  const Inner = (
    <Container
      style={scrollable ? undefined : { flex: 1 }}
      contentContainerStyle={[contentStyle]}
      keyboardShouldPersistTaps="handled"
    >
      <View flex={1}>{children}</View>
    </Container>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <StatusBar
        barStyle={
          barStyle
            ? barStyle
            : effectiveTheme === "dark"
            ? "dark-content"
            : "light-content"
        }
        translucent={translucent}
        backgroundColor={statusBarBg}
      />
      {avoidKeyboard ? (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            {Inner}
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      ) : (
        Inner
      )}
    </SafeAreaView>
  );
};
