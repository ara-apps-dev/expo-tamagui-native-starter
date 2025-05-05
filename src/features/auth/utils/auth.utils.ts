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
