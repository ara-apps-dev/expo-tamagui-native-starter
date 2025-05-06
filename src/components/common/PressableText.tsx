import { Text } from "tamagui";
import { ReactNode } from "react";

type PressableTextProps = {
  onPress: () => void;
  children: ReactNode;
};

export const PressableText = ({ onPress, children }: PressableTextProps) => (
  <Text
    onPress={onPress}
    color="$color"
    fontWeight="700"
    cursor="pointer"
    pressStyle={{ opacity: 0.7 }}
  >
    {children}
  </Text>
);
