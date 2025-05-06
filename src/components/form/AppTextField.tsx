import { Input, Label, XStack, YStack, Text, Button } from "tamagui";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { getIcon, IconName } from "~/assets";

type AppTextFieldProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (val: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
  error?: string;
  showToggleVisibility?: boolean;
  editable?: boolean;
  disabled?: boolean;
};

export function AppTextField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = "default",
  error,
  showToggleVisibility = false,
  editable,
  disabled,
}: AppTextFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <YStack gap={6}>
      <Label
        fontFamily={"$body"}
        fontSize={"$body-xs"}
        fontWeight={"$400"}
        color={error ? "$primary" : "$labelColor"}
      >
        {label}
      </Label>
      <XStack
        gap={6}
        alignItems="center"
        borderWidth={1}
        borderColor={error ? "$primary" : "$borderColor"}
        borderRadius={8}
        backgroundColor="$background"
        paddingHorizontal={10}
        paddingVertical={12}
      >
        <Input
          flex={1}
          minHeight={20}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={error ? "$primary" : "$labelColor"}
          secureTextEntry={secureTextEntry && !visible}
          keyboardType={keyboardType}
          editable={editable}
          disabled={disabled}
          backgroundColor="transparent"
          fontSize="$body-md"
          col={error ? "$primary" : "$color"}
          borderWidth={0}
          cursorColor={"$primary"}
          py={"$0"}
          px={"$0"}
        />
        {secureTextEntry && showToggleVisibility && (
          <Button
            unstyled
            onPress={() => setVisible(!visible)}
            circular
            hoverStyle={{ opacity: 0.8 }}
          >
            <SvgXml
              xml={getIcon(
                visible ? IconName.Eye : IconName.EyeSlash,
                undefined,
                `${20}`
              )}
            />
          </Button>
        )}
      </XStack>
      {error && (
        <Text fontFamily={"$body"} color="$primary" fontSize="$body-sm">
          {error}
        </Text>
      )}
    </YStack>
  );
}
