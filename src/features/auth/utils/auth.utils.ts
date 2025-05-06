import { SessionData } from "../types/auth.types";

export const mockLogin = async (
  email: string,
  password: string
): Promise<{
  token: string;
  session: SessionData;
}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        resolve({
          token: "mocked-jwt-token",
          session: {
            id: "1",
            email: "test@example.com",
            name: "Test User",
          },
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000); // simulate network delay
  });
};

export const mockSignup = async (
  email: string,
  password: string,
  name?: string
): Promise<{
  token: string;
  session: SessionData;
}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "newuser@example.com" && password.length >= 6 && name) {
        resolve({
          token: "mocked-jwt-token",
          session: {
            id: "2",
            email: email,
            name: name,
          },
        });
      } else {
        reject(new Error("Invalid signup data"));
      }
    }, 1000); // simulate network delay
  });
};

export const mockResetPassword = async (email: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com") {
        resolve("Password reset email sent");
      } else {
        reject(new Error("Email not found"));
      }
    }, 1000); // simulate network delay
  });
};

export const mockSendOtp = async (email: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com") {
        resolve("OTP sent to email");
      } else {
        reject(new Error("Email not found"));
      }
    }, 1000); // simulate network delay
  });
};

export const mockVerifyOtp = async (
  otp: string
): Promise<{ token: string; session: SessionData }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp === "3333") {
        resolve({
          token: "mocked-jwt-token",
          session: {
            id: "1",
            email: "test@example.com",
            name: "Test User",
          },
        });
      } else {
        reject(new Error("Invalid OTP"));
      }
    }, 1000); // simulate network delay
  });
};

export const mockChangePassword = async (
  oldPassword: string,
  newPassword: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (oldPassword === "password" && newPassword.length >= 6) {
        resolve("Password changed successfully");
      } else {
        reject(new Error("Invalid password or new password too short"));
      }
    }, 1000); // simulate network delay
  });
};
