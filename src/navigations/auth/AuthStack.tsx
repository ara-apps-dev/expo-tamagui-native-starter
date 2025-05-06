import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "~/features/auth/screens/login/LoginScreen";
import ResetPasswordScreen from "~/features/auth/screens/reset-password/ResetPasswordScreen";
import ForgotPasswordScreen from "~/features/auth/screens/forgot-password/ForgotPasswordScreen";
import OtpScreen from "~/features/auth/screens/otp/OtpScreen";
import SignupScreen from "~/features/auth/screens/signup/SignupScreen";
import { AuthStackParamList, AuthStackRoutes } from "./AuthRoutes";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthStackRoutes.Login} component={LoginScreen} />
      <Stack.Screen name={AuthStackRoutes.ForgotPassword} component={ForgotPasswordScreen} />
      <Stack.Screen name={AuthStackRoutes.Otp} component={OtpScreen} />
      <Stack.Screen name={AuthStackRoutes.ResetPassword} component={ResetPasswordScreen} />
      <Stack.Screen name={AuthStackRoutes.Signup} component={SignupScreen} />
    </Stack.Navigator>
  );
}
