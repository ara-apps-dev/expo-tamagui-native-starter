import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "~/features/auth/screens/login/LoginScreen";
import ResetPasswordScreen from "~/features/auth/screens/reset-password/ResetPasswordScreen";
import ForgotPasswordScreen from "~/features/auth/screens/forgot-password/ForgotPasswordScreen";
import OtpScreen from "~/features/auth/screens/otp/OtpScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
