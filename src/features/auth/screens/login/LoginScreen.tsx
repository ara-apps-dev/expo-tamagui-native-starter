// import { useState } from "react";
// import { Input, Button, Text, View } from "tamagui";
// import { useSetAtom } from "jotai";
// // import { KeyboardAvoidingWrapper } from "~/components";
// import { setTokenAtom } from "../../atoms/auth.atom";
// import { setSessionAtom } from "~/state/session.atom";
// import { mockLogin } from "../../utils/auth.utils";

// export default function LoginScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const setToken = useSetAtom(setTokenAtom);
//   const setSession = useSetAtom(setSessionAtom);

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       //   const { token, session } = await mockLogin(email, password);
//       //   setToken(token);
//       //   setSession(session);
//     } catch (err) {
//       //   console.error("Login failed", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // <KeyboardAvoidingWrapper>
//     <View p={"$-16"}>
//       <Text fontSize="$headline-md" mb="$4">
//         Login
//       </Text>
//       {/* <Input
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         mb="$3"
//       /> */}
//       {/* <Input
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         mb="$4"
//       /> */}
//       {/* <Button onPress={handleLogin} disabled={loading}>
//         {loading ? "Loading..." : "Login"}
//       </Button> */}
//     </View>
//     // </KeyboardAvoidingWrapper>
//   );
// }

import { useState } from "react";
import { Input, Button, Text, View } from "tamagui";
import { useSetAtom } from "jotai";
import { setTokenAtom } from "../../atoms/auth.atom";
import { setSessionAtom } from "~/state/session.atom";
import { mockLogin } from "../../utils/auth.utils";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const setToken = useSetAtom(setTokenAtom);
  const setSession = useSetAtom(setSessionAtom);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { token, session } = await mockLogin(email, password);
      setToken(token);
      setSession(session);
    } catch (err) {
      console.error("Login failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View padding="$4" gap="$3">
      <Text fontSize="$headline-md" marginBottom="$2">
        Login
      </Text>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        marginBottom="$2"
      />

      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        marginBottom="$3"
      />

      <Button onPress={handleLogin} disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </Button>
    </View>
  );
}
