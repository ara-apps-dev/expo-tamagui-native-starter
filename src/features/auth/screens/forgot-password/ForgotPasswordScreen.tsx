import { useState } from "react";
import { View } from "react-native";
import { Input, Button, Text } from "tamagui";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      // API call to send OTP to email
      console.log("Sending OTP to:", email);
    } catch (err) {
      console.error("Failed to send OTP", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text fontSize="$headline-md" mb="$4">
        Forgot Password
      </Text>
      <Input
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        mb="$4"
      />
      <Button onPress={handleForgotPassword} disabled={loading}>
        {loading ? "Sending..." : "Send OTP"}
      </Button>
    </View>
  );
}
