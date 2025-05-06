export enum AuthStackRoutes {
  Login = "AuthLogin",
  ForgotPassword = "AuthForgotPassword",
  Otp = "AuthOtp",
  ResetPassword = "AuthResetPassword",
  Signup = "AuthSignup",
}

export type AuthStackParamList = {
  [AuthStackRoutes.Login]: undefined;
  [AuthStackRoutes.ForgotPassword]: undefined;
  [AuthStackRoutes.Otp]: undefined;
  [AuthStackRoutes.ResetPassword]: undefined;
  [AuthStackRoutes.Signup]: undefined;
};
