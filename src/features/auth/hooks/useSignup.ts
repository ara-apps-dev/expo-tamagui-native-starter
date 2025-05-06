import { useState } from "react";
import { mockSignup } from "../utils";
import { SignupScreenNavigationProp } from "~/navigations";
import { useNavigation } from "@react-navigation/native";
import { AuthStackRoutes } from "~/navigations/auth/AuthRoutes";

const useSignup = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: AuthStackRoutes.Login }],
    });
  };

  const handleSignup = async () => {
    if (loading) return;
    if (password.trim() !== confirmPassword.trim()) {
      console.error("Signup failed", "Password not match");
      return;
    }
    setLoading(true);
    try {
      const res = await mockSignup(email, password);
      console.error("Signup Success", res);
    } catch (err) {
      console.error("Signup failed", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    loading,
    handleSignup,
    toLogin,
  };
};

export default useSignup;
