import { useState } from "react";
import { useSetAtom } from "jotai";
import { setSessionAtom } from "~/state/session.atom";
import { setTokenAtom } from "../atoms";
import { mockLogin } from "../utils";
import { LoginScreenNavigationProp } from "~/navigations";
import { useNavigation } from "@react-navigation/native";
import { AuthStackRoutes } from "~/navigations/auth/AuthRoutes";

const useLogin = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const setToken = useSetAtom(setTokenAtom);
  const setSession = useSetAtom(setSessionAtom);

  const toSignup = () => {
    navigation.navigate(AuthStackRoutes.Signup);
  };

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const { token, session } = await mockLogin(email, password);
      setToken(token);
      setSession(session);
      console.log("Login success", session);
    } catch (err) {
      console.error("Login failed", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    loading,
    handleLogin,
    toSignup,
  };
};

export default useLogin;
