import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList, AuthStackRoutes } from "./auth/AuthRoutes";

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  AuthStackRoutes.Login
>;
export type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  AuthStackRoutes.ForgotPassword
>;
export type OTPScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  AuthStackRoutes.Otp
>;
export type ResetPasswordScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  AuthStackRoutes.ResetPassword
>;
export type SignupScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  AuthStackRoutes.Signup
>;
