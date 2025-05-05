import { useState } from "react";
import { View } from "react-native";
import { Input, Button, Text } from "tamagui";
import { KeyboardAvoidingWrapper } from "~/components/KeyboardAvoidingWrapper";

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      console.log("Resetting password to:", password);
    } catch (err) {
      console.error("Reset failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={{ padding: 16 }}>
        <Text fontSize="$headline-md" mb="$4">
          Reset Password
        </Text>
        <Input
          placeholder="New Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          mb="$3"
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          mb="$4"
        />
        <Button onPress={handleResetPassword} disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </Button>
      </View>
    </KeyboardAvoidingWrapper>
  );
}
