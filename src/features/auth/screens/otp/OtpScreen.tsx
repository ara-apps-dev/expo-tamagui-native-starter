import { useState } from "react";
import { View } from "react-native";
import { Input, Button, Text } from "tamagui";
import { KeyboardAvoidingWrapper } from "~/components/KeyboardAvoidingWrapper";

export default function OtpScreen() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      console.log("Verifying OTP:", otp);
    } catch (err) {
      console.error("OTP verification failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={{ padding: 16 }}>
        <Text fontSize="$headline-md" mb="$4">
          Enter OTP
        </Text>
        <Input
          placeholder="6-digit code"
          keyboardType="numeric"
          value={otp}
          onChangeText={setOtp}
          mb="$4"
        />
        <Button onPress={handleVerifyOtp} disabled={loading}>
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>
      </View>
    </KeyboardAvoidingWrapper>
  );
}
