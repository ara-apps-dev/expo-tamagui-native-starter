import { ReactNode } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { View } from "tamagui";

export const KeyboardAvoidingWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  if (!children) {
    console.warn("No children passed to KeyboardAvoidingWrapper");
    return null; // Or you could return some fallback UI
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View flex={1}>{children}</View>
    </TouchableWithoutFeedback>
  );
};
